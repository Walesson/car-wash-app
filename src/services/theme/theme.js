import Metrics from './metrics';

export const Theme = {
  colors: {
    background: '#112',
    black: '#000',
    primary: '#8D99AE',
    secondary: '#af4346',
    alternate: '#B364E1',
    placeholder: '#A4A6AC',
    text: '#484A54',
    white: 'white',
    gray: '#8D99AE',
    success: '#4fb774',
    danger: '#890000',
    dark: {
      light: '#6c757d',
      main: '#121212',
      dark: '#2b283c',
    },
    input: {
      border: '#EBEDF0',
      placeholder: '#A4A6AC',
      text: '#828387',
    },
  },
  ...Metrics,
};
