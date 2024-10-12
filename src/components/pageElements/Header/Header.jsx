import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import styles from "./Header.styles";
import DarkMode from "../../buttons/DarkMode";
import DrawerMenu from "../../navigations/DrawerMenu/DrawerMenu";

const Header = () => {
  const theme = useTheme();
  const { styleHeader, styleHeaderTitle } = styles(theme);

  return (
    <AppBar position="sticky" enableColorOnDark color="primary">
      <Toolbar sx={styleHeader} disableGutters={true}>
        <DrawerMenu />
        <Typography sx={styleHeaderTitle}>Portfolio</Typography>
        <DarkMode />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
