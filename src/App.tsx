import React, { FC } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { MuiThemeProvider, createTheme } from '@material-ui/core';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';

// eslint-disable-next-line import/no-unresolved
import '@aws-amplify/ui-react/styles.css';

import './App.css';

import history from 'common/utils/history';

import Routes from './Routes';
import { amplify } from './config/amplify';
import { fontFamily } from './common/utils/constants';

Amplify.configure(amplify);

Amplify.configure({
  Analytics: {
    // OPTIONAL - disable Analytics if true
    disabled: false,
    // OPTIONAL - Allow recording session events. Default is true.
    autoSessionRecord: true,

    AWSPinpoint: {
      // OPTIONAL -  Amazon Pinpoint App Client ID
      // eslint-disable-next-line no-undef
      appId: process.env.REACT_APP_PINPOINT_APP_ID,
      // OPTIONAL -  Amazon service region
      // eslint-disable-next-line no-undef
      region: process.env.REACT_APP_AWS_PROJECT_REGION,
    },
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF0000',
      contrastText: '#fff',
      light: '#FF0000',
    },
    secondary: {
      main: '#FF6829',
      contrastText: '#FFFFFF',
      light: '#FF682980',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    error: {
      main: '#FF0000',
      contrastText: '#121212',
      light: '#00000099',
      dark: '#E0987C',
    },
    warning: {
      main: '#F6FAFA',
      contrastText: '#121212',
      dark: '#000',
      light: '#00000099',
    },
    success: {
      main: '#75C24B',
      light: '#1EA59A1A',
      dark: '#93C9C7',
    },
    info: {
      main: '#FFD174',
      dark: '#808080',
      light: '#16192C',
    },
    grey: {
      50: '#404852',
      100: '#000',
      200: '#979797',
      300: '#464E5F',
      400: '#273240',
      500: '#262A41',
      600: '#222221',
      700: '#F3F6F9',
      800: '#FFC29F',
      900: '#EFF3F6',
      A100: '#FF6829',
      A200: '#0A6DF7',
      A400: '#818E9A',
      A700: '#F7F7F7',
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: fontFamily,
  },
  shadows: [
    'none',
    '0px 18px 32px rgba(208, 210, 218, 0.15)',
    '3px 0px 6px rgba(0, 0, 0, 0.06);',
    '0px 9px 6px rgba(0, 0, 0, 0.06);',
    '0px 6px 6px rgba(0, 0, 0, 0.06);',
    '0px 4px 4px rgba(0, 0, 0, 0.25);',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
});
const App: FC = () => {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </MuiThemeProvider>
    </div>
  );
};
export default withAuthenticator(App);
