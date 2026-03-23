import React, { useContext } from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const {loggedInUser} = useContext(UserContext)
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.left}>
          <h2 style={styles.logo}>DevTinder</h2>
          <p style={styles.tagline}>
            Connecting developers, one swipe at a time.
          </p>
          <h1>{loggedInUser}</h1>
        </div>

        <div style={styles.links}>
          <a href="#" style={styles.link}>Home</a>
          <a href="#" style={styles.link}>About</a>
          <a href="#" style={styles.link}>Contact</a>
          <a href="#" style={styles.link}>Privacy</a>
        </div>
      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} DevTinder. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "#0f172a",
    color: "#fff",
    marginTop: "40px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "30px 60px",
    flexWrap: "wrap",
  },
  left: {
    maxWidth: "300px",
  },
  logo: {
    margin: 0,
    fontSize: "24px",
  },
  tagline: {
    fontSize: "14px",
    opacity: 0.7,
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
  },
  bottom: {
    textAlign: "center",
    padding: "15px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    fontSize: "13px",
    opacity: 0.6,
  },
};

export default Footer;
