import { Link as RouterLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ReadMore from "@mui/icons-material/ReadMore";
import Tooltip from "@mui/material/Tooltip";
import rutes from "../../../settings/rutes";
import { useTheme } from "@mui/material/styles";
import styles from "./MoreDetailsButton.styles";

const MoreDetailsButton = (props) => {
  const theme = useTheme();
  const { moreDetailsButton } = styles(theme);
  const { sx: pStyle = [] } = props;

  return (
    <Tooltip title="More info">
      <IconButton
        component={RouterLink}
        to={rutes.workInProgress}
        sx={[moreDetailsButton, ...(Array.isArray(pStyle) ? pStyle : [pStyle])]}
      >
        <ReadMore />
      </IconButton>
    </Tooltip>
  );
};

export default MoreDetailsButton;
