import React from "react";
import bayernLogo from "../Assets/Images/acrevis-logo.png";
import evolvedLogo from "../Assets/Images/evolved-logo.png";
import wolvesLogo from "../Assets/Images/wolves-logo.png";
import sauterLogo from "../Assets/Images/sauter-logo.png";
import acrevisLogo from "../Assets/Images/acrevis-logo.png";
import smatricLogo from "../Assets/Images/smatric-logo.png";

const LogoRow = () => {
  const logos = [
      { src: bayernLogo, alt: "Bayern International" },
      { src: evolvedLogo, alt: "Evolved" },
      { src: wolvesLogo, alt: "Wolves Partnership" },
      { src: sauterLogo, alt: "Sauter" },
      { src: acrevisLogo, alt: "Acrevis" },
      { src: smatricLogo, alt: "Smatric" },
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
