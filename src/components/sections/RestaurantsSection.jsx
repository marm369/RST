import React from 'react';

export function RestaurantsSection() {
  return (
    <div className="relative bg-white box-border z-[2] px-5 md:px-[30px]">
      <div className="box-border gap-x-0 flex flex-wrap max-w-[1460px] gap-y-0 mx-auto md:flex-nowrap">
        <div className="self-center box-border basis-full grow break-words w-full pr-5 py-[50px] md:basis-0 md:pr-[30px] md:py-[130px]">
          <h2 className="relative text-[40px] font-medium box-border tracking-[-2px] leading-10 break-words font-souvenir_std md:text-[45px] md:tracking-[-2.25px] md:leading-[45px]">
            Découvrez nos<br className="text-[40px] box-border tracking-[-2px] leading-10 break-words md:text-[45px] md:tracking-[-2.25px] md:leading-[45px]" />
            lieux sincères
          </h2>
          <p className="text-2xl font-medium box-border leading-[28.8px] break-words text-left mt-6 font-forma_djr_display md:text-[26px] md:leading-[31.2px]">
            En restaurant ou en<br className="text-2xl box-border leading-[28.8px] break-words md:text-[26px] md:leading-[31.2px]" />
            take away.
          </p>
          <div className="items-center box-border gap-x-6 flex flex-wrap justify-start break-words gap-y-6 mt-[25px] md:mt-[50px]">
            <div title="Les restaurants" className="box-border break-words">
              <a title="Les restaurants" href="https://pizzerias.pizzacosy.fr/" className="text-white text-base font-medium content-center items-center bg-emerald-900 box-border gap-x-0 inline-flex justify-center leading-4 min-h-[60px] min-w-[200px] outline-blue-500 outline break-words gap-y-0 text-center uppercase align-middle w-full border-emerald-900 px-[53px] py-5 rounded-[30px] border-2 border-solid font-forma_djr_display md:text-xl md:leading-5 md:min-h-[75px] md:w-auto md:py-[25.5px] md:rounded-[37.5px]">
                Les restaurants
              </a>
            </div>
          </div>
          <div className="relative box-border h-0 max-w-full break-words w-full"></div>
          <div className="box-border clear-both block h-[65px] break-words md:hidden"></div>
        </div>
        <div className="self-center box-border basis-full grow break-words w-full py-[30px] md:basis-6/12 md:grow-0 md:py-[75px]">
          <figure className="font-medium box-border gap-x-0 flex flex-wrap break-words gap-y-0 font-forma_djr_display">
            <figure className="relative box-border flex flex-col grow justify-center max-w-full break-words w-full">
              <img alt="" src="https://c.animaapp.com/menjgxnroMJDqo/assets/image-4.svg" className="italic aspect-[auto_2560_/_1440] bg-no-repeat bg-cover box-border basis-[0%] grow shrink-0 h-full max-w-full object-cover break-words align-bottom w-full" />
            </figure>
            <figure className="relative box-border flex flex-col grow justify-center max-w-full break-words w-full">
              <img 
                alt="pizzacosy restauration sur place" 
                src="https://c.animaapp.com/menjgxnroMJDqo/assets/image-5.svg" 
                className="italic aspect-[auto_1805_/_1016] bg-no-repeat bg-cover box-border basis-[0%] grow shrink-0 h-full max-w-full object-cover break-words align-bottom w-full" 
              />
            </figure>
          </figure>
        </div>
      </div>
    </div>
  );
}
