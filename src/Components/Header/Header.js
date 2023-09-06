import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="header-container">
      <div className="siteName">
        <h1>Site</h1>
        <h2>Name</h2>
      </div>
      <input placeholder="Search Movies and Series" className="search" />
    </div>
  );
}

export default Header;
