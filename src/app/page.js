import LatestNews from "@/components/ui/LatesNews/LatestNews";
import Siderbar from "@/components/ui/Sidebar/Siderbar";
import { Grid } from "@mui/material";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews></LatestNews>
        </Grid>
        <Grid item xs={4}>
          <Siderbar></Siderbar>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
