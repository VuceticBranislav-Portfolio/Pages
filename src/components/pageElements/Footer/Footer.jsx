import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import styles from "./Footer.styles";
import settings from "../../../settings/settings";

const Footer = () => {
  const theme = useTheme();
  const { styleFooter } = styles(theme);

  return (
    <AppBar position="static" enableColorOnDark>
      <Typography variant="body2" sx={styleFooter} align="left">
        {settings.footerText}
      </Typography>
    </AppBar>
  );
};

export default Footer;
