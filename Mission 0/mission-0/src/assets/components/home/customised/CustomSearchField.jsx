import * as React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";

export default function CustomSearchField() {
  const theme = useTheme(); // rsponsicve breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // CUSTOMIZABLE: Add search state management
  const [searchQuery, setSearchQuery] = React.useState("");

  // CUSTOMIZABLE: Add search functionality
  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Implement actual search logic here
    // Example: onSearch(searchQuery) or navigate(`/search?q=${searchQuery}`)
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#bbb",
        minHeight: { xs: 300, md: 400 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundImage:
          'url("public/1000_F_144062195_S0txkA9HM7Bbj5NvGCCXfWKyaNusRRfj.jpg")', //  replace with actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.3)",
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          px: { xs: 3, sm: 4 },
        }}
      >
        {/* Hero Text */}
        <Typography
          variant={isMobile ? "h4" : "h2"}
          component="h1"
          sx={{
            color: "white",
            fontWeight: 700,
            mb: 4,
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Lorem ipsum dolor sit amet
        </Typography>

        {/* Desktop Layout */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              maxWidth: "auto",
              mx: "auto",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search..."
              sx={{
                backgroundColor: "white",
                borderRadius: 1,
                "& .MuiOutlineInput-root": {
                  borderRadius: "4px 0 0 4px",
                },
              }}
            />

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#333",
                color: "white",
                px: 4,
                py: "14px",
                borderRadius: "0 4px 4px 0",
                minWidth: "auto",
                "&:hover": {
                  backgroundColor: "#555",
                },
              }}
            >
              SEARCH
            </Button>
          </Box>
        )}

        {/* Mobile Layout */}
        {isMobile && (
          <Box sx={{ maxWidth: 400, mx: "auto" }}>
            <Box
              sx={{
                display: "flex",
                mb: 3,
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search..."
                sx={{
                  backgroundColor: "white",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "4px 0 0 4px",
                  },
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#333",
                  color: "white",
                  px: 3,
                  borderRadius: "0 4px 4px 0",
                  minWidth: "auto",
                  "&:hover": {
                    backgroundColor: "#555",
                  },
                }}
              >
                SEARCH
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
}
