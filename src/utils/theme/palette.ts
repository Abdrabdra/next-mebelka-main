export type ColorSchema =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "common";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    main_8: string;
    main_12: string;
    main_16: string;
    main_24: string;
    main_32: string;
    main_48: string;
  }
}

declare module "@mui/material" {
  interface Color {
    0: string;
  }
}

// SETUP COLORS
const PRIMARY = {
  light: "#FFDF6A",
  main: "#33302E",
  dark: "#33302E",
  white: "#fff",
  black: "#000",
};
const SECONDARY = {
  light: "#FFBB6A",
  main: "#F2F4F6",
  dark: "#B74B03",
  0: "#000",
  100: "#111111",
  200: "#222222",
  300: "#333333", //used
  500: "#5A5A5A", //used
  600: "#F6F6F6", // AuthPage, MainInput -> backgroundColor
  700: "#B7B7B7", //used
  800: "#8E8E8E", //used
  900: "#9E9E9E",
};
export const INFO = {
  light: "#66B5FF",
  main: "#1F90F8",
  dark: "#2073C0",
  200: "#262D35",
  400: "#A4A4A4", //used
  900: "#A9A9A9", //used
};
const SUCCESS = {
  light: "#8BF27F",
  main: "#42C747",
  dark: "#169A2E",
  100: "#B5FBDD",
};
const WARNING = {
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
};
const ERROR = {
  light: "#FF866A",
  main: "#FF0000", //used
  dark: "#B70B03",
  100: "#FFDFDC",
};
const GREY = {
  0: "#D0D0D0",
  100: "#C1C1C1",
  200: "#F0F0F0",
  300: "#E8E8E6",
  400: "#D5D4D0",
  500: "#A5A5A5", //used
  600: "#817E77",
  700: "#7B7B7B", //used
  800: "#878787",
  900: "#1B1C13",
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  info: { ...INFO, contrastText: "#fff" },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR, contrastText: "#fff" },
  grey: { ...GREY },
};

const palette = {
  light: {
    ...COMMON,
    mode: "light",
    text: { primary: COMMON.common.black },
    background: { default: COMMON.common.white },
  },
} as const;

export default palette;
