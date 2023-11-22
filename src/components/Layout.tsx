import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
function Layout() {
  let navbardata = [
    { title: "About", shorthand: "" },
    {
      title: "Software and Computers",
      shorthand: "software",
    },
    { title: "Machine Learning", shorthand: "ML" },
    { title: "Articles and Research", shorthand: "research" },
  ];
  return (
    <>
      <Navbar sectionData={navbardata}></Navbar>
      <Outlet />
    </>
  );
}
export default Layout;
