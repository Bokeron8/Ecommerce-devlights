import React from "react";
import Image from "next/image";
import PRODUCTO from "@/../public/producto.png";
function ProductCard() {
  return (
    <div className="rounded-md bg-white shadow-sm">
      <Image src={PRODUCTO} alt="product img" />
      <div className="p-3">
        <h1>Titutlo</h1>
        <h3>Descripcion</h3>
        <p>Precio</p>
        <p>Descuento</p>
        <p>Rating</p>
      </div>
    </div>
  );
}

export default ProductCard;
