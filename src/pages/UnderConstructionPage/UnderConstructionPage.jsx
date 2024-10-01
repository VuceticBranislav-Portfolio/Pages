import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import styles from "./UnderConstructionPage.styles";
import PageFrame from "../../containers/PageFrame";
import rutes from "../../settings/rutes";

const UnderConstructionPage = () => {
  const theme = useTheme();
  const { styleUnderConstructionPage } = styles(theme);

  return (
    <PageFrame sx={{ justifyContent: "center", alignItems: "center" }}>
      <Typography>Under Construction</Typography>
      <Link to={rutes.dummy} >
      <Button
        size="small"
        variant="contained"
    
        sx={styleUnderConstructionPage}
      >
        Go back
      </Button>
      </Link>
    </PageFrame>
  );
};

export default UnderConstructionPage;
