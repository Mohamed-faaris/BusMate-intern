import { useState } from "react";
import Logo from "./components/Logo";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Features from "./components/features";
import Developer from "./components/developer";
import Contact from "./components/Contact";

function App() {
  return (
    <div styles={{ backgroundColor: "#f3f3f3ff" }}>
      {/* <ThemeProvider> */}
      <Navbar />
      <main>
        <Container>
          <div id="home">
            <Hero />
          </div>
          <div id="features">
            <Features />
          </div>
          <div id="developer">
            <Developer />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </Container>
      </main>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
