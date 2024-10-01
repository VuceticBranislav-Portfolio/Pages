import IconButton from "@mui/material/IconButton";
import ReadMore from "@mui/icons-material/ReadMore";
import Tooltip from "@mui/material/Tooltip";
import rutes from "../../../settings/rutes";
import { useTheme } from "@mui/material/styles";
import styles from "./MoreDetailsButton.styles";
import { Link } from "react-router-dom";

const MoreDetailsButton = (props) => {
  const theme = useTheme();
  const { moreDetailsButton } = styles(theme);
  const { link, sx: pStyle = [], ...rest } = props;

  return (
    <Tooltip title="More info">
      <Link to={rutes.dummy} sx={[
            moreDetailsButton,
            ...(Array.isArray(pStyle) ? pStyle : [pStyle]),
          ]}>
        <IconButton
          
        >
          <ReadMore />
        </IconButton>
      </Link>
    </Tooltip>
  );
};

export default MoreDetailsButton;
