import React, { forwardRef } from "react";

export const AboutSection = forwardRef(({ scrollToConcept }, ref) => {
  return (
    <section id="apropos">
    <div ref={ref} className="box-border max-w-full w-full mx-auto">
      <div className="box-border flex w-full">
        <div className="items-center box-border flex justify-center"></div>
      </div>

      <div className="relative text-[#C03434] box-border z-[2] px-5 py-[50px] md:px-[30px] md:py-[130px]">
        <div className="box-border gap-x-6 flex flex-wrap max-w-[1400px] gap-y-6 mx-auto md:flex-nowrap">
          <div className="box-border basis-full grow break-words md:basis-0">
            <h2 className="relative text-[50px] font-medium box-border tracking-[-2px] leading-[55px] break-words mb-[25px] font-souvenir md:text-[60px] md:tracking-[-2.5px] md:leading-[65px] md:mb-[50px]">
              Bienvenue chez MAMMA PALERMO ! Passion, tradition italienne et
              produits de qualité vous attendent.
            </h2>

            <div className="items-center box-border gap-x-6 flex flex-wrap break-words gap-y-6 mt-[25px] md:mt-[50px]">
              <div title="Le concept" className="box-border break-words">
                <button
                  type="button"
                  onClick={scrollToConcept}
                  className="text-white text-base font-medium content-center items-center bg-[#C03434] box-border gap-x-0 inline-flex justify-center leading-4 min-h-[60px] min-w-[200px] outline-transparent outline break-words gap-y-0 text-center uppercase align-middle w-full border-white px-[53px] py-5 rounded-[30px] border-4 border-solid font-forma_djr_display md:text-xl md:leading-5 md:min-h-[75px] md:w-auto md:py-[25.5px] md:rounded-[37.5px] hover:bg-red-700 transition-colors duration-300"
                >
                  Le concept
                </button>
              </div>
            </div>
          </div>

          <div className="self-center box-border basis-full grow break-words w-full md:basis-0">
            <figure className="font-medium box-border table float-right break-words ml-9 font-forma_djr_display">
              <img
                src="/public/logo.png"
                alt=""
                className="italic aspect-[auto_276_/_188] bg-no-repeat bg-cover box-border max-w-full break-words align-bottom w-[276px]"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
});
