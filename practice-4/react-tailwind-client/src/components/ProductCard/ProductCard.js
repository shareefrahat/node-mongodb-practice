import React from "react";

const ProductCard = ({ product }) => {
  const { name, price, img } = product;
  return (
    <>
      <div className="shadow-lg  w-fit rounded-md mx-auto border border-blue-700 p-2">
        <div>
          <img className="w-[100px] h-[100px] mx-auto" src={img} alt="" />
        </div>
        <div>
          <p className="text-lg font-bold">{name}</p>
          <p className="text-red-700">${price}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
