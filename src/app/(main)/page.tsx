import React from "react";
import Link from "next/link";
import Image from "next/image";

import ProductCard from "../components/ProductCard";
import HERO_IMAGE from "@/../public/hero.png";
import SALES_IMAGE from "@/../public/sales.png";
import SUPERSALE from "@/../public/supersale.png";
import TACONES from "@/../public/tacones.png";
import BOTAS from "@/../public/botas.png";
function Home() {
  return (
    <div className="flex flex-col bg-[#F7F7F7]">
      <div className="flex bg-[#FD6E86] justify-center gap-3 text-white py-2">
        <Link href="/beauty">Beauty</Link>
        <Link href="/fashion">Fashion</Link>
        <Link href="/kids">Kids</Link>
        <Link href="/mens">Mens</Link>
        <Link href="/womens">Womens</Link>
        <Link href="/gifts">Gifts</Link>
      </div>
      <div className="relative">
        <div className="absolute text-white top-[50%] translate-y-[-50%] left-[10%]">
          <h1 className="text-2xl md:text-5xl font-bold">50-40% OFF</h1>
          <p className="text-sm md:text-2xl">Now in (product)</p>
          <p className="text-xs md:text-xl">All colours</p>
          <button className="p-2 border-white border-solid border-[1px] rounded-md text-xs md:text-base mt-8">
            Shop now -&gt;
          </button>
        </div>

        <Image src={HERO_IMAGE} alt="banner img" />
      </div>

      <div className="bg-[#4392F9] p-8 px-12 text-white flex justify-between w-[50%] self-center rounded-lg my-10">
        <div className="">
          <h1 className="font-semibold">Deal of the day</h1>
          <p className="text-xs">Clock 22h 55m 20s remaining</p>
        </div>
        <button className="px-2 py-0 border-white border-solid border-[1px] rounded-md text-xs ">
          View all -&gt;
        </button>
      </div>

      <section className="flex gap-4 p-6 md:px-32 justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>

      <div className="flex gap-4 p-4 rounded-md shadow-sm bg-white self-center w-[50%] items-center">
        <Image src={SUPERSALE} alt="supersale img" className="mx-6"></Image>
        <div className="align-middle">
          <span className="font-semibold text-lg">Special Offers </span>
          <span className="p-2 shadow-sm shadow-stone-700 rounded-full">
            😱
          </span>
          <p>We make sure you get the offer you need at best prices</p>
        </div>
      </div>

      <div className="relative flex gap-4 p-6 md:px-32">
        <Image src={TACONES} alt="tacones img"></Image>

        <div className="flex flex-col absolute top-[50%] translate-y-[-50%] right-[20%]">
          <h1 className="text-2xl md:text-5xl font-bold">Flat and Heels</h1>
          <p className="text-sm md:text-2xl">Stand a chance to get rewarded</p>
          <div className="flex justify-end">
            <button className="p-3 text-white bg-[#F83758] rounded-md text-xs md:text-base mt-8">
              Shop now -&gt;
            </button>
          </div>
        </div>
      </div>

      <section className="flex gap-4 p-6 md:px-32 justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>

      <div className="flex gap-4 p-6 py-4 md:px-32 justify-center">
        <Image src={SALES_IMAGE} alt="sales img"></Image>
      </div>

      <div className="flex gap-4 px-4 self-center w-[50%] items-center justify-between">
        <div className="">
          <h1 className="font-bold text-5xl">New Arrivals</h1>
          <span className="text-xl">Summer&apos; 25 Collections</span>
        </div>

        <button className="p-3 text-white bg-[#F83758] rounded-md text-xs md:text-sm">
          Visit now -&gt;
        </button>
      </div>
      <div className="p-6 md:px-32">
        <h3>Sponsored</h3>
        <p className="font-bold">up to 50% off</p>
      </div>
      <div className="relative flex gap-4 p-6 py-4 md:px-32 justify-center">
        <Image src={BOTAS} alt="sales img" className="brightness-[60%]"></Image>
        <div className="flex flex-col absolute top-[50%] translate-y-[-50%] right-[20%] text-white">
          <p className="text-sm md:text-2xl">-------UP TO-------</p>
          <h1 className="text-2xl md:text-5xl font-bold">50% OFF</h1>
          <p className="text-sm md:text-2xl">-----------------------</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
