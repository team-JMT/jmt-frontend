import { ReactNode } from 'react';

import HeartIcon from '@assets/HeartIcon';
import MessageIcon from '@assets/MessageIcon';
import ImageBox from '@components/common/ImageBox';
import PlaceImage from '@components/common/PlaceImage';
import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color';
import { textStyles } from '@styles/theme/typographies';

import { Restaurant } from '../../apis/Group/data/restaurant';
import { useGetReview } from '../../apis/Group/queries/useGetReview';

const Wrapper = styled.div`
  margin-bottom: 30px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
  div {
    ${textStyles.text_M_Bold}
    color:${colors.gray900};
  }
`;
const PlaceName = styled.div`
  ${textStyles.text_L_Bold}
  color: ${colors.gray900};
  margin-top: 16px;
`;
const Introduction = styled.div`
  margin-top: 8px;
  ${textStyles.text_M_Medium}
  color:${colors.gray600};
  margin-bottom: 16px;
`;
const ReactionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  ${textStyles.text_S_Medium}
  height:24px;
`;
const ReviewBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  background: ${colors.gray100};
  padding: 20px 16px;
  margin-top: 16px;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  gap: 2px;
  width: calc(100% - 52px);
  .user-name {
    ${textStyles.text_S_Medium}
    color: ${colors.gray700};
  }
  .comment {
    ${textStyles.text_M_Medium}
    color:${colors.gray800};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
interface Props {
  data: Restaurant;
}
const PlaceCard = ({ data }: Props): ReactNode => {
  const { lastReview, reviewCount } = useGetReview(data.id);
  return (
    <Wrapper>
      <UserInfo>
        <ImageBox width={'24px'} height={'24px'} radius_px={12} imageUrl={data.userProfileImageUrl} />
        <div>{data.userNickName}</div>
      </UserInfo>
      <PlaceImage category={data.category} canDrinkLiquor={data.canDrinkLiquor} imageUrl={data.restaurantImageUrl} />
      <PlaceName>{data.name}</PlaceName>
      <Introduction>{data.introduce}</Introduction>
      <ReactionBox>
        {/* <HeartIcon /> 123  */}
        <MessageIcon /> {reviewCount}
      </ReactionBox>
      {lastReview ? (
        <ReviewBox>
          <ImageBox width={'40px'} height={'40px'} radius_px={8} imageUrl={lastReview?.reviewImages[0]} />
          <TextBox>
            <div className="user-name">{lastReview?.userName}</div>
            <div className="comment">{lastReview?.reviewContent}</div>
          </TextBox>
        </ReviewBox>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

export default PlaceCard;
