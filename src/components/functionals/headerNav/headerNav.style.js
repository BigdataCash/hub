import palette from '../../../styles/palette';

const white = palette.white;

export default {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    '& .common': {
      color: white,
      padding: '0px 5px 0px 15px',
      fontSize: 14,
      '@media (min-width: 1024px) and (max-width: 1334px)':{
        fontSize: 11,
        padding: '0 15px',
        '& .icon':{
          height: 20
        }
      },
      '& .socialChannel': {
        textDecoration: 'none',
        '&:hover': {
          background: 'transparent',
        },
        '& i': {
          color: white,
        }
      },
      '& .icon': {
        height: 25
      },
      '& .TxtRegular': {
        color: white,
        padding: '0',
        fontSize: '1.2em'
      },
      '& .TxtBold': {
        color: white,
        padding: '0 0 0 10px',
        fontSize: '1.3em',
        fontWeight: 'bold'
      },
      '& .button': {
        border: 'none',
        padding: '0 15px',
        verticalAlign: 'middle',
        '& img': {
          height: 25
        }
      },
      '& .login-btn , .logout-btn': {
        padding: 0,
        color: white,
        '& div': {
          fontSize: 15,
          color: white
        }
      }
    }
  },
  mRoot: { extend: 'root' }
};
