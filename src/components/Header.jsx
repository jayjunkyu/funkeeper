import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  return (
    <header>
      <HighlightIcon />
      <h1 style={{ display: "inline" }}>Keeper</h1>
    </header>
  );
}

export default Header;
