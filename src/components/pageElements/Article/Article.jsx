import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import styles from "./Article.styles";
import AsideFiller from "../AsideFiller";

const Article = (props) => {
  const theme = useTheme();
  const { styleBackground, styleCenter, styleAside } = styles(theme);
  const { children } = props;

  return (
    <Box sx={styleBackground}>
      <AsideFiller toLeft sx={styleAside} />
      <Box sx={styleCenter}>{children}</Box>
      <AsideFiller sx={styleAside} />
    </Box>
  );
};

export default Article;
