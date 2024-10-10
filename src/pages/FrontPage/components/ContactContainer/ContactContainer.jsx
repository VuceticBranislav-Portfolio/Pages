import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import styles from "./ContactContainer.styles";
import ContactLink from "../../../../components/navigations/ContactLink";
import MoreDetailsButton from "../../../../components/buttons/MoreDetailsButton";

const ContactContainer = (props) => {
  const { children, pHeader, pSectionName } = props;
  const theme = useTheme();
  const {
    styleContactContainer,
    styleContactContainerText,
    styleContactContainerHeader,
    styleContactContainerStack,
  } = styles(theme);

  return (
    <section id={pSectionName}>
      <Box sx={styleContactContainer}>
        {pHeader && (
          <Typography
            component="span"
            variant="h6"
            sx={styleContactContainerHeader}
          >
            {pHeader}
          </Typography>
        )}
        <Typography sx={styleContactContainerText} align="justify">
          {children}
        </Typography>
        <MoreDetailsButton />
        <Stack direction="row" sx={styleContactContainerStack}>
          <ContactLink
            pDescription="GitHub"
            pText="https://github.com/VuceticBranislav"
            pLink="https://github.com/VuceticBranislav"
          >
            <GitHubIcon fontSize="small" />
          </ContactLink>
          <ContactLink
            pDescription="LinkedIn"
            pText="https://www.linkedin.com/in/vuceticbranislav"
            pLink="https://www.linkedin.com/in/vuceticbranislav"
          >
            <LinkedInIcon fontSize="small" />
          </ContactLink>
          <ContactLink
            pDescription="eMail"
            pText="vuceti985@gmail.com"
            pLink="mailto:vuceti985@gmail.com"
          >
            <MailOutlineIcon fontSize="small" />
          </ContactLink>
          <ContactLink pDescription="Phone" pText="+38163546933">
            <PhoneAndroidIcon fontSize="small" />
          </ContactLink>
        </Stack>
      </Box>
    </section>
  );
};

export default ContactContainer;
