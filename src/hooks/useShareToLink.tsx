const useShareToLink = (text: string): void => {
  if (navigator.share) {
    navigator.share({
      title: '타이틀',
      text: 'Hello World',
      url: 'https://github.com/team-JMT/jmt-frontend',
    });
  } else {
    //공유하기가 지원되지 않을 경우 단순 복사로 진행
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
};

export default useShareToLink;
