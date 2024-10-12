import { useState, useMemo, useEffect } from "react";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { DarkModeContext } from "../../components/buttons/DarkMode";
import themeDefinition, { darkTheme, lightTheme } from "../../theme/theme";

const initialState = localStorage.getItem("theme") || lightTheme;

const ThemeProviderContainer = (props) => {
  const theme = useTheme();
  const [mode, setMode] = useState(initialState);
  const darkModeTheme = createTheme(themeDefinition(mode, theme));
  const { children } = props;

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode === lightTheme ? darkTheme : lightTheme
        );
      },
    }),
    []
  );

  useEffect(() => localStorage.setItem("theme", mode), [mode]);

  return (
    <DarkModeContext.Provider value={colorMode}>
      <ThemeProvider theme={darkModeTheme}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export default ThemeProviderContainer;
