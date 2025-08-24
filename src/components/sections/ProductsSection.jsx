import React from 'react';
import { productsData } from '../../data/productsData';

export function ProductsSection() {
  return (
    <div className="relative bg-white box-border z-[2]">
      <div className="relative box-border z-[2] px-5 py-[30px] md:px-[30px] md:py-[75px]">
        <h2 className="relative text-[40px] font-medium box-border tracking-[-2px] leading-10 max-w-screen-md text-center mx-auto font-souvenir_std md:text-[45px] md:tracking-[-2.25px] md:leading-[45px]">Nos produits</h2>
        <p className="text-2xl font-medium box-border leading-[28.8px] max-w-screen-md text-center mt-6 mx-auto font-forma_djr_display md:text-[26px] md:leading-[31.2px]">Les meilleures recettes nécessitent les meilleurs produits.</p>
      </div>
      
      <div className="box-border max-w-full overflow-x-hidden overflow-y-auto w-full mt-6">
        <div className="box-border max-w-[1660px] w-full mx-auto px-5 md:max-w-[1680px] md:px-[30px]">
          <div className="relative box-border list-none z-[1] mx-auto pl-[25px] md:pl-[30px]">
            <div className="relative items-stretch box-border gap-x-0 flex h-[511px] gap-y-0 w-full z-[1]">
              {productsData.map((product) => (
                <figure key={product.id} className="relative text-white font-medium bg-emerald-900 box-border gap-x-5 flex flex-col shrink-0 gap-y-5 w-[290px] mr-5 py-5 font-forma_djr_display md:w-[400px]">
                  <div className="relative aspect-square bg-stone-200 box-border w-full">
                    <img 
                      alt={product.alt} 
                      src={product.image} 
                      className={product.imageClass} 
                    />
                  </div>
                  <figcaption className="text-emerald-900 text-2xl bg-white box-border leading-[28.8px] text-center px-5 py-2.5 md:text-[26px] md:leading-[31.2px]">
                    <a href={product.href} title={product.title} className="text-2xl items-center box-border justify-center leading-[28.8px] outline-blue-500 outline md:text-[26px] md:leading-[31.2px] after:accent-auto after:box-border after:text-emerald-900 after:block after:text-2xl after:not-italic after:normal-nums after:font-medium after:h-full after:tracking-[normal] after:leading-[28.8px] after:list-outside after:list-none after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-full after:z-[2] after:border-separate after:left-0 after:top-0 after:font-forma_djr_display after:md:text-[26px] after:md:leading-[31.2px]">
                      {product.title}
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="absolute box-border gap-x-5 flex flex-col gap-y-5 left-0 top-[105px] md:top-[150px]">
              <button 
                type="button" 
                title="Accéder à la slide précédente" 
                className="text-base font-medium items-center bg-white gap-x-2.5 flex justify-center leading-4 min-h-[50px] min-w-[50px] opacity-50 outline-blue-500 outline gap-y-2.5 text-center uppercase align-middle w-full z-10 border-emerald-900 p-0 rounded-[25px] border-solid left-2.5 top-2/4 font-forma_djr_display md:text-xl md:leading-5 md:min-h-[60px] md:min-w-[60px] md:w-auto md:rounded-[30px] before:accent-auto before:box-border before:text-emerald-900 before:block before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18px] before:list-outside before:list-none before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-pizza_cosy"
              ></button>
              <button 
                type="button" 
                title="Accéder à la slide suivante" 
                className="text-base font-medium items-center bg-white gap-x-2.5 flex justify-center leading-4 min-h-[50px] min-w-[50px] outline-blue-500 outline gap-y-2.5 text-center uppercase align-middle w-full z-10 border-emerald-900 p-0 rounded-[25px] border-solid right-2.5 top-2/4 font-forma_djr_display md:text-xl md:leading-5 md:min-h-[60px] md:min-w-[60px] md:w-auto md:rounded-[30px] before:accent-auto before:box-border before:text-emerald-900 before:block before:text-lg before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[18px] before:list-outside before:list-none before:text-center before:indent-[0px] before:normal-case before:scale-x-[-1px] before:scale-y-[-1px] before:visible before:border-separate before:font-pizza_cosy"
              ></button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative box-border z-[2] px-5 py-[30px] md:px-[30px] md:py-[75px]">
        <div className="items-center box-border gap-x-6 flex flex-wrap justify-center max-w-screen-md gap-y-6 mx-auto">
          <div title="Découvrir" className="box-border">
            <a title="Découvrir" href="https://www.pizzacosy.fr/carte/" className="text-white text-base font-medium content-center items-center bg-emerald-900 box-border gap-x-0 inline-flex justify-center leading-4 min-h-[60px] min-w-[200px] outline-blue-500 outline gap-y-0 text-center uppercase align-middle w-full border-emerald-900 px-[53px] py-5 rounded-[30px] border-2 border-solid font-forma_djr_display md:text-xl md:leading-5 md:min-h-[75px] md:w-auto md:py-[25.5px] md:rounded-[37.5px]">
              Découvrir
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
