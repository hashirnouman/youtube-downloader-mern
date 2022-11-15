// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      danger: string;
      bg: string;
      green: string;
      yellow: string;
      blue: string;
      outline: string;
      boxBg: string;
      shadowBg: string;
      navbar: string;
      navText: string;
      text: string;
      border: string;
      featureText: string;
      link: string;
      white: string;
      button: string;
    };
  }
}
