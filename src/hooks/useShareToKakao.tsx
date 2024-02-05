const useShareToKakao = (): void => {
  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '그룹 이름',
      description: '그룹에 대한 설명을 쓰는 곳입니다. 근데 여기에 그룹 사진이 없으면 어떻게 되죠',
      imageUrl: 'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
      link: {
        mobileWebUrl: 'https://developers.kakao.com',
        webUrl: 'https://jmt-frontend-ad7b8.web.app/group-detail/1/',
      },
    },
    buttons: [
      {
        title: '웹으로 이동',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://jmt-frontend-ad7b8.web.app/group-detail/1/',
        },
      },
      {
        title: '앱으로 이동',
        link: {
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://jmt-frontend-ad7b8.web.app/group-detail/1/',
        },
      },
    ],
  });
};

export default useShareToKakao;
