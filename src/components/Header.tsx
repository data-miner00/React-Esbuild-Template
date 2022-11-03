import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header
      style={{
        display: "flex",
        padding: "5px",
        justifyContent: "space-between",
      }}
    >
      <div className="logo">Logod</div>
      <div className="login">Lodgin</div>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </header>
  );
}
