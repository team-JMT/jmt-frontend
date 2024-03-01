import { ReactNode } from 'react';

import HeartIcon from '@assets/HeartIcon';
import MessageIcon from '@assets/MessageIcon';
import ImageBox from '@components/common/ImageBox';
import PlaceImage from '@components/common/PlaceImage';
import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color';
import { textStyles } from '@styles/theme/typographies';

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
`;
const ReactionBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  ${textStyles.text_S_Medium}
  height:24px;
  margin: 16px 0;
`;
const ReviewBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  background: ${colors.gray100};
  padding: 20px 16px;
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

const PostedPlace = (): ReactNode => {
  return (
    <div>
      <UserInfo>
        <ImageBox width={'24px'} height={'24px'} radius_px={12} />
        <div>유저이름유저이름</div>
      </UserInfo>
      <PlaceImage category="중식" canDrinkLiquor={true} />
      <PlaceName>가가게게이이르름</PlaceName>
      <Introduction>
        여기는 가게 소개입니다.여기는 가게 소개입니다.여기는 가게 소개입니다.여기는 가게 소개입니다.여기는 가게
        소개입니다.여기는 가게 소개입니다.
      </Introduction>
      <ReactionBox>
        <HeartIcon />
        123 <MessageIcon /> 456
      </ReactionBox>
      <ReviewBox>
        <ImageBox width={'40px'} height={'40px'} radius_px={8} />
        <TextBox>
          <div className="user-name">유저 이름</div>
          <div className="comment">유저가 남긴 코메에에에에에에에에에에에에에ㅔ에에에엥에에에엔트</div>
        </TextBox>
      </ReviewBox>
    </div>
  );
};

export default PostedPlace;
