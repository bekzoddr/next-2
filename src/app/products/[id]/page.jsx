"use client";
import React from "react";
import { getData } from "@/api";
import Image from "next/image";

const SingleRoute = async ({ params: { id } }) => {
  let data;
  try {
    data = await getData(`/products/${id}`);
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error gracefully, show error message or fallback content
    return <div>Error: Failed to fetch data for product {id}</div>;
  }

  // Check if data is available and contains images
  if (!data || !Array.isArray(data.images) || data.images.length === 0) {
    // Handle case where data is missing or does not contain images
    return <div>No images found for product {id}</div>;
  }

  // Render the image
  return (
    <div>
      <Image src={data.images[0]} width={300} height={300} alt="text" />
    </div>
  );
};

export default SingleRoute;
