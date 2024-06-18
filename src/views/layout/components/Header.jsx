import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./header/SearchBar";
import Nav from "./header/Nav";

export default function Header() {
  useEffect(() => {

    //Header
    const headerScrolled = () => {
      const header = document.getElementById('header');
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }
      }
    };

    //Sidebar
    const handleToggleSidebar = () => {
      document.body.classList.toggle("toggle-sidebar");
    };

    // Add event listener to toggle-sidebar-btn
    const toggleSidebarBtn = document.querySelector(".toggle-sidebar-btn");
    toggleSidebarBtn.addEventListener("click", handleToggleSidebar);

    //Header event listener
    window.addEventListener('load', headerScrolled);
    window.addEventListener('scroll', headerScrolled);

    // Cleanup on unmount
    return () => {
      //Header
      window.removeEventListener('load', headerScrolled);
      window.removeEventListener('scroll', headerScrolled);

      //Sidebar
      toggleSidebarBtn.removeEventListener("click", handleToggleSidebar);
      
    };
  }, []);

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <Link to="index.html" className="logo d-flex align-items-center">
          <img src="assets/img/logo-new.png" alt="" />
          {/* <span className="d-none d-lg-block">NiceAdmin</span> */}
        </Link>
        <i className="bi bi-list toggle-sidebar-btn" />
      </div>
      {/* End Logo */}
      <SearchBar/>
      {/* End Search Bar */}
      <Nav/>
    </header>
  );
}
