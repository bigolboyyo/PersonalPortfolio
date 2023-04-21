import React from "react";
import { Grid, Box } from "@mui/material";
import MainCard from "./MainCard.jsx";
import SmallCard from "./SmallCard.jsx";
import { projects } from "../exports/projects.js";

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
          <MainCard details={projects.main} />
        </Box>
      </Grid>
      <Grid item xs={12} md={4} sx={{ width: "inherit" }}>
        <Grid container spacing={2} justifyContent="center">
          {projects.secondary.projs.map((proj, index) => (
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
                <SmallCard details={proj} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default WorkGrid;
