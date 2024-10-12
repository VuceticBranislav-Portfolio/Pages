import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { useTheme } from "@mui/material/styles";
import styles from "./PageFrame.styles";

const PageFrame = (props) => {
  const { children, sx: pStyle = [] } = props;
  const theme = useTheme();
  const { pagePageFrame } = styles(theme);

  return (
    <Fade
      sx={[
        { ...pagePageFrame },
        ...(Array.isArray(pStyle) ? pStyle : [pStyle]),
      ]}
      in={true}
      timeout={1000}
    >
      <Box>{children}</Box>
    </Fade>
  );
};

export default PageFrame;
