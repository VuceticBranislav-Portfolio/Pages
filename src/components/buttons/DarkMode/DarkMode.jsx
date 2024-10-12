import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { createContext, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import styles from "./DarkMode.styles";
import useIsDarkMode from "../../../theme/utils";

const DarkModeContext = createContext({ toggleColorMode: () => {} });

function DarkMode() {
  const theme = useTheme();
  const { styleDarkModeIconButton } = styles(theme);
  const darkModeContext = useContext(DarkModeContext);

  return (
    <Tooltip title="Change color mode">
      <IconButton
        sx={styleDarkModeIconButton}
        onClick={darkModeContext.toggleColorMode}
      >
        {useIsDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  );
}

export default DarkMode;
export { DarkModeContext };
