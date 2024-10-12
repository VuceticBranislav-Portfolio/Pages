import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styles from "./ContactLink.styles";
import { Link, Tooltip } from "@mui/material";

function ContactLink(props) {
  const {
    children,
    pDescription,
    pLink,
    pText,
    sx: pStyle = []
  } = props;

  const theme = useTheme();

  const {
    styleContactLink,
    styleContactLinkHeader,
    styleContactLinkDescription,
    styleContactLinkButton,
  } = styles(theme);

  const iconsOnly = useMediaQuery("(min-width:500px)");

  return (
    <Box
      sx={[styleContactLink, ...(Array.isArray(pStyle) ? pStyle : [pStyle])]}
    >
      <Link
        sx={styleContactLinkButton}
        href={pLink}
        underline="none"
        color="inherit"
      >
        <Tooltip title={pText}>
          <Box sx={styleContactLinkHeader}>
            {children}
            {iconsOnly && (
              <Typography
                sx={styleContactLinkDescription}
                align="justify"
                variant="body2"
              >
                {pDescription}
              </Typography>
            )}
          </Box>
        </Tooltip>
      </Link>
    </Box>
  );
}

export default ContactLink;
