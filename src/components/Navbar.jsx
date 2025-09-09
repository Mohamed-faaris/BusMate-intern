import React from "react";
import Logo from "./Logo";
import { Typography, Link } from "@mui/material";
import { navbarStyles } from "../styles";

export default function Navbar() {
  return (
    <div style={navbarStyles.container}>
      <Link href="#home" sx={navbarStyles.link}>
        <Typography variant="h4">Home</Typography>
      </Link>
      <Link href="#features" sx={navbarStyles.link}>
        <Typography variant="h4">Features</Typography>
      </Link>
      <Link href="#home" sx={navbarStyles.link}>
      <Logo />
      </Link>
      <Link href="#developer" sx={navbarStyles.link}>
        <Typography variant="h4">Developer</Typography>
      </Link>
      <Link href="#contact" sx={navbarStyles.link}>
        <Typography variant="h4">Contact</Typography>
      </Link>
    </div>
  );
}
