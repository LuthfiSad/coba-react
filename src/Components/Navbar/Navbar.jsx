import React, { useState } from "react";
import "./navbar.css";
import logoUmt from "../../assets/logo/logo umt.png";
import iconMenu from "../../assets/icon/ikon kotak-kotak.png";

const Navbar = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = (e) => {
    setActive(!isActive);
    e.preventDefault();
  };
  const navNavbar = document.querySelector(".navbar .navigation");
  const menu = document.querySelector("#menu");
  document.onclick = (e) => {
    if (!menu.contains(e.target) && !navNavbar.contains(e.target)) {
      handleToggle();
    }
  };
  const navigation = document.querySelectorAll(".navbar .navigation a");
  navigation.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      handleToggle();
    });
  });
  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">
        <img src={logoUmt} alt="Logo Umt" />
        <p>Universitas Muhammadiyah Tangerang</p>
      </a>
      <div className="navbar-nav">
        <div className={`navigation ${isActive ? null : "active"}`}>
          <a href="#home">Home</a>
          <a href="#artikel">Artikel</a>
          <a href="#acara">Acara</a>
          <a href="#album">Album</a>
          <a href="#akademik">Akademik</a>
        </div>
        <a href="" id="menu" onClick={handleToggle}>
          <img src={iconMenu} alt="Menu" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
