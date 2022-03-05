import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  playerWrapper: {
    width: 650,
    margin: 'auto',
    background: theme.palette.common.white,
    marginTop: 50,
    marginBottom: 20,
    padding: 10,
  },
  btprice: {
    color: theme.palette.secondary.dark,
    marginBottom: 20,
  },
  logoutbtnBox: {
    textAlign: 'right',
    padding: 10
  },
  logoutbtn: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.warning.main,
      // color: theme.palette.success.dark,
      color: theme.palette.error.main,
      border: `1px solid ${theme.palette.error.main}`,
    },
  }
}));
