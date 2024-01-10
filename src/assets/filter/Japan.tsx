import React from 'react';
interface MyIconProps {
  color: string;
}

const Japan: React.FC<MyIconProps> = ({ color }) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Icon for Category">
        <mask
          id="mask0_5228_2685"
          //style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="30"
          height="30"
        >
          <rect id="Bounding box" width="30" height="30" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_5228_2685)">
          <path
            id="set_meal"
            d="M3.75 18.75C3.0625 18.75 2.47396 18.5052 1.98438 18.0156C1.49479 17.526 1.25 16.9375 1.25 16.25V5C1.25 4.3125 1.49479 3.72396 1.98438 3.23438C2.47396 2.74479 3.0625 2.5 3.75 2.5H26.25C26.9375 2.5 27.526 2.74479 28.0156 3.23438C28.5052 3.72396 28.75 4.3125 28.75 5V16.25C28.75 16.9375 28.5052 17.526 28.0156 18.0156C27.526 18.5052 26.9375 18.75 26.25 18.75H3.75ZM3.84375 23.125L3.75 21.25L26.2188 20.0625L26.3125 21.9375L3.84375 23.125ZM3.75 26.2188V24.3438H26.25V26.2188H3.75ZM12.8125 14.375C14.3542 14.375 15.8385 14.1042 17.2656 13.5625C18.6927 13.0208 19.9375 12.1875 21 11.0625C21.125 11.9375 21.5833 12.6042 22.375 13.0625C23.1667 13.5208 24.0417 13.75 25 13.75V7.5C24.0417 7.5 23.1667 7.73438 22.375 8.20312C21.5833 8.67188 21.125 9.35417 21 10.25C19.8958 9.16667 18.6406 8.33333 17.2344 7.75C15.8281 7.16667 14.3542 6.875 12.8125 6.875C11.1667 6.875 9.58333 7.16146 8.0625 7.73438C6.54167 8.30729 5.3125 9.27083 4.375 10.625C5.3125 11.9792 6.54167 12.9427 8.0625 13.5156C9.58333 14.0885 11.1667 14.375 12.8125 14.375Z"
            fill={color}
          />
        </g>
      </g>
    </svg>
  );
};

export default Japan;
