const basicColors = {
  white: 'rgba(255, 255, 255, 1)',

  primary: '#61B6BF',
  primaryLight: '#78B8BF',
  primaryDark: '#4CB3BF',
  primaryHover: 'rgba(25, 145, 204, 0.3)',

  secondary: 'rgba(26, 188, 156, 1)',

  grey: 'rgba(97,67,191,0.5)',
  greyLight: 'rgb(213, 239, 242)',
  greyDark: 'rgba(97,67,191,0.6)',
  greyHover: 'rgba(97,67,191,0.3)',

  red: 'rgba(214, 20, 20, 1)',
  redHover: 'rgba(214, 20, 20, 0.3)',

  green: 'rgba(151, 203, 84, 1)',
  greenLight: 'rgba(135,208,104, 1)',
  greenHover: 'rgba(151, 203, 84, 0.3)',

  transparentBlack: 'rgba(0, 0, 0, 0.70)',

  boxShadow: '-1px 18px 20px -18px rgba(0,0,0,0.5)'
};

const themeColors = {
  textBlue: basicColors.primary,
  text: basicColors.greyDark,
  textLight: basicColors.grey
};

export default { ...basicColors, ...themeColors };
