import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import styles from "./WelcomeImage.styles";

const WelcomeImage = (props) => {
  const theme = useTheme();
  const { styleWelcomeImage } = styles(theme);
  const { pSource, pSize, sx: pStyle = [] } = props;

  return (
    <Box
      component="img"
      sx={[
        {
          ...styleWelcomeImage,
          height: pSize || "250px",
          width: pSize || "250px",
          minHeight: pSize || "250px",
          minWidth: pSize || "250px",
        },
        ...(Array.isArray(pStyle) ? pStyle : [pStyle]),
      ]}
      alt="Unavalible image"
      src={pSource}
    />
  );
};

export default WelcomeImage;
