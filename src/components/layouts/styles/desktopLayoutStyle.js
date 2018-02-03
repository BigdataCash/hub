import palette from './palette';

const primaryDark = palette.primaryDark;
const primaryLight = palette.primaryLight;
const white = palette.white;

export default {
  wraper: {
    //border: '1px solid red',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    minWidth: 'calc(100vw - 20px)',
    minHeight: 750
  },
  appContent: {
    width: 'calc(60vw - 55px)',
    height: 'calc(100vh - 115px)',
    overflowY: 'hidden',
    marginLeft: 20,
    marginTop: 10
  },
  leftSlider:{
    width: '20vw'
  },
  rightSlider: {
    width: '20vw',
    position: 'fixed',
    right: 0
  }
};
