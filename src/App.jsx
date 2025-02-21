import React, { useReducer, useState } from "react";
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
import smallshoes from "./assets/smallshoes.svg";
import bin from "./assets/bin.svg";
import "./App.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const initivialValue = { count: 0 };

function Reducer(state, action) {
  switch (action.type) {
    case "INCREAMENT":
      return { count: state.count + 1 };

    case "DECREAMENT":
      return { count: state.count > 0 ? state.count - 1 : 0 };
  }
}

function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const images = [shoes1, shoes2, shoes3, shoes4];
  const [state, dispatch] = useReducer(Reducer, initivialValue);
  const [visible, setVisible] = useState(false);
  const [visiblenumber, setVisiblenumber] = useState(false);
  const [price] = useState(125);
  const totalcost = price * state.count;
  const [visibleprice, setVisibleprice] = useState(true);
  const [empty, setEmpty] = useState(false);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center border-b pb-4">
        <div className="flex gap-14 items-center">
          <img src={sneakaers} alt="Sneaker Logo" />
          <div className="flex gap-8 text-gray-700 font-medium">
            <p className="cursor-pointer">Collections</p>
            <p className="cursor-pointer">Men</p>
            <p className="cursor-pointer">Women</p>
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Contact</p>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="relative">
            <button
              onClick={() => setVisible(!visible)}
              className="cursor-pointer"
            >
              <img src={basket} alt="Basket Icon" />
            </button>
            {visiblenumber && (
              <div
                onClick={() => {
                  setVisiblenumber(true);
                }}
                className=" absolute top-[-8px] left-[7px] font-[Kumbh Sans] w-[19px] h-[13px] bg-[#FF7E1B] rounded-md flex justify-center items-center text-white font-bold text-[10px] leading-normal"
              >
                <p>{state.count}</p>
              </div>
            )}
            {visible && (
              <div
                onClick={() => {
                  setVisible(true);
                }}
                className=" absolute top-[37px] right-[-209px] w-[360px] h-[256px] rounded-lg bg-white shadow-[0px_20px_50px_-20px_rgba(29,32,38,0.50)]"
              >
                <p className="pl-[24px] pt-[24px] pb-[24px] text-[#1D2026] font-kumbh text-[16px] font-bold">
                  Cart
                </p>
                <hr className="w-full" />
                {visibleprice && (
                  <div
                    onClick={() => {
                      setVisibleprice(false);
                    }}
                    className="pl-[24px] pt-[24px] pr-[24px] flex justify-between"
                  >
                    <img src={smallshoes} />
                    <div>
                      <p className="text-[#69707D] font-kumbh text-[16px] font-normal leading-[26px]">
                        Fall Limited Edition Sneakers
                      </p>
                      <div>
                        <p className="text-[#69707D] font-kumbh text-[16px] font-normal leading-[26px]">
                          ${price}.00 x {state.count} =
                          <span className="[#1D2026] font-kumbh text-[16px] font-bold leading-[26px]">
                            ${totalcost}.00
                          </span>
                        </p>
                      </div>
                    </div>

                    <div
                      onClick={() => {
                        setEmpty(true);
                      }}
                    >
                      <img
                        className="cursor-pointer"
                        onClick={() => {
                          setVisibleprice(!visibleprice);
                        }}
                        src={bin}
                      />
                    </div>
                  </div>
                )}
                {empty && (
                  <div
                    className="pt-[77px]"
                    onClick={() => {
                      setEmpty(!empty);
                    }}
                  >
                    <p className=" text-[#69707D] text-center font-kumbh text-[16px] font-bold leading-[26px]">
                      Your cart is empty.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          <img src={profile} className="w-10 h-10 rounded-full" />
        </div>
      </div>

      <div className="flex items-center justify-between mt-[90px]">
        <div className="mt-[90px] w-[445px]">
          <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
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

          <div className="flex justify-between mt-[32px]">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={60}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    className="w-16 h-16 object-cover cursor-pointer  hover:caret-neutral-400 hover:opacity-35"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
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
                ${price}.00
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
              <button
                onClick={() => {
                  dispatch({ type: "DECREAMENT" });
                }}
                className="cursor-pointer"
              >
                <img src={minus} alt="Minus" />
              </button>
              <p>{state.count}</p>
              <button
                onClick={() => {
                  dispatch({ type: "INCREAMENT" });
                }}
                className="cursor-pointer"
              >
                <img src={plus} alt="Plus" />
              </button>
            </div>
            <button
              onClick={() => setVisiblenumber(!visiblenumber)}
              className="w-[272px] h-[56px] rounded-[10px] bg-[#FF7E1B] cursor-pointer flex justify-center items-center gap-2.5"
            >
              <img src={basketwhite} alt="Add to Cart" />
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
