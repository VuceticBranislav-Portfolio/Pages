import Button from "@mui/material/Button";
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
      <Button
        size="small"
        variant="contained"
        href={rutes.welcome}
        sx={styleUnderConstructionPage}
      >
        Go back
      </Button>
    </PageFrame>
  );
};

export default UnderConstructionPage;
