"use client";

import { ClothingType } from "../page";

function Clothing({
  name,
  category,
  subcategory,
  price,
}: ClothingType) {
  console.log(name);  
  return (
    <div className="border border-black ">
      <h1>{`Name:${name}`}</h1>
      <h1>{`Category:${category}`}</h1>
      <h1>{`Sub Category:${subcategory}`}</h1>
      <h1>{`Price:${price}`}</h1>
    </div>
  );
}

export default Clothing;
