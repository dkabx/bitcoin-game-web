import { makeStyles } from '@material-ui/core';
export default makeStyles((theme) => ({
  // Desktop Links
  gameWrapper: {
    width: 650,
    margin: 'auto',
    background: theme.palette.common.white,
  },
  cardAction: {
    justifyContent: 'space-between',
  },
  contentWrapper: {
    // width: 300,
    // margin: 'auto',
    // padding: 20,
  },
  upbtn: {
    background: theme.palette.success.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.warning.main,
      // color: theme.palette.success.dark,
      color: theme.palette.success.main,
      border: `1px solid ${theme.palette.success.main}`,
    },
  },
  prices: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 600,
  },
  downbtn: {
    background: theme.palette.error.main,
    color: theme.palette.common.white,
    marginLeft: 4,
    '&:hover': {
      backgroundColor: theme.palette.warning.main,
      // color: theme.palette.success.dark,
      color: theme.palette.error.main,
      border: `1px solid ${theme.palette.error.main}`,
    },
  },
}));
