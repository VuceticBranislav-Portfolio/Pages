import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import styles from "./PlaceholderContainer.styles";
import MoreDetailsButton from "../../components/buttons/MoreDetailsButton";

const PlaceholderContainer = (props) => {
  const { children, pHeader, pSectionName } = props;
  const theme = useTheme();
  const {
    stylePlaceholderContainer,
    stylePlaceholderContainerText,
    stylePlaceholderContainerHeader,
  } = styles(theme);

  return (
    <section id={pSectionName}>
      <Box
        sx={{
          ...stylePlaceholderContainer,
          ":hover": {
            bgcolor: "frontPage.cardHighlight",
          },
        }}
      >
        {pHeader && (
          <Typography
            component="span"
            variant="h6"
            sx={stylePlaceholderContainerHeader}
          >
            {pHeader}
          </Typography>
        )}
        <Typography sx={stylePlaceholderContainerText} align="justify">
          {children}
        </Typography>
        <MoreDetailsButton />
      </Box>
    </section>
  );
};

export default PlaceholderContainer;
