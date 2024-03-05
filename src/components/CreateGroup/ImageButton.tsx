import React, { HTMLAttributes } from 'react';

import { styled } from '@linaria/react';
import { colors } from '@styles/theme/color.ts';

const Container = styled.div`
  display: flex;
  width: 120px;
  height: 120px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid ${colors.gray200};
  cursor: pointer;
`;
const Image = styled.img`
  display: flex;
  width: 120px;
  height: 120px;
  object-fit: cover;
`;

interface ImageButtonProps extends HTMLAttributes<HTMLImageElement> {
  src?: string;
}

const ImageButton = ({ onClick, src, ...rest }: ImageButtonProps) => {
  return (
    <Container onClick={onClick}>
      {src ? (
        <Image src={src} {...rest} />
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 17.5C13.25 17.5 14.3127 17.0623 15.188 16.187C16.0633 15.3117 16.5007 14.2493 16.5 13C16.5 11.75 16.0623 10.6873 15.187 9.812C14.3117 8.93667 13.2493 8.49933 12 8.5C10.75 8.5 9.68733 8.93767 8.812 9.813C7.93667 10.6883 7.49933 11.7507 7.5 13C7.5 14.25 7.93767 15.3127 8.813 16.188C9.68833 17.0633 10.7507 17.5007 12 17.5ZM4 21C3.45 21 2.979 20.804 2.587 20.412C2.195 20.02 1.99934 19.5493 2 19V7C2 6.45 2.196 5.979 2.588 5.587C2.98 5.195 3.45067 4.99933 4 5H7.15L9 3H15L16.85 5H20C20.55 5 21.021 5.196 21.413 5.588C21.805 5.98 22.0007 6.45067 22 7V19C22 19.55 21.804 20.021 21.412 20.413C21.02 20.805 20.5493 21.0007 20 21H4Z"
            fill="#7D909C"
          />
        </svg>
      )}
    </Container>
  );
};

export default ImageButton;
