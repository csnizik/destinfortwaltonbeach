import { create } from '@storybook/theming';

import '../src/index.css';

export const brandColors = {
  white: {
    name: 'White',
    value: 'rgb(255,255,255)',
  },
  crystalClearTeal: {
    name: 'Crystal-Clear Teal',
    value: 'rgb(175,225,226)',
  },
  sunnySkyBlue: {
    name: 'Sunny-Sky Blue',
    value: 'rgb(72,170,237)',
  },
  sunsetPink: {
    name: 'Sunset Pink',
    value: 'rgb(252,179,177)',
  },
  seaFoamTeal: {
    name: 'Sea Foam Teal',
    value: 'rgb(119,219,219)',
  },
  navySky: {
    name: 'Navy Sky',
    value: 'rgb(18,65,104)',
  },
  mossGreen: {
    name: 'Moss Green',
    value: 'rgb(95,119,114)',
  },
  dustyRose: {
    name: 'Dusty Rose',
    value: 'rgb(158,95,95)',
  },
  whitewashWhite: {
    name: 'Whitewash White',
    value: 'rgb(247,251,249)',
  },
  black: {
    name: 'Black',
    value: 'rgb(35,31,32)',
  },
};

export default create({
  base: 'light',

  brandTitle: 'Destin Fort Walton Beach',
  brandUrl: 'https://destinfwb.com',
  brandImage:
    'https://www.destinfwb.com/includes/public/assets/placeholders/logo.svg',

  colorPrimary: brandColors.crystalClearTeal.value,
  colorSecondary: brandColors.navySky.value,

  appBg: brandColors.white.value,
  appContentBg: brandColors.white.value,
  appBorderColor: brandColors.seaFoamTeal.value,
  appBorderRadius: 4,

  textColor: brandColors.navySky.value,
  textInverseColor: 'rgba(255,255,255,0.9)',

  barTextColor: brandColors.sunsetPink.value,
  barSelectedColor: brandColors.dustyRose.value,
  barBg: brandColors.whitewashWhite,
});
