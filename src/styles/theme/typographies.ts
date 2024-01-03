import { fontSizes, fontWeights } from './fontStyles';

export const textStyles = {
  title_L_Bold: {
    fontSize: fontSizes.titleL,
    fontWeight: fontWeights.bold,
    letterSpacing: '-0.02em',
    lineHeight: '150%',
  },
  title_M_Bold: {
    fontSize: fontSizes.titleM,
    fontWeight: fontWeights.bold,
    letterSpacing: '-0.02em',
    lineHeight: '150%',
  },
  title_S_Bold: {
    fontSize: fontSizes.titleS,
    fontWeight: fontWeights.bold,
    letterSpacing: '-0.02em',
    lineHeight: '150%',
  },
  text_L_Bold: {
    fontSize: fontSizes.textL,
    fontWeight: fontWeights.bold,
    letterSpacing: '-0.02em',
    lineHeight: '150%',
  },
  text_M_Bold: {
    fontSize: fontSizes.textM,
    fontWeight: fontWeights.bold,
    letterSpacing: '-0.02em',
    lineHeight: '150%',
  },
  text_S_Bold: {
    fontSize: fontSizes.textS,
    fontWeight: fontWeights.bold,
    letterSpacing: '-0.02em',
    lineHeight: '150%',
  },
  title_L_Medium: {
    fontSize: fontSizes.titleL,
    fontWeight: fontWeights.medium,
    letterSpacing: '-0.02em',
    lineHeight: '150%',
  },
  title_M_Medium: {
    fontSize: fontSizes.titleM,
    fontWeight: fontWeights.medium,
    letterSpacing: '-0.02em',
    lineHeight: '150%',
  },
  title_S_Medium: {
    fontSize: fontSizes.titleS,
    fontWeight: fontWeights.medium,
    letterSpacing: '-0.02em',
    lineHeight: '150%',
  },
  text_L_Medium: {
    fontSize: fontSizes.textL,
    fontWeight: fontWeights.medium,
    letterSpacing: '-0.02em',
    lineHeight: '150%',
  },
  text_M_Medium: {
    fontSize: fontSizes.textM,
    fontWeight: fontWeights.medium,
    letterSpacing: '-0.02em',
    lineHeight: '150%',
  },
  text_S_Medium: {
    fontSize: fontSizes.textS,
    fontWeight: fontWeights.medium,
    letterSpacing: '-0.02em',
    lineHeight: '150%',
  },
} as const;

export type TextStyleToken = keyof typeof textStyles;
