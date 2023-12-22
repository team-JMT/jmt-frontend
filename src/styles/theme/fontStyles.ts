export const fontSizes = {
  titleL: '32px',
  titleM: '24px',
  titleS: '20px',
  textL: '16px',
  textM: '14px',
  textS: '12px',
} as const;

export const fontWeights = {
  bold: 700,
  medium: 500,
} as const;

export type FontSizeToken = keyof typeof fontSizes;
export type FontWeightToken = keyof typeof fontWeights;
