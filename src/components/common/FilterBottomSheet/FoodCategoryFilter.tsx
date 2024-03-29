import { ReactNode, useEffect, useState } from 'react';

import { useAtom } from 'jotai';

import FilterIcon from '@assets/filter';
import BottomSheetCompoenet from '@components/common/BottomSheet';
import { bottomSheetState } from '@store/bottomSheetAtom';
import { FoodKey, foodCategoryState } from '@store/filterAtom';
import { colors } from '@styles/theme/color';

import FooterButton from './components/FooterButton';
import { FilterBox, FilterContainer, FilterTitle } from './styled';

const FoodCategoryFilter = (): ReactNode => {
  const [bottomSheet] = useAtom(bottomSheetState);

  const [foodState] = useAtom(foodCategoryState);
  const [localFood, setLocalFood] = useState('');

  const foodKeyList = Object.keys(FoodKey);

  useEffect(() => {
    setLocalFood(foodState);
  }, [bottomSheet, foodState]);

  return (
    <BottomSheetCompoenet
      type={'FOOD_CATEGORY'}
      content={
        <>
          <FilterTitle>
            <div className={'active'}>종류</div>
            <div>주류여부</div>
          </FilterTitle>
          <FilterContainer>
            {foodKeyList.map((item: string) => {
              const value = FoodKey[item as keyof typeof FoodKey];
              return (
                <FilterBox key={item} active={localFood === item} onClick={() => setLocalFood(item)}>
                  <FilterIcon iconName={item} color={localFood === item ? colors.main500 : colors.gray300} />
                  {value}
                </FilterBox>
              );
            })}
          </FilterContainer>
          <FooterButton type={'FOOD_CATEGORY'} foodChecked={localFood as keyof typeof FoodKey} />
        </>
      }
    ></BottomSheetCompoenet>
  );
};

export default FoodCategoryFilter;
