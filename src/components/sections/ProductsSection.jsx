import React, { useRef } from 'react';
import { productsData } from '../../data/productsData';

export function ProductsSection() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    console.log('Scroll left clicked');
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth >= 768 ? 420 : 310;
      scrollContainerRef.current.scrollLeft -= cardWidth;
    }
  };

  const scrollRight = () => {
    console.log('Scroll right clicked');
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth >= 768 ? 420 : 310;
      scrollContainerRef.current.scrollLeft += cardWidth;
    }
  };

  return (
    <div className="relative bg-white box-border z-[2]">
      {/* Titre */}
      <div className="relative box-border z-[2] px-5 py-[30px] md:px-[30px] md:py-[75px]">
        <h2 className="relative text-[40px] font-medium box-border tracking-[-2px] leading-10 max-w-screen-md text-center mx-auto font-souvenir_std md:text-[45px] md:tracking-[-2.25px] md:leading-[45px]">
          Nos produits
        </h2>
        <p className="text-2xl font-medium box-border leading-[28.8px] max-w-screen-md text-center mt-6 mx-auto font-forma_djr_display md:text-[26px] md:leading-[31.2px]">
          Les meilleures recettes nécessitent les meilleurs produits.
        </p>
      </div>
      
      {/* Scroll Container */}
      <div className="box-border max-w-full overflow-y-auto w-full mt-6">
        <div className="box-border max-w-[1660px] w-full mx-auto px-5 md:max-w-[1680px] md:px-[30px]">
          <div className="relative box-border list-none z-[1] mx-auto pl-[25px] md:pl-[30px]">
            
            {/* Produits */}
            <div 
              ref={scrollContainerRef}
              className="flex h-[511px] w-full overflow-x-scroll overflow-y-hidden"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                scrollBehavior: 'smooth',
                whiteSpace: 'nowrap'
              }}
            >
              {productsData.map((product) => (
                <figure 
                  key={product.id} 
                  className="flex-shrink-0 text-white font-medium bg-emerald-900 flex flex-col w-[290px] mr-5 py-5 font-forma_djr_display md:w-[400px]" 
                  style={{ whiteSpace: 'normal' }}
                >
                  <div className="relative aspect-square bg-stone-200 box-border w-full">
                    <img 
                      alt={product.alt} 
                      src={product.image} 
                      className={product.imageClass} 
                    />
                  </div>
                  <figcaption className="text-emerald-900 text-2xl bg-white box-border leading-[28.8px] text-center px-5 py-2.5 md:text-[26px] md:leading-[31.2px] mt-5">
                    <a 
                      href={product.href} 
                      title={product.title} 
                      className="text-2xl items-center box-border justify-center leading-[28.8px] outline-transparent md:text-[26px] md:leading-[31.2px]"
                    >
                      {product.title}
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Boutons de scroll */}
            <div className="absolute box-border gap-x-5 flex flex-col gap-y-5 left-0 top-[105px] md:top-[150px]">
              <button 
                type="button" 
                title="Accéder à la slide précédente" 
                onClick={scrollLeft}
                className="text-base font-medium items-center bg-white gap-x-2.5 flex justify-center leading-4 min-h-[50px] min-w-[50px] cursor-pointer hover:bg-gray-50 transition-colors gap-y-2.5 text-center uppercase align-middle w-full z-10 border-emerald-900 p-0 rounded-[25px] border-solid font-forma_djr_display md:text-xl md:leading-5 md:min-h-[60px] md:min-w-[60px] md:w-auto md:rounded-[30px] border-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-emerald-900">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                type="button" 
                title="Accéder à la slide suivante" 
                onClick={scrollRight}
                className="text-base font-medium items-center bg-white gap-x-2.5 flex justify-center leading-4 min-h-[50px] min-w-[50px] cursor-pointer hover:bg-gray-50 transition-colors gap-y-2.5 text-center uppercase align-middle w-full z-10 border-emerald-900 p-0 rounded-[25px] border-solid font-forma_djr_display md:text-xl md:leading-5 md:min-h-[60px] md:min-w-[60px] md:w-auto md:rounded-[30px] border-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-emerald-900">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Découvrir */}
      <div className="relative box-border z-[2] px-5 py-[30px] md:px-[30px] md:py-[75px]">
        <div className="items-center box-border gap-x-6 flex flex-wrap justify-center max-w-screen-md gap-y-6 mx-auto">
          <div title="Découvrir" className="box-border">
            <a 
              title="Découvrir" 
              href="https://www.pizzacosy.fr/carte/" 
              className="text-white text-base font-medium content-center items-center bg-emerald-900 box-border gap-x-0 inline-flex justify-center leading-4 min-h-[60px] min-w-[200px] gap-y-0 text-center uppercase align-middle w-full border-emerald-900 px-[53px] py-5 rounded-[30px] border-2 border-solid font-forma_djr_display md:text-xl md:leading-5 md:min-h-[75px] md:w-auto md:py-[25.5px] md:rounded-[37.5px] focus:outline-none"
            >
              Découvrir
            </a>
          </div>
        </div>
      </div>

      {/* Masquer scrollbar */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
