import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { heroStyles } from "./style";

export default function Hero() {
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(50);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
      setTranslateY(0);
    }, 70);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={heroStyles.container(opacity, translateY)}>
      <Typography variant="h2" style={heroStyles.title}>
        Welcome to BusMate
      </Typography>
      <Typography variant="h5" style={heroStyles.subtitle}>
        Your Ultimate Bus Tracking Companion
      </Typography>
    </div>
  );
}
