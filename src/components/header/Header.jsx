import React from "react";
import "./Header.css";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";
const navLinks = [
  { id: 1, name: "HOME", to: "/" },
  { id: 2, name: "ABOUT", to: "/about" },
  { id: 3, name: "SKILLS", to: "/skills" },
  { id: 4, name: "CONTACT", to: "/contact" },
];
export default function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <Logo logo={logo} />
        <Links />
      </div>
    </div>
  );
}
function Logo(props) {
  return (
    <div className="logo">
      <img src={props.logo} alt="logo" />
    </div>
  );
}
function Links() {
  return (
    <div className="links">
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link to={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
