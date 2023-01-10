export type PropsRootTheme = { theme: PropsTheme };

type PropsPalette = {
  main: string;
  light?: string;
  dark?: string;
  text?: string;
};

export type PropsTheme = {
  name: string;
  breakpoints: {
    keys: string[];
    width: {
      [key: string]: string;
      desktop: string;
      tablet: string;
      mobile: string;
    };
    values: {
      [key: string]: number;
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  };
  palette: {
    [key: string]: PropsPalette | any;
    mode: string;
    common: {
      black: string;
      white: string;
    };
    primary: PropsPalette;
    secondary: PropsPalette;
    error: PropsPalette;
    warning: PropsPalette;
    info: PropsPalette;
    success: PropsPalette;
    grey: {
      [key: string]: string;
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      A100: string;
      A200: string;
      A400: string;
      A700: string;
    };
    text: {
      primary?: string;
      secondary?: string;
      disabled?: string;
    };
    background: {
      default: string;
      divider: string;
      rgba: string;
    };
  };
  shape: {
    radius: number;
  };
  space: number;
  shadows: string[];
  zindex: {
    screen: number;
    appBar: number;
    modal: number;
    tooltip: number;
    snackbar: number;
    menu: number;
  };
  animation: {
    transition: string[];
    hover: any[];
    active: string[];
  };
};

export type PropsBaseColors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

export type PropsBaseColorsOptions = 'light' | 'dark' | 'main' | 'text';
