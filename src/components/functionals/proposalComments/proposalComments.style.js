import palette from '../../../styles/palette';

const primaryDark = palette.primaryDark;
const white = palette.white;
const gray = palette.grey;
const greyDark = palette.greyDark;
const greyLight = palette.greyLight;

export default {
  root: {
    marginTop: 30,
    '& .commentHeadingDiv': {
      margin: 0,
      '& .heading': {
        fontSize: 20,
        color: greyDark,
        fontWeight: 200
      }
    },
    '& .section-separate': {
      margin: 0,
      '& hr': {
        border: '1px solid ' + greyLight
      },
      '& .separate-with-margin': {
        border: '1px solid ' + greyLight,
        marginTop: 30
      }
    },
    '& .commentSectionslView': {
      width: '55%',
      margin: 0,
      marginLeft: '4%',
      marginTop: 10,
      borderRadius: 5,
      background: 'rgb(213, 239, 242);',
      boxShadow: '5px 5px 20px ' + gray,

      height: 175,
      '& .commentHeading': {
        color: greyDark,
        padding: '10px 10px 0px 28px ',
        fontWeight: 500,
        fontSize: 16
      },
      '& .proposalDetails': {
        color: gray,
        fontSize: 15,
        background: white,
        padding: '10px 10px 20px 10px',
        maxWidth: '100%%',
        '& .userComment': {
          color: greyDark,
          border: 0
        },
        '& .proposalDetailsHr': {
          marginTop: 10,
          border: '1px solid ' + greyLight
        },
        '& .formSubmiButton': {
          margin: '0 10px',
          borderRadius: '10px',
          backgroundColor: primaryDark,
          color: white,
          float: 'right',
          '& .MuiButton-label-17': {
            color: white
          }
        }
      }
    },
    '& .proposalHr': {
      marginTop: 80,
      marginLeft: 20,
      width: 'calc(100% - 40px)',
      border: '1px solid ' + greyLight
    },

    '& .topCommentWithReplyView': {
      margin: 0,
      marginTop: 10,
      borderRadius: 10,
      border: '1px solid' + gray,
      minHeight: 200,
      padding: 20
    },
    '& .allReplies': {
      marginTop: 10,
      marginLeft: '8%',
      '& .replyHeading': {
        padding: '10px 10px',
        '& .replyUserVeiw': {
          padding: 0,
          marginTop: 10,
          '& .replyUserName': {
            color: greyDark,
            padding: '10px 28px',
            fontWeight: 500
          },
          '& .replyDate': {
            display: 'inline-block',
            marginLeft: '-20px',
            color: gray
          }
        }
      }
    },
    '& .commentWithReplyView': {
      margin: 0,
      marginTop: 5,
      marginBottom: 70,
      borderRadius: 10,
      border: '1px solid' + gray,
      height: 150,
      '& .commentlHrView': {
        margin: 0,
        marginLeft: 22,
        maxWidth: '94.8%',
        marginTop: '-10px',
        '& .commentlHr': {
          border: '1px solid ' + greyLight
        }
      },

      '& .commentHeading': {
        padding: '10px 10px',
        '& .userView': {
          padding: 0,
          marginTop: 10,
          '& .userName': {
            color: greyDark,
            padding: '10px 28px',
            fontWeight: 500
          },
          '& .commentDate': {
            display: 'inline-block',
            marginLeft: '-20px',
            color: gray
          },
          '& .badgeIcon': {
            width: 20,
            marginLeft: 5
          }
        }
      },
      '& .newYearView': {
        padding: 0,
        marginLeft: '4%',
        fontSize: 16,
        color: gray
      },
      '& .replyView': {
        padding: 0,
        margin: '20px 0 20px 4%',
        fontSize: 16,
        color: primaryDark,
        fontWeight: 'bold'
      }
    },
    '& textarea': {
      color: greyDark,
      maxWidth: '100%'
    },
    '& button': {
      borderRadius: '5px',
      padding: '5px',
      minHeight: '25px',
      width: '150px',
      fontSize: '16px',
      backgroundColor: primaryDark,
      margin: '0 10px',
      '& span': {
        color: white
      }
    },
    '& .votingNumber': {
      display: 'inline',
      verticalAlign: 'bottom',
      padding: '0px 3px'
    },
    '& .pagination': {
      textAlign: 'right',
      padding: '20px 0px'
    },
    '& .add-comment-btn': {
      float: 'none'
    },
    '& .replyView': {
      cursor: 'pointer'
    },
    '& .btn-clear': {
      background: 'transparent',
      width: 70,
      margin: 0,
      padding: 0,
      '& span': {
        color: primaryDark,
        justifyContent: 'left',
        textTransform: 'initial'
      }
    },
    '& .reply__container, .topCommentWithReplyView': {
      width: 'calc(100% - 20px)',
      marginLeft: 20,
      display: 'inline-block',
      '& .reply__wrapper': {
        marginTop: 20,
        '& p': {
          marginTop: 5,
          marginBottom: 5
        },
        '& .intro__wrapper': {
          borderBottom: '1px solid ' + greyLight,
          paddingBottom: 5,
          marginBottom: 5,
          '& .date': {
            color: gray,
            marginLeft: 10
          },
          '& .votes-view': {
            display: 'inline-block',
            float: 'right',
            height: 30,
            width: 80,
            marginTop: -30,
            '& .wrapper': {
              height: '100%',
              width: 40,
              display: 'inline-block',
              textAlign: 'center',
              '& img': {
                height: 30,
                marginRight: 2.5,
                marginLeft: 2.5
              }
            }
          }
        },
        '& .message__wrapper': {

        }
      }

    }
  },
  mRoot: {
    extend: 'root',
    width: '100%',
    '& .commentHeadingDiv': {
      '& .heading': {
        '&>p': {
          fontSize: 20,
        }
      }
    },
    '& .commentSectionslView': {
      width: '100%',
      '& .proposalDetails': {
        width: '100%',
        maxWidth: '100%',
        marginLeft: 0,
        padding: 5,
        '& button': {
          width: 125,
        }
      }
    },
    '& .topCommentWithReplyView': {
      width: '100%',
      display: 'block',
      maxHeight: '100%',
      paddingBottom: 10,
      minHeight: '1%',
      '& .commentHeading': {
        padding: '10px 15px !important',
        '& .userView': {
          width: '70%',
          display: 'inline-block',
          '& .userName': {
            padding: 0,
          },
          '& .commentDate': {
            marginLeft: 0,
            fontSize: '1.7vh',
          }
        },
        '& .votesView': {
          width: '30%',
          padding: '0px 5px',
          '& .downVoteICon': {
            marginLeft: 10,
            marginRight: 5,
          }
        }
      },
      '& .newYearView': {
        marginRight: '4%',
        '&>p': {
          display: 'inline-block'
        }
      },
      '& .topcommentSectionslView': {
        width: '100%',
        margin: '3px 0 20px 2%',
        '& .proposalDetails': {
          padding: 5,
          '& button': {
            width: 125,
          }
        }
      },
      '& .commentlHrView':{
        marginLeft: 0
      }
    },
    '& .allReplies': {
      width: '100%',
      display: 'block',
      margin: 'auto',
      marginLeft: '2%',
      '& .replyHeading': {
        width: '100%',
        margin: 'auto',
        '& .replyUserVeiw': {
          '& .replyUserName': {
            padding: '10px 25px 10px 0px',

          }
        }
      },
      '& .commentlHrView': {
        maxWidth: '90% !important',
        marginLeft: '0px !important',
      }
    }
  },
  loginModal: {

  }
};