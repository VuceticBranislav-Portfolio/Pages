import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import styles from "./SectionContainer.styles";
import MoreDetailsButton from "../../../../components/buttons/MoreDetailsButton";

const SectionContainer = (props) => {
  const { children, pHeader, pSectionName } = props;
  const theme = useTheme();
  const {
    styleSectionContainer,
    styleSectionContainerText,
    styleSectionContainerHeader,
  } = styles(theme);

  return (
    <section id={pSectionName}>
      <Box sx={styleSectionContainer}>
        {pHeader && (
          <Typography
            component="span"
            variant="h6"
            sx={styleSectionContainerHeader}
          >
            {pHeader}
          </Typography>
        )}
        <Typography sx={styleSectionContainerText} align="justify">
          {children}
        </Typography>
        <MoreDetailsButton />
      </Box>
    </section>
  );
};

export default SectionContainer;
