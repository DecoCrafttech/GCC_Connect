import React from "react";

const LogoRow = () => {
  const logos = [
    { src: "path/to/bayern-logo.png", alt: "Bayern International" },
    { src: "path/to/evolved-logo.png", alt: "Evolved" },
    { src: "path/to/wolves-logo.png", alt: "Wolves Partnership" },
    { src: "path/to/sauter-logo.png", alt: "Sauter" },
    { src: "path/to/acrevis-logo.png", alt: "Acrevis" },
    { src: "path/to/smatric-logo.png", alt: "Smatric" },
  ];

  return (
    <div className="container mt-3 mb-5" style={styles.container}>
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          style={styles.logo}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    
    
  },
  logo: {
    maxHeight: "50px",
    margin: "0 10px",
  },
};

export default LogoRow;
