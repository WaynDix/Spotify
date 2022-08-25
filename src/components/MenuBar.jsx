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
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Button } from "@mui/material";

const drawerWidth = 240;
function MenuBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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

  const accountIcon = {
    borderRadius: "38px",
    backgroundColor: "rgba(0,0,0,.98)",
    color: "white",
    width: "10vw",
    display: "flex",
    justifyContent: "flex-start",
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
    <Box className="sideBar" sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className="navbar-all-back"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px`, background: "none", border: "none" },
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
          <div className="auth-all">
            {auth && (
              <div className="icon__auth">
                <IconButton
                  // size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                  sx={accountIcon}
                >
                  <AccountCircle sx={{ width: 35, height: 35 }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                  {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                  <MenuItem onClick={handleClose}>Log out</MenuItem>
                </Menu>
              </div>
            )}
          </div>
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
