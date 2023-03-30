import React, { useEffect, useRef } from "react";
import { Grid, Container, Box } from "@mui/material";
import { animateRouteSwitch } from "../animations/animateRouteSwitch";
import MainCard from "../components/MainCard";
import SmallCard from "../components/SmallCard";

const Work = () => {
  const workRef = useRef(null);

  useEffect(() => {
    animateRouteSwitch(null, workRef.current);
  }, []);

  return (
    <Container ref={workRef} disableGutters={true} maxWidth="false">
      <Grid container spacing={2} direction="column">
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
    </Container>
  );
};

export default Work;
