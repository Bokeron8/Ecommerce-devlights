import React from "react";
import Image from "next/image";
import SHOP_IMAGE from "@/../public/producto.png";
function ShopPage() {
  return (
    <div className="p-6 py-8 md:px-32">
      <h1>Deport - urban</h1>
      <div className="grid grid-cols-[1fr_3fr_2fr] gap-2">
        <div>
          <Image src={SHOP_IMAGE} alt="shop img" />
        </div>
        <div className="self-center">
          <Image src={SHOP_IMAGE} alt="shop img" />
        </div>
        <div>
          <h2>Nike Sneakers</h2>
          <p>Vision Alta Mens</p>
          <p>rating</p>
          <p>$200</p>
          <h3>Product Details</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
