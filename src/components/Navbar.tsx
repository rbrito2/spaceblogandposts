import React from "react";
import { Link } from "react-router-dom";
import git from "../assets/github.svg";
import "../css/Navbar.css";

interface NavbarProps {
  sectionData: { title: string; shorthand: string }[];
}
function Navbar({ sectionData }: NavbarProps) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-navbar">
        <div className="container-fluid">
          <a className="navbar-brand nav-link" href="/github">
            <img src={git} />
          </a>
          <a className="navbar-brand fs-9">RB</a>
          <div className="collapse navbar-collapse d-flex flex-row-reverse">
            <ul className="navbar-nav ">
              {sectionData.map((navInstance) => (
                <li className="nav-item" key={navInstance.title}>
                  <Link
                    className="nav-link active"
                    to={"/" + navInstance.shorthand}
                  >
                    {navInstance.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
