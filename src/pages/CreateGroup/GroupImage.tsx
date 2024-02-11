import React, { useEffect, useState } from 'react';

import { useAtomValue } from 'jotai';

import BackIcon from '@assets/BackIcon.tsx';
import Button from '@components/common/Button.tsx';
import ImageButton from '@components/CreateGroup/ImageButton.tsx';
import Text2Row from '@components/CreateGroup/Text2Row.tsx';
import Footer from '@components/Footer.tsx';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useMainFlow } from '@stacks/StackFlow.ts';
import { createGroupAtom } from '@store/createGroupAtom.ts';
import { BackBox } from '@styles/global.tsx';
import { Container, Title } from '@styles/pages/CreateGroup.styled.ts';
import { textStyles } from '@styles/theme/typographies.ts';

import { usePostGroupMutate } from '../../apis/Group/usePostGroupMutate.ts';
import useFileInput from '../../hooks/useFileInput.ts';

type FileInput = {
  src: string;
  file?: File;
};

const GroupImage = () => {
  const group = useAtomValue(createGroupAtom);
  const { postGroup } = usePostGroupMutate();
  const {
    openFilePicker: openProfilePhotoPicker,
    selectedFiles: profilePhoto,
    resetFiles: resetProfilePhoto,
  } = useFileInput({
    accept: 'image/*',
  });
  const {
    openFilePicker: openBackgroundPhotoPicker,
    selectedFiles: backgroundPhoto,
    resetFiles: resetBackgroundPhoto,
  } = useFileInput({
    accept: 'image/*',
  });
  const { pop, replace } = useMainFlow();

  const [photoSrc, setPhotoSrc] = useState<{
    profile: FileInput;
    background: FileInput;
  }>({
    profile: {
      src: '',
    },
    background: {
      src: '',
    },
  });

  const handleSubmit = () => {
    postGroup({
      isPrivateGroup: false,
      groupBackgroundImage: photoSrc.background.file,
      groupProfileImage: photoSrc.profile.file,
      groupIntroduce: group.introduce,
      groupName: group.name,
    });
  };

  useEffect(() => {
    if (profilePhoto.length > 0) {
      setPhotoSrc((prev) => {
        const file = profilePhoto[profilePhoto.length - 1];
        return {
          ...prev,
          profile: {
            file: file,
            src: URL.createObjectURL(file),
          },
        };
      });
      resetProfilePhoto();
    }
    if (backgroundPhoto.length > 0) {
      setPhotoSrc((prev) => {
        const file = backgroundPhoto[0];
        return {
          ...prev,
          background: {
            src: URL.createObjectURL(file),
            file: file,
          },
        };
      });
      resetBackgroundPhoto();
    }
  }, [backgroundPhoto, profilePhoto, resetBackgroundPhoto, resetProfilePhoto]);

  return (
    <AppScreen
      appBar={{
        backButton: {
          render: () => (
            <BackBox onClick={pop}>
              <BackIcon />
            </BackBox>
          ),
        },
        height: '48px',
      }}
    >
      <Container>
        <Title>그룹의 이미지를 등록해주세요</Title>
        <Text2Row title={'대표 사진'} text={'설정하지 않을 경우 기본 사진으로 만들어져요'} />
        <ImageButton onClick={openProfilePhotoPicker} src={photoSrc.profile.src} />
        <Text2Row title={'배경 사진'} text={'설정하지 않을 경우 기본 사진으로 만들어져요'} />
        <ImageButton onClick={openBackgroundPhotoPicker} src={photoSrc.background.src} />
      </Container>
      <Footer>
        <Button
          onClick={() => {
            handleSubmit();
            replace('GroupDetail', {
              groupId: 1,
            });
            sessionStorage.setItem('group-init', 'true');
          }}
        >
          <span style={textStyles.text_L_Bold}>그룹 만들기</span>
        </Button>
      </Footer>
    </AppScreen>
  );
};

export default GroupImage;
