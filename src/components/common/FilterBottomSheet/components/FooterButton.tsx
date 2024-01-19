import React from 'react';

import { useAtom, useSetAtom } from 'jotai';

import { styled } from '@linaria/react';
import { BOTTOM_SHEET_KEY, toggleBottomSheet } from '@store/bottomSheetAtom';
import { FoodKey, foodCategoryState, LiquorKey, drinkCategoryState } from '@store/filterAtom';
import { colors } from '@styles/theme/color';
import { textStyles } from '@styles/theme/typographies';

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
`;
const ResetButton = styled.div`
  ${textStyles.title_S_Medium}
  border-radius: 8px;
  border: 1px solid ${colors.gray200};
  display: flex;
  min-width: 90px;
  height: 62px;
  justify-content: center;
  align-items: center;
  color: ${colors.gray400};
`;
const CheckButton = styled.div`
  ${textStyles.title_S_Medium}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 62px;
  border-radius: 8px;
  border: 1px solid ${colors.gray200};
  color: ${colors.white};
  background-color: ${colors.main500};
`;

interface FooterButtonProps {
  type: keyof typeof BOTTOM_SHEET_KEY;
  foodChecked?: keyof typeof FoodKey;
  drinkChecked?: keyof typeof LiquorKey;
}
const FooterButton: React.FC<FooterButtonProps> = ({ type, foodChecked, drinkChecked }) => {
  const [, setFoodState] = useAtom(foodCategoryState);
  const [, setDrinkState] = useAtom(drinkCategoryState);

  const useToggleBottomSheet = useSetAtom(toggleBottomSheet);

  return (
    <Wrapper>
      <ResetButton
        onClick={() => {
          if (foodChecked) {
            setFoodState('');
          } else if (drinkChecked) {
            setDrinkState('');
          }
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useToggleBottomSheet(type);
        }}
      >
        초기화
      </ResetButton>
      <CheckButton
        onClick={() => {
          if (foodChecked) {
            setFoodState(foodChecked);
          } else if (drinkChecked) {
            setDrinkState(drinkChecked);
          }
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useToggleBottomSheet(type);
        }}
      >
        확인
      </CheckButton>
    </Wrapper>
  );
};

export default FooterButton;
