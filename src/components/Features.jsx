import React from "react";
import { Box, Typography } from "@mui/material";
import { featuresStyles } from "../styles";

const features = [
  {
    title: "Registration & Login",
    description:
      "Users can securely register and log in using email and roll number. OTP verification ensures account authenticity and smooth onboarding.",
  },
  {
    title: "Dashboard",
    description:
      "Provides an overview of user profile and current bookings. Allows quick access to available buses and booking management.",
  },
  {
    title: "Seat Booking",
    description:
      "Real-time visual bus layout shows available seats clearly. Gender-based seat allocation ensures comfort and safety.",
  },
  {
    title: "Route Management",
    description:
      "Users can filter buses by boarding points easily. Admins can add stops and map buses to schedules.",
  },
  {
    title: "Bus & Model Setup",
    description:
      "Admins define seat layouts and add new buses with drivers. Routes and timings can be managed efficiently for each bus.",
  },
  {
    title: "Secure Architecture",
    description:
      "Built on Next.js, Drizzle ORM, and PostgreSQL for reliability. Supports fast, scalable, and role-based access control.",
  },
];

export default function Features() {
  return (
    <Box sx={featuresStyles.section}>
      <Typography sx={featuresStyles.title}>Features</Typography>
      {/* Grid layout for hover cards */}
      <Box sx={featuresStyles.grid}>
        {features.map((feature, index) => (
          <Box key={index} sx={featuresStyles.card}>
            <Typography sx={featuresStyles.cardTitle}>
              {feature.title}
            </Typography>
            <Typography sx={featuresStyles.cardDescription}>
              {feature.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
