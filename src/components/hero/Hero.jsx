"use client";
import React from "react";
import "@/sass/components/hero.scss";
import Button from "@mui/material/Button";
import Image from "next/image";
import image from "@/assets/images/hero.svg";
import { Container } from "@mui/material";
import { heroItems } from "@/static";
const Hero = () => {
  const items = heroItems?.map((el) => (
    <div key={el.id} className="item">
      <Image src={el.image} alt="" />
      <div className="title">
        <h2>{el.title}</h2>
        <h3>(6 items)</h3>
      </div>
    </div>
  ));
  return (
    <>
      <Container maxWidth="lg">
        <div className="hero">
          <div className="hero__title">
            <h2>
              Canon <br /> camera
            </h2>
            <br />
            <div className="buttons">
              <Button className="first" variant="contained">
                Shop Now
              </Button>
              <Button className="second" variant="outlined">
                View More
              </Button>
            </div>
          </div>
          <div className="hero__image">
            <Image src={image} alt="hero-image" />
          </div>
        </div>
      </Container>
      <Container maxWidth="xl">
        <marquee direction="right">
          <div className="items">
            {items}
            {items}
            {items}
            {items}
            {items}
            {items}
            {items}
            {items}
            {items}
          </div>
        </marquee>
      </Container>
    </>
  );
};

export default Hero;
