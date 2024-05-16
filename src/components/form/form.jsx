import React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import image from "@/assets/images/formm.png";
import { Container } from "@mui/material";
const Form = () => {
  return (
    <Container maxWidth="xl">
      <div className="form" style={{ backgroundImage: `url(${image})` }}>
        <div className="title">
          <Button variant="contained">New laptop</Button>
          <div className="caption">
            <h2>Sale up to 50% off</h2>
            <h4>12 inch hd display</h4>
          </div>
          <Button variant="contained">Shop now</Button>
        </div>
      </div>
    </Container>
  );
};

export default Form;
