import palette from './palette';

const primary = palette.primary;
const primaryDark = palette.primaryDark;
const primaryLight = palette.primaryLight;
const white = palette.white;
const gery = palette.grey;

export default {
  mRoot: {
    borderTop: 'thin solid ' + gery,
    marginTop: 25,
    '& .divider': {
      height: '100%',
      margin: 0
    },
    '& .center-section': {
      textAlign: 'center',
      borderLeft: 'thin solid ' + gery,
      borderRight: 'thin solid ' + gery,
      height: 70,
      '& img': {
        height: 50
      }
    },
    '& button': {
      border: 'none'
    }
  }
};