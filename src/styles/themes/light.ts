import {
  Alex_Brush,
  Playfair_Display,
  Raleway,
  Great_Vibes,
  Dancing_Script,
  Abel,
} from "next/font/google";

const alex = Alex_Brush({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const playfair = Playfair_Display({ subsets: ["latin"] });

const raleway = Raleway({ subsets: ["latin"] });

const greate = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});
const dancing = Dancing_Script({
  subsets: ["latin"],
});
const abel = Abel({
  subsets: ["latin"],
  weight: "400",
});


export function fontAtributes(
  fontFamily: string,
  fontStyle: string,
  fontWeight: number,
  fontSize: string,
  lineHeight: string,
  color = "black"
) {
  return {
    fontFamily,
    fontStyle,
    fontWeight,
    fontSize,
    lineHeight,
    color,
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "light",

  colors: {
    primary: {
      default: "#A89788",
      light: "#D4CCC4",
      dark: "#766556",
    },
    secundary: {
      default: "#A188A8",
      light: "#D0C4D4",
      dark: "#6F5676",
    },
    actions: {
      sucess: "#3BB554",
      danger: "#C83437",
      disabled: "#E8E8E8",
    },
    dark: {
      default: "#2B1F15",
      light: "#5A5A5A",
    },
    light: {
      default: "#FEF9F5",
      dark: "#E3E0DE",
    },
    background: "#FEF9F5",
  },

  fonts: {
    h1: fontAtributes(
      playfair.style.fontFamily,
      "normal",
      300,
      "4.5rem",
      "140%"
    ),
    h2: fontAtributes(dancing.style.fontFamily, "normal", 400, "5rem", "150%"),
    h3: fontAtributes(raleway.style.fontFamily, "normal", 300, "3rem", "120%"),
    h4: fontAtributes(
      raleway.style.fontFamily,
      "normal",
      300,
      "2.5rem",
      "150%"
    ),
    h5: fontAtributes(raleway.style.fontFamily, "normal", 400, "2rem", "150%"),
    h6: fontAtributes(
      raleway.style.fontFamily,
      "normal",
      400,
      "1.7rem",
      "150%"
    ),
    // h6Bold: fontAtributes('Kanit', 'normal', 400, '4.8rem', '150%'),
    p: fontAtributes(raleway.style.fontFamily, "normal", 300, "2rem", "150%"),
    // pBold: fontAtributes('Kanit', 'normal', 400, '4.8rem', '150%'),
    // small: fontAtributes('Kanit', 'normal', 400, '4.8rem', '150%'),
    // smallBold: fontAtributes('Kanit', 'normal', 400, '4.8rem', '150%'),
  },
};
