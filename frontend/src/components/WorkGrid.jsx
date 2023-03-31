import React from "react";
import { Grid, Box } from "@mui/material";
import MainCard from "./MainCard.jsx";
import SmallCard from "./SmallCard.jsx";

function WorkGrid() {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      sx={{ alignContent: "center" }}
    >
      <Grid item xs={12} md={8}>
        <Box p={2} sx={{ paddingRight: 0 }}>
          <MainCard />
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container spacing={2} justifyContent="center">
          {[...Array(6)].map((_, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              sx={{ paddingLeft: "16px !important" }}
            >
              <Box p={2} sx={{ paddingRight: 0 }}>
                <SmallCard />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WorkGrid;
