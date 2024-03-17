import { ReactNode } from 'react';

import { styled } from '@linaria/react';

const Container = styled.div`
  margin: 6px 2px 0; //14px;
`;
const MessageIcon = (): ReactNode => {
  return (
    <Container>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="fa6-solid:message" clipPath="url(#clip0_7612_15639)">
          <path
            id="Vector"
            d="M2.5 0C1.12109 0 0 1.12109 0 2.5V13.75C0 15.1289 1.12109 16.25 2.5 16.25H6.25V19.375C6.25 19.6133 6.38281 19.8281 6.59375 19.9336C6.80469 20.0391 7.05859 20.0156 7.25 19.875L12.082 16.25H17.5C18.8789 16.25 20 15.1289 20 13.75V2.5C20 1.12109 18.8789 0 17.5 0H2.5Z"
            fill="#B7C1C8"
          />
        </g>
        <defs>
          <clipPath id="clip0_7612_15639">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </Container>
  );
};

export default MessageIcon;
