import { Link as RouterLink } from 'react-router-dom';
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import styles from "./CurriculumVitae.styles";
import { Button, Tooltip, Typography } from "@mui/material";
import settings from "../../../../settings/settings";

const CurriculumVitae = (props) => {
  const { pSectionName } = props;
  const theme = useTheme();
  const {
    styleCurriculumVitae,
    styleCurriculumVitaeButton,
    styleCurriculumVitaeButtonBox,
    styleCurriculumVitaeText,
    styleCurriculumVitaeTextHeader,
  } = styles(theme);

  return (
    <section id={pSectionName}>
      <Stack direction="row" spacing={2} sx={styleCurriculumVitae}>
        <Tooltip title={"Open mechanical engineer curriculum vitae file"}>
          <Button
            component={RouterLink}
            to={settings.Path.CVMechanicalEngineer}
            variant="contained"
            size="small"
            sx={styleCurriculumVitaeButton}
          >
            <Stack direction="column">
              <Box sx={styleCurriculumVitaeButtonBox}>
                <AssignmentIndIcon />
                <Typography sx={styleCurriculumVitaeTextHeader}>CV</Typography>
              </Box>
              <Typography variant="body6" sx={styleCurriculumVitaeText}>
                Mechanical Engineer
              </Typography>
            </Stack>
          </Button>
        </Tooltip>

        <Tooltip title={"Open software developer curriculum vitae file"}>
          <Button
            component={RouterLink}
            to={settings.Path.CVSoftwareDeveloper}
            variant="contained"
            size="small"
            sx={styleCurriculumVitaeButton}
          >
            <Stack direction="column">
              <Box sx={styleCurriculumVitaeButtonBox}>
                <AssignmentIndIcon />
                <Typography sx={styleCurriculumVitaeTextHeader}>CV</Typography>
              </Box>
              <Typography variant="body6" sx={styleCurriculumVitaeText}>
                Software Developer
              </Typography>
            </Stack>
          </Button>
        </Tooltip>
      </Stack>
    </section>
  );
};

export default CurriculumVitae;
