import { Typography } from "@mui/material";
import React from "react";
import { logoStyles } from "../styles";

export default function Logo() {
  return (
    <div style={logoStyles.container}>
      <Typography variant="h2" style={logoStyles.bus}>
        Bus
      </Typography>
      <Typography variant="h2" style={logoStyles.mate}>
        Mate
      </Typography>
    </div>
  );
}
