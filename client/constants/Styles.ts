import { Theme } from "@/types/theme";

export const Colors = {
  light: {
    text: "#11181C",
    darkGrayText: "#252525",
    lightGrayText: "#253332",
    background: "#fff",
    white: "#fff",
    black: "#000000",
    gray: "#EEF5F9",
    darkGray: "#D1D8DBD9",
    lightestGray: "#8A8D8F",
    green: "#54D19E",
    primary: "#F0872E",
    icon: "#687076",
    tabIconDefault: "#687076",
  },
  dark: {
    text: "#ECEDEE",
    darkGrayText: "#252525",
    lightGrayText: "#253332",
    background: "#151718",
    white: "#fff",
    black: "#000000",
    gray: "#EEF5F9",
    darkGray: "#D1D8DBD9",
    lightestGray: "#8A8D8F",
    green: "#54D19E",
    primary: "#fff",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
  },
};

export const Styles = {
  fontFamily: "Roboto",
  borderRadius: {
    sm: "8px",
    lg: "18px",
  },
};

// TODO: Terminar de definir el sistema de theming
export const DefaultTheme: Theme = {
  dark: false,
  colors: {
    primary: "rgb(0, 122, 255)",
    background: Colors.light.background,
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(216, 216, 216)",
    notification: "rgb(255, 59, 48)",
  },
};
