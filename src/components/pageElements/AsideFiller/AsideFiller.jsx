import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { alpha } from "@mui/material";

const AsideFiller = (props) => {
  const { toLeft, sx = [] } = props;

  const theme = useTheme();

  const direction = `linear-gradient(
    ${toLeft ? "270deg" : "90deg"}, 
    ${alpha(theme.palette.background.default, 0)}, 
    ${theme.palette.background.default})`;

  return (
    <Box
      alignSelf="stretch"
      width="100%"
      sx={[{ background: direction }, ...(Array.isArray(sx) ? sx : [sx])]}
    />
  );
};

export default AsideFiller;
