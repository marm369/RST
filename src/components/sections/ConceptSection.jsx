import React from 'react';

export function ConceptSection() {
  return (
    <div className="box-border max-w-full w-full mx-auto">
      <div className="box-border flex w-full">
        <div className="items-center box-border flex justify-center"></div>
      </div>
      <div className="relative text-[#C03434] box-border z-[2] px-5 py-[50px] md:px-[30px] md:py-[130px]">
        <div className="box-border gap-x-6 flex flex-wrap max-w-[1400px] gap-y-6 mx-auto md:flex-nowrap">
          <div className="box-border basis-full grow break-words md:basis-0">
            <h2 className="relative text-[40px] font-medium box-border tracking-[-2px] leading-10 break-words mb-[25px] font-souvenir_std md:text-[45px] md:tracking-[-2.25px] md:leading-[45px] md:mb-[50px]">
              Bienvenue chez MAMMA PALERMO ! Passion, tradition italienne et produits de qualité vous attendent.
            </h2>
            <div className="items-center box-border gap-x-6 flex flex-wrap break-words gap-y-6 mt-[25px] md:mt-[50px]">
              <div title="Le concept" className="box-border break-words">
                <a 
                  title="Le concept" 
                  href="/le-concept/" 
                  className="text-white text-base font-medium content-center items-center bg-[#C03434] box-border gap-x-0 inline-flex justify-center leading-4 min-h-[60px] min-w-[200px] outline-transparant outline break-words gap-y-0 text-center uppercase align-middle w-full border-[#C03434] px-[53px] py-5 rounded-[30px] border-2 border-solid font-forma_djr_display md:text-xl md:leading-5 md:min-h-[75px] md:w-auto md:py-[25.5px] md:rounded-[37.5px]"
                >
                  Le concept
                </a>
              </div>
            </div>
          </div>
          <div className="self-center box-border basis-full grow break-words w-full md:basis-0">
            <figure className="font-medium box-border table float-right break-words ml-9 font-forma_djr_display">
              <img src="/public/logo.png" alt="" className="italic aspect-[auto_276_/_188] bg-no-repeat bg-cover box-border max-w-full break-words align-bottom w-[276px]" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
