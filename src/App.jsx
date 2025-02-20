import { useState } from "react";
import sneakaers from "./assets/sneakers 2.svg";
import basket from "./assets/Group 14.svg";
import profile from "./assets/Oval (8).svg";
import shoes1 from "./assets/shoes1.svg";
import shoes2 from "./assets/shoes2.svg";
import shoes3 from "./assets/shoes3.svg";
import shoes4 from "./assets/shoes4.svg";
import plus from "./assets/plus.svg";
import minus from "./assets/minus.svg";
import basketwhite from "./assets/Shape (6).svg";

import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function App() {
  const images = [shoes1, shoes2, shoes3, shoes4];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center border-b pb-4">
        <div className="flex gap-14 items-center">
          <img src={sneakaers} />
          <div className="flex gap-8 text-gray-700 font-medium">
            <p className="cursor-pointer">Collections</p>
            <p className="cursor-pointer">Men</p>
            <p className="cursor-pointer">Women</p>
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Contact</p>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <button className="cursor-pointer">
            <img src={basket} />
          </button>
          <img src={profile} className="w-10 h-10 rounded-full" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="mt-[90px]">
          <Swiper
            modules={[]}
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-xl shadow-lg w-[445px]"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Shoe ${index + 1}`}
                  className="w-[445px] h-auto rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-4 mt-4">
            {images.map((img, index) => (
              <button
                key={index}
                className="hover:caret-gray-400 hover:opacity-45"
              >
                <img
                  src={img}
                  alt={`Thumb ${index + 1}`}
                  className="w-16 h-16 object-cover  cursor-pointer   "
                />
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <p className="text-[#FF7E1B] font-[Kumbh Sans] text-[13px] font-bold tracking-[2px] uppercase">
            Sneaker Company
          </p>
          <h1 className="text-[#1D2026] font-[Kumbh Sans] text-[44px] font-bold leading-[48px]">
            Fall Limited Edition <br /> Sneakers
          </h1>
          <p className="w-[445px] text-[#69707D] font-[Kumbh Sans] text-[16px] font-normal leading-[26px]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div>
            <div className="flex gap-[8px] items-center">
              <p className="text-[#1D2026] font-[Kumbh_Sans] text-2xl font-bold leading-normal">
                $125.00
              </p>
              <p className=" flex justify-center items-center w-[51px] h-[27px] rounded-[6px] bg-[#FFEEE2] text-[#FF7E1B] font-[Kumbh_Sans] text-[16px] font-bold leading-normal">
                50%
              </p>
            </div>
            <p className="text-[#B6BCC8] font-[Kumbh_Sans] text-[16px] font-bold leading-[26px] line-through">
              $250.00
            </p>
          </div>
          <div className="flex gap-[16px]">
            <div className="flex justify-around items-center w-[157px] h-[56px] rounded-[10px] bg-[#F6F8FD]">
              <button className="cursor-pointer">
                <img src={minus} />
              </button>
              <p>0</p>
              <button className="cursor-pointer">
                <img src={plus} />
              </button>
            </div>
            <button className="w-[272px] h-[56px] rounded-[10px] bg-[#FF7E1B] cursor-pointer flex justify-center items-center gap-2.5">
              <img src={basketwhite} />
              <p className="text-white font-[Kumbh_Sans] text-[16px] font-bold leading-normal">
                Add to cart
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
