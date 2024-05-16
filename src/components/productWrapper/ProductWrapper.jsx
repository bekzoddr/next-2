import Image from "next/image";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Container } from "@mui/material";
const ProductWrapper = ({ data }) => {
  let productItems = data?.products?.map((el) => (
    <div key={el.id} className="card">
      <div className="image">
        <Image src={el.images[0]} width={307} height={200} alt={el.title} />
        <button>
          <FavoriteBorderIcon />
        </button>
      </div>
      <div className="card__body">
        <h2>{el.title}</h2>
        <p>{el.category}</p>
        <h3>${el.price}</h3>
        <div className="stars">
          {Array.from({ length: 5 }, (_, index) => (
            <StarBorderIcon key={index} />
          ))}
        </div>
      </div>
    </div>
  ));

  return (
    <Container maxWidth="xl">
      <div className="products">{productItems}</div>
    </Container>
  );
};

export default ProductWrapper;
