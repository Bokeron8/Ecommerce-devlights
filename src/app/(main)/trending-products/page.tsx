import React from "react";
import Link from "next/link";
import Image from "next/image";
import TACONES from "@/../public/tacones.png";

import ProductCard from "@/app/components/ProductCard";
function TrendingProducts() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between p-6 py-8 md:px-32 bg-white gap-3 text-[#FD6E86] items-center">
        <div>
          <h3 className="font-semibold text-2xl">Trending Products</h3>
          <p>¡find the most incredible!</p>
        </div>

        <Link href="/beauty">Beauty</Link>
        <Link href="/fashion">Fashion</Link>
        <Link href="/kids">Kids</Link>
        <Link href="/mens">Mens</Link>
        <Link href="/womens">Womens</Link>
        <Link href="/gifts">Gifts</Link>
      </div>

      <div className="grid grid-cols-[1fr_3fr] p-6 md:px-32 gap-4">
        <div>
          <h3 className="text-xl font-semibold">Category</h3>

          <ul className="flex flex-col gap-3">
            <li className="text-sm mt-2">Categoria 1</li>
            <li className="text-sm">Categoria 2</li>
            <li className="text-sm">Categoria 3</li>
            <li className="text-sm">Categoria 4</li>
          </ul>
          <h3 className="text-xl font-semibold mt-5">Price</h3>
          <p className="text-sm mt-2">Products with price</p>
          <div className="flex gap-3">
            <input
              className="p-4 w-full shadow-md rounded"
              type="number"
              name="min"
              placeholder="Min"
              min={0}
              id="min"
            />
            <input
              className="p-4 w-full shadow-md rounded"
              type="number"
              name="max"
              placeholder="Max"
              min={0}
              id="max"
            />
          </div>
        </div>
        <div>
          <section className="flex gap-4 justify-center ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </section>
          <div className="relative flex gap-4 py-6">
            <Image src={TACONES} alt="tacones img"></Image>

            <div className="flex flex-col absolute top-[50%] translate-y-[-50%] right-[10%]">
              <h1 className="text-2xl md:text-5xl font-bold">Flat and Heels</h1>
              <p className="text-sm md:text-2xl">
                Stand a chance to get rewarded
              </p>
              <div className="flex justify-end">
                <button className="p-3 text-white bg-[#F83758] rounded-md text-xs md:text-base mt-8">
                  Visit now -&gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
