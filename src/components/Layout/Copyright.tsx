/* eslint-disable react/no-unescaped-entities */
import React from "react";

// MUI Components
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";

export default function Copyright() {
  return (
    <Typography variant="body2" color="secondary.light" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="https://github.com/Alaforgia/fleek_fe_assignment">
        Tony's Rick & Morty App
      </MuiLink>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
