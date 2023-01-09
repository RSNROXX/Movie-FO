import React from "react";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "rgb(64,224,208)",
        color: "black",
        fontWeight: "bolder",
        height: "72px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
      }}
    >
      <p> &copy; RSNROXX & Shinei - {new Date().getFullYear()} </p>
    </div>
  );
}

export default Footer;
