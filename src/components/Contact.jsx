import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { contactStyles } from "../styles";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    // Here you can add logic to send the data to a server
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box sx={contactStyles.container}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Contact Me
      </Typography>
      <Paper sx={contactStyles.paper}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={contactStyles.button}
            fullWidth
          >
            Send Message
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
