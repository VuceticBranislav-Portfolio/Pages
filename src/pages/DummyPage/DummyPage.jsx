import { Link as RouterLink } from 'react-router-dom';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import styles from "./DummyPage.styles";
import PageFrame from "../../containers/PageFrame";
import rutes from "../../settings/rutes";

const DummyPage = () => {
  const theme = useTheme();
  const { styleDummyPage } = styles(theme);

  return (
    <PageFrame sx={{ justifyContent: "center", alignItems: "center" }}>
      <Typography>Under Construction</Typography>
      <Button
        component={RouterLink}
        to={rutes.welcome}
        size="small"
        variant="contained"
        sx={styleDummyPage}
      >
        Go back
      </Button>
    </PageFrame>
  );
};

export default DummyPage;
