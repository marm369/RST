import React from 'react';
import pizzaBackground from "../../assets/pizza_background1.jpg"
export function HeroSection() {
  return (
    <div className="box-border">
      <section className="relative text-white bg-emerald-900 box-border flex max-h-none min-h-[1000px] md:max-h-[1080px]">
        <div className="relative box-border flex flex-col max-w-[1920px] w-full z-[2] mx-auto pt-[70px] pb-[130px] md:pt-[115px] md:pb-[292.5px]">
          <div className="self-end box-border flex flex-col max-w-[1960px] px-5 md:max-w-[2240px] md:px-40">
            <p className="text-xl font-medium box-border leading-5 font-forma_djr_display">mammapalermo.com</p>
            <p className="text-xl font-medium box-border leading-5 font-forma_djr_display">@mammapalermo</p>
          </div>
        </div>
        <img 
          src={pizzaBackground}
          alt="pizzacosy pizzeria restaurant a emporter, en livraison" 
          className="absolute italic aspect-[auto_2288_/_1526] bg-no-repeat bg-cover box-border h-full max-w-full object-cover w-full z-[1] left-0 top-0" 
        />
      </section>
    </div>
  );
}
