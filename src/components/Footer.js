import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      Footer
      <Link to={"/about"}>About</Link>
    </div>
  );
}
