import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import styles from "./Resume.styles";
import { Button, Tooltip, Typography } from "@mui/material";
import settings from "../../../../settings/settings";

const Resume = (props) => {
  const { pSectionName } = props;
  const theme = useTheme();
  const {
    styleResume,
    styleResumeButton,
    styleResumeButtonBox,
    styleResumeText,
    styleResumeTextHeader,
  } = styles(theme);

  return (
    <section id={pSectionName}>
      <Stack direction="row" spacing={2} sx={styleResume}>
        <Tooltip title={"Open mechanical engineer resume file"}>
          <Button
            href={settings.Path.CVMechanicalEngineer}
            variant="contained"
            size="small"
            sx={styleResumeButton}
          >
            <Stack direction="column">
              <Box sx={styleResumeButtonBox}>
                <AssignmentIndIcon />
                <Typography sx={styleResumeTextHeader}>Resume</Typography>
              </Box>
              <Typography variant="body6" sx={styleResumeText}>
                Mechanical Engineer
              </Typography>
            </Stack>
          </Button>
        </Tooltip>

        <Tooltip title={"Open software developer resume file"}>
          <Button
            href={settings.Path.CVSoftwareDeveloper}
            variant="contained"
            size="small"
            sx={styleResumeButton}
          >
            <Stack direction="column">
              <Box sx={styleResumeButtonBox}>
                <AssignmentIndIcon />
                <Typography sx={styleResumeTextHeader}>Resume</Typography>
              </Box>
              <Typography variant="body6" sx={styleResumeText}>
                Software Developer
              </Typography>
            </Stack>
          </Button>
        </Tooltip>
      </Stack>
    </section>
  );
};

export default Resume;
