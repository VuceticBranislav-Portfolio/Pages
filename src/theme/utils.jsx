import { useTheme } from "@mui/material/styles";
import { lightTheme } from "./theme";

const useIsDarkMode = () => {
  const theme = useTheme();
  return theme.palette.mode === lightTheme;
};

export default useIsDarkMode;
