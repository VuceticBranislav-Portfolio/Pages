import { grey, blue, lightBlue, red } from "@mui/material/colors";
import { alpha } from "@mui/material";

const darkTheme = "dark";
const lightTheme = "light";

const themeDefinition = (mode, theme) => {
  const select = (light, dark) => {
    return mode === darkTheme ? dark : light;
  };

  return {
    palette: {
      mode,
      background: {
        default: select(lightBlue[50], grey[900]),
        paper: select(lightBlue[50], grey[900]),
      },
      primary: {
        main: select(blue[300], blue[900]),
      },
      secondary: {
        main: select(red[300], red[900]),
      },
      text: {
        primary: select(grey[800], grey[400]),
      },
      assideFillColor: select("#fff4", "#0002"),
      imageBorderColor: select(blue[300], blue[900]),
      frontPage: {
        cardShade: select("#bbdefb40", "#fff1"),
        cardHighlight: select(alpha(blue[100], 0.4), "#fff2"),
        cardShaddow:
          "0px 3px 5px -1px #0004,0px 5px 8px 0px #0003,0px 1px 14px 0px #0002",
      },
    },
    components: {
      MuiBox: {
        styleOverrides: {
          root: {
            paddingLeft: "24px",
            paddingRight: "24px",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            paddingLeft: "24px",
            paddingRight: "24px",
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            paddingLeft: "0px",
            paddingRight: "0px",
            minHeight: "48px",
            [theme.breakpoints.up("sm")]: {
              minHeight: "48px",
            },
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: "24px",
            paddingRight: "24px",
          },
        },
      },
    },
  };
};

export default themeDefinition;
export { darkTheme, lightTheme };
