import React from "react";
import {useRouteError} from 'react-router-dom'

const Error = ({ message = "Something went wrong!" }) => {
    const err = useRouteError();
    console.log(err);
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.code}>⚠️ Error</h1>
        <p style={styles.message}>{message}</p>

        <button style={styles.button} onClick={() => window.location.reload()}>
          Reload Page
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    width: "350px",
  },
  code: {
    margin: "0 0 10px 0",
    fontSize: "28px",
    color: "#ff4d4f",
  },
  message: {
    marginBottom: "20px",
    fontSize: "16px",
    color: "#333",
  },
  button: {
    padding: "10px 20px",
    fontSize: "14px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#667eea",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Error;
