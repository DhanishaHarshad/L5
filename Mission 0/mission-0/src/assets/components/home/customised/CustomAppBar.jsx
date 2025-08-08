import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Menu1", "Menu2", "Menu3"];
// Example with more complex structure:
// const pages = [
//   { title: "Home", path: "/", icon: HomeIcon },
//   { title: "About", path: "/about", icon: InfoIcon },
//   { title: "Contact", path: "/contact", icon: ContactIcon }
// ];

function CustomAppBar() {
  const theme = useTheme(); // responsive breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null); // state for mobile menu anchor element

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // CUSTOMIZABLE: Add navigation click handlers
  // const handleNavClick = (page) => {
  //   // Navigate to page (with React Router)
  //   // navigate(page.path);
  //   handleMenuClose();
  // };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        borderBottom: " 10x solid #e0e0e0",
      }}
    >
      <Toolbar
        sx={{
          px: { xs: 2, sm: 3 },
        }}
      >
        {/* logo and company name */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: isMobile ? 1 : 0,
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              backgroundColor: "#ccc",
              mr: 2,
            }}
          />
          <Typography
            variant="h6"
            component="a"
            sx={{
              color: "black",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            My Company
          </Typography>
        </Box>

        {/* desktop menu  */}
        {!isMobile && (
          <>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  variant="text"
                  sx={{
                    color: "black",
                    textTransform: "none",
                    fontWeight: 500,
                    px: 2,
                  }}
                >
                  {page}
                </Button>
              ))}
              <Tooltip title="Login">
                <Button
                  variant="outlined"
                  sx={{
                    color: "black",
                    borderColor: "black",
                    backgroundColor: "white",
                    textTransform: "none",
                    ml: 2,
                    px: 3,
                  }}
                >
                  Login
                </Button>
              </Tooltip>
            </Box>
          </>
        )}

        {/* mobile menu icon */}

        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ color: "black" }}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleMenuClose}>
              {page}
            </MenuItem>
          ))}
          <MenuItem onClick={handleMenuClose}>
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: "black",
                borderColor: "black",
                textTransform: "none",
              }}
            >
              Login
            </Button>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
