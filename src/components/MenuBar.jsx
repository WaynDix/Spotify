import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DiamondIcon from "@mui/icons-material/Diamond";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import SpotifyIconMenu from "../assets/icons/SpotifyIconMenu.svg";
import "../style/MenuBar.css";

const drawerWidth = 240;

function MenuBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuIcon = {
    width: "16%",
    height: "16%",
    marginRight: "6%",
    color: "gray",
  };

  const backColor = {
    background: "#000",
    color: "#a7a7a7",
    height: "100%",
    fontSize: "0.875rem",
    fontWeight: "700",
  };

  const drawer = (
    <div style={backColor}>
      <img
        src={SpotifyIconMenu}
        alt=""
        width={170}
        height={90}
        style={{ cursor: "pointer" }}
      />
      <List>
        <ListItem disablePadding>
          <ListItemButton className="hover-cline-text">
            <HomeIcon sx={menuIcon} className="hover-cline-text" /> Home
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="hover-cline-text">
            <SearchIcon sx={menuIcon} className="hover-cline-text" /> Search
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="hover-cline-text">
            <DiamondIcon sx={menuIcon} className="hover-cline-text" /> Premium
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="hover-cline-text">
            <PrivacyTipIcon sx={menuIcon} className="hover-cline-text" />{" "}
            Support
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="hover-cline-text">
            <AddBoxIcon sx={menuIcon} className="hover-cline-text" /> Create
            Playlist
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton className="hover-cline-text">
            <FavoriteIcon sx={menuIcon} className="hover-cline-text" /> Liked
            Songs
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px`, background: "#121212" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            sx={{ mr: "2.5%", color: "#a7a7a7", fontWeight: "700" }}
            className="hover-cline-text"
          >
            Sign Up
          </Typography>
          <Typography
            component="div"
            sx={{
              fontWeight: "700",
              border: "1px solid white",
              borderRadius: "40px",
              padding: "1% 3% 1% 3%",
              background: "white",
              color: "black"
            }}
          >
            Log In
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

MenuBar.propTypes = {
  window: PropTypes.func,
};

export default MenuBar;
