// my-theme.ts
import { DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  colors: {
    main: "#2d3e50",
    secondary: "magenta",
    danger: "#FF0001",
    bg: "#e5e9f4",
    green: "#2AC58B",
    yellow: "#FEDB41",
    blue: "#0055ff",
    outline: "#F1F2F4",
    boxBg: "#FFFFFF",
    shadowBg: "#46464621",
    navbar: "white",
    navText: "#2D3E50",
    text: "black",
    border: "#2d3e50",
    featureText: "#2AC58B",
    link: "#0055ff",
    white: "#2d3e50",
    button: "#2d3e50",
  },
};
const dark: DefaultTheme = {
  colors: {
    main: "white",
    secondary: "magenta",
    danger: "#FF0001",
    bg: "black",
    green: "#a8a8a8",
    yellow: "#a8a8a8",
    blue: "#a8a8a8",
    outline: "#2ac58b",
    boxBg: "#292929",
    shadowBg: "#46464621",
    navbar: "#1f1f1f",
    navText: "white",
    text: "white",
    border: "#2ac58b",
    featureText: "#2AC58B",
    link: "#2AC58B",
    white: "#a8a8a8",
    button: "#2ac58b",
  },
};
export { dark, myTheme };
