import React from "react";

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
    </header>
  );
}
