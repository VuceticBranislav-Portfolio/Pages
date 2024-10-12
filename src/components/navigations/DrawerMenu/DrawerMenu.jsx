import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import styles from "./DrawerMenu.styles";
import rutes from "../../../settings/rutes";

const DrawerMenu = () => {
  const theme = useTheme();
  const { styleDrawerList } = styles(theme);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={styleDrawerList} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Mechanical Engineer", "Software Developer", "Biography"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component={RouterLink} to={rutes.workInProgress}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Education", "Contact"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={RouterLink} to={rutes.workInProgress}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Tooltip title="Usefull links">
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      </Tooltip>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
