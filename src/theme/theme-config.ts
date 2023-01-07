import { css } from 'styled-components';
import { PropsTheme } from '~/types/theme';

export const theme: PropsTheme = {
  name: 'default',
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    width: {
      desktop: '1200px',
      tablet: '740px',
      mobile: '360px'
    },
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff'
    },
    primary: {
      main: '#002aff',
      light: '#3354ff',
      dark: '#001db2',
      text: '#fff'
    },
    secondary: {
      main: '#f44336',
      light: '#f6685e',
      dark: '#aa2e25',
      text: '#fff'
    },
    error: {
      main: '#C20A0A',
      light: '#F76D6D',
      dark: '#AA0909',
      text: '#fff'
    },
    warning: {
      main: '#ff9100',
      light: '#ffa733',
      dark: '#b26500',
      text: '#FEE7E7'
    },
    info: {
      main: '#2196f3',
      light: '#4dabf5',
      dark: '#1769aa',
      text: '#fff'
    },
    success: {
      main: '#8bc34a',
      light: '#a2cf6e',
      dark: '#618833',
      text: '#fff'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: 'f5f5f5',
      A200: 'eeeeee',
      A400: 'bdbdbd',
      A700: '616161'
    },
    text: {
      primary: 'rgba(0,0,0,.87)',
      secondary: 'rgba(0,0,0,.6)',
      disabled: 'rgba(0,0,0,.38)'
    },
    background: {
      default: '#fff',
      divider: 'rgba(0,0,0,.1)',
      rgba: 'rgba(255,255,255,.7)'
    }
  },
  shape: {
    radius: 4
  },
  space: 8,
  shadows: [
    'none',
    '0 4px 8px rgba(0, 0, 0, 0.1)',
    '0 -4px 8px 0 rgba(0, 0, 0, 0.08)',
    '0 0 6px 0px rgba(0, 0, 0, .4)',
    '0 6px 8px rgba(0, 0, 0, 0.2)'
  ],
  zindex: {
    screen: 1000,
    appBar: 1100,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
    menu: 2000
  },
  animation: {
    transition: [
      'transition: all 0.2s ease-in-out',
      'transition: all 0.4s ease-in-out'
    ],
    hover: [
      css`
        background-color: ${({ theme }) => theme.palette.opacity.light};
      `,
      css`
        background-color: rgba(0, 0, 0, 0.2);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-4px);
      `,
      css`
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-4px);
      `,
      css`
        background-color: rgba(0, 0, 0, 0.1);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        transform: translateY(-4px);
      `
    ],
    active: [
      'transform: scale(0.94); transition: unset;',
      'transform: scale(0.99); transition: unset;'
    ]
  }
};

export default theme;
