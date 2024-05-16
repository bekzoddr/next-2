"use client";
import React, { useState, useEffect } from "react";
import { IoPersonOutline, IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Button from "@mui/material/Button";
import "@/sass/components/navbar.scss";
import Link from "next/link";
import logo from "@/assets/images/navlogo.svg";
import Image from "next/image";
import { Container } from "@mui/material";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const threshold = 50;
      setIsSticky(scrollTop > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav">
      {/* <Container maxWidth=""> */}
      <div className={`navbar ${isSticky ? "sticky" : ""}`}>
        <Image src={logo} />
        <div className="search">
          <input type="search" placeholder="Search any things" />
          <Button variant="contained">Contained</Button>
        </div>
        <div className="icons">
          <div className="icon">
            <IoPersonOutline /> <h4>Sign in</h4>
          </div>
          <div className="icon">
            <FaRegHeart /> <h4>Wishlist</h4>
          </div>
          <div className="icon">
            <IoCartOutline /> <h4>Cart</h4>
          </div>
        </div>
      </div>

      <nav className={`subnav ${isSticky ? "fixed" : ""}`}>
        <select>
          <option value="1">Browse categories</option>
          <option value="2">Apple</option>
          <option value="3">Samsung</option>
        </select>
        <ul>
          <Link href={"/"}>Home</Link>
          <Link href={"/About"}>About</Link>
          <Link href={"/products"}>All products</Link>
          <Link href={"/somewhere"}>Blog</Link>
          <Link href={"/contact"}>Contact</Link>
        </ul>
        <h3>30 Days Free Return</h3>
      </nav>
      {/* </Container> */}
    </div>
  );
};

export default Navbar;
