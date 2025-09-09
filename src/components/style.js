export const contactStyles = {
  container: {
    maxWidth: "80%",
    mx: "auto",
    p: 3,
  },
  paper: {
    p: 3,
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
  },
  button: {
    mt: 2,
    transition: "background-color 0.3s ease, transform 0.3s ease",
    "&:hover": {
      backgroundColor: "#1976d2",
      transform: "scale(1.05)",
    },
  },
};

export const developerStyles = {
  container: {
    maxWidth: 800,
    mx: "auto",
    p: 2,
  },
  divider: {
    my: 2,
  },
  paper: {
    p: 2,
    mb: 2,
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
  },
  achievementsPaper: {
    p: 2,
    mb: 1,
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
  },
};

export const heroStyles = {
  container: (opacity, translateY) => ({
    height: "60vh",
    marginTop: "80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: opacity,
    transform: `translateY(${translateY}px)`,
    transition: "opacity 1s ease-in, transform 1s ease-in",
  }),
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    marginTop: "20px",
    color: "#555555",
  },
};

export const logoStyles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  bus: {
    fontWeight: "bold",
    color: "#176cceff",
  },
  mate: {
    fontWeight: "bold",
  },
};

export const navbarStyles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "4px",
    marginTop: "20px",
    width: "80%",
    margin: "0 auto",
    borderRadius: "16px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
    position: "sticky",
    top: 10,
    zIndex: 1000,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#176cceff",
    },
  },
};

export const featuresStyles = {
  section: {
    padding: "2rem",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "2rem",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
    padding: "2rem",
  },
  card: {
    backgroundColor: "#ffffffff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1.5rem",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
  },
  cardTitle: {
    marginTop: 0,
    fontSize: "1.25rem",
    color: "#333",
  },
  cardDescription: {
    fontSize: "1rem",
    color: "#666",
  },
};
