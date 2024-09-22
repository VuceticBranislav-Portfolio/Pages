import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import styles from "./WelcomeContainer.styles";
import ConditionalWrapper from "../../../../components/wrappers/ConditionalWrapper";
import WelcomeImage from "../../../../components/images/WelcomeImage";
import image from "../../../../assets/ProfileImage.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";

const WelcomeContainer = (props) => {
  const { pSectionName } = props;
  const theme = useTheme();
  const { styleWelcomeContainer } = styles(theme);
  const tight = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <section id={pSectionName}>
      <Box
        sx={{
          ...styleWelcomeContainer,
          flexDirection: tight ? "column" : "row",
          alignItems: tight ? "center" : "strech",
        }}
      >
        <WelcomeImage
          pSize={250}
          pSource={image}
          sx={{ order: tight ? 2 : undefined }}
        />

        <ConditionalWrapper
          condition={tight}
          wrapper={(children) => (
            <Stack
              direction="column"
              width={250}
              justifyContent={"space-between"}
            >
              {children}
            </Stack>
          )}
        >
          <Typography
            variant="h3"
            sx={{ order: tight ? 1 : 2, marginTop: "1rem" }}
          >
            Branislav Vucetic
          </Typography>

          <Typography sx={{ order: 3, marginBottom: "1rem" }}>
            Mechanical Engineer <br />
            and Software Developer
          </Typography>
        </ConditionalWrapper>
      </Box>
    </section>
  );
};

export default WelcomeContainer;
