import { DefaultTheme } from 'styled-components';


export function fontAtributes(fontFamily: string, fontStyle: string, fontWeight: number,
  fontSize: string, lineHeight: string, color = 'black') {
  return {
      fontFamily,
      fontStyle,
      fontWeight,
      fontSize,
      lineHeight,
      color
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'light',

  colors: {
    primary: {
      default: '#A89788',
      light: '#D4CCC4',
      dark: '#766556'
    },
    secundary: {
      default: '#A188A8',
      light: '#D0C4D4',
      dark: '#6F5676'
    },
    actions: {
      sucess: '#3BB554',
      danger: '#C83437',
      disabled: '#E8E8E8'
    },
    dark: {
      default: '#2B1F15',
      light: '#5A5A5A'
    },
    light: {
      default: '#FEF9F5',
      dark: '#E3E0DE'
    },
    background: '#FEF9F5'
  },

  fonts: {
    h1: fontAtributes('Bai Jamjuree', 'normal', 400, '5.2rem', '110%'),
    h2: fontAtributes('Alex Brush', 'normal', 400, '4.5rem', '110%'),
    h3: fontAtributes('League Spartan', 'normal', 400, '3.3rem', '110%'),
    h4: fontAtributes('Jura', 'normal', 400, '2.5rem', '110%'),
    h5: fontAtributes('Comfortaa', 'normal', 400, '1.8rem', '110%'),
    h6: fontAtributes('Comfortaa', 'normal', 400, '1.5rem', '110%'),
    // h6Bold: fontAtributes('Kanit', 'normal', 400, '4.8rem', '110%'),
    p: fontAtributes('Abel', 'normal', 400, '3.0rem', '110%'),
    // pBold: fontAtributes('Kanit', 'normal', 400, '4.8rem', '110%'),
    // small: fontAtributes('Kanit', 'normal', 400, '4.8rem', '110%'),
    // smallBold: fontAtributes('Kanit', 'normal', 400, '4.8rem', '110%'),
  }
}