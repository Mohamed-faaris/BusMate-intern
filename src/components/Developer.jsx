import React from "react";
import { Box, Typography, Paper, Link, Divider } from "@mui/material";
import { developerStyles } from "../styles";

export default function Developer() {
  return (
    <Box sx={developerStyles.container}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Mohamed Faaris
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        align="center"
        color="text.secondary"
      >
        B.E in Computer Science and Engineering (2023 - 2027)
      </Typography>
      <Typography variant="h6" gutterBottom align="center">
        K Ramakrishnan College Of Engineering, Trichy
      </Typography>

      <Divider sx={developerStyles.divider} />

      <Paper sx={developerStyles.paper}>
        <Typography variant="h6" gutterBottom>
          Contact
        </Typography>
        <Typography>
          Location: Trichy, Tamil Nadu | Contact: 9345609574
        </Typography>
        <Typography>
          Email:{" "}
          <Link href="mailto:mohamedfaaris.dev@gmail.com">
            mohamedfaaris.dev@gmail.com
          </Link>
        </Typography>
        <Typography>
          GitHub:{" "}
          <Link href="https://github.com/mohamed-faaris" target="_blank">
            github.com/mohamed-faaris
          </Link>
        </Typography>
        <Typography>
          LinkedIn:{" "}
          <Link
            href="https://www.linkedin.com/in/mohamed-faaris"
            target="_blank"
          >
            linkedin.com/in/mohamed-faaris
          </Link>
        </Typography>
      </Paper>

      <Paper sx={developerStyles.paper}>
        <Typography variant="h6" gutterBottom>
          Skills
        </Typography>
        <Typography>• Programming: Python, Java, C++, JavaScript</Typography>
        <Typography>
          • Web Dev: React, Next.js, Express, Flask, Drizzle ORM
        </Typography>
        <Typography>• AI/ML: Machine Learning, NLP, Generative AI</Typography>
        <Typography>• Tools: Git, Docker, AWS</Typography>
      </Paper>

      <Divider sx={developerStyles.divider} />

      <Typography variant="h6" gutterBottom>
        Achievements
      </Typography>

      <Paper sx={developerStyles.achievementsPaper}>
        <Typography>• Solved 300+ LeetCode problems</Typography>
        <Typography>
          • NPTEL: Programming with Java (Silver, Topper 1%)
        </Typography>
        <Typography>• Hackathons: 3rd in 11:11, 1st in Code Hunter</Typography>
        <Typography>• CS50 Certificate</Typography>
      </Paper>
    </Box>
  );
}
