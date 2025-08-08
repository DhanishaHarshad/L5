import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CustomAppBar from "./customised/CustomAppBar";
import CustomSearchField from "./customised/CustomSearchField";

export default function HomePage() {
  const theme = useTheme(); // hook to acess MUI theme for responsive breakpoints
  // ABOVE IS CUSTOMISABLE: Change 'md' to 'sm' (600px) or 'lg' (1280px) for different breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // replace with actual data for the cards
  const cardData = [
    { id: 1, title: "Lorem Ipsum", subtitle: "Est venenatis" },
    { id: 2, title: "Lorem Ipsum", subtitle: "Est venenatis" },
    { id: 3, title: "Lorem Ipsum", subtitle: "Est venenatis" },
  ];
  // add more cards as needed

  return (
    <Box>
      <CustomAppBar />
      <CustomSearchField />

      {/* Card selection */}
      <Container maxWidth="false" sx={{ py: 4 }}>
        {/* CUSTOMIZABLE: Change maxWidth to 'sm', 'md', 'xl', or false for full width */}
        <Grid
          container
          spacing={3}
          //   CUSTOMIZABLE: Change spacing value (1-10) for different gaps between cards
          sx={{ justifyContent: "center", width: "100%" }}
        >
          {cardData.map((card) => (
            <Grid item xs={12} md={4} key={card.id}>
              {/* Responsive breakpoints: xs=12 (mobile: full width), md=4 (desktop: 1/3 width)
              CUSTOMIZABLE: Change to xs=12 sm=6 md=4 lg=3 for different layouts */}
              <Card
                sx={{
                  width: "auto",
                  height: "100%", // make cards all the same height
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "1",
                  borderRadius: "1",
                  justifyContent: "space-between",
                }}
              >
                {/* image - currently a placeholder */}
                <CardMedia
                  sx={{
                    height: 200,
                    backgroundColor: "#e0e0e0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* image icon - currently a placeholder */}
                  <Box
                    sx={{
                      width: 80,
                      height: 60,
                      border: "2px solid #999",
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "transparent",
                    }}
                  >
                    {/* circle  */}
                    <Box
                      sx={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        backgroundColor: "#999",
                        position: "absolute",
                        top: "45%",
                        left: "45%",
                      }}
                    />
                    {/* triangle */}
                    <Box
                      sx={{
                        width: 0,
                        height: 0,
                        borderLeft: "12px solid transparent",
                        borderRight: "12px solid transparent",
                        borderBottom: "16px solid #999",
                        position: "absolute",
                        top: "55%",
                        left: "42%",
                      }}
                    />
                  </Box>
                </CardMedia>

                {/* card content */}
                <CardContent
                  sx={{
                    backgroundColor: "#d0d0d0",
                    flexGrow: 1,
                    py: 2,
                    px: 2,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      mb: 0.5,
                      color: "#333",
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: "#666" }}
                  >
                    {card.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
