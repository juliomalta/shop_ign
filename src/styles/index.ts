import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "hsl(206, 100%, 50%)",
      secondary: "hsl(206, 100%, 50%)",
      background: "hsl(206, 100%, 50%)",
      text: "hsl(206, 100%, 50%)",
      white: '#FFF',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green500: '#00875f',
      green300: '#00b37e',
    },
  },

  fontSizes: {
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
  }
  // media: {
  //   bp1: "(min-width: 640px)",
  //   bp2: "(min-width: 768px)",
  //   bp3: "(min-width: 1024px)",
  }
);
