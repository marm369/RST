import React from 'react';

export function FranchiseSection() {
  return (
    <div className="relative text-white bg-red-300 box-border z-[2]">
      <div className="box-border gap-x-0 flex flex-wrap gap-y-0 md:flex-nowrap">
        <div className="self-stretch box-border basis-full grow break-words md:basis-6/12 md:grow-0">
          <div className="relative items-center box-border flex h-full justify-center min-h-[454px] break-words overflow-clip bg-center p-[18px]">
            <img alt="" src="https://c.animaapp.com/menjgxnroMJDqo/assets/image-1.svg" className="absolute italic aspect-[auto_2000_/_2000] bg-no-repeat bg-cover box-border h-full object-cover object-[65%_26%] break-words w-full inset-0" />
            <span className="absolute box-border block opacity-50 break-words inset-0"></span>
            <div className="relative box-border break-words w-full">
              <p className="text-4xl font-medium box-border leading-[54px] max-w-screen-md break-words text-center mx-auto font-forma_djr_display"></p>
            </div>
          </div>
        </div>
        <div className="self-center box-border basis-full grow break-words w-full px-5 py-[50px] md:basis-0 md:px-[30px] md:py-[130px]">
          <div className="relative box-border break-words z-[2]">
            <h2 className="relative text-[40px] font-medium box-border tracking-[-2px] leading-10 max-w-[520px] break-words mb-[25px] mx-auto font-souvenir_std md:text-[45px] md:tracking-[-2.25px] md:leading-[45px] md:mb-[50px]">Devenez franchisé</h2>
            <p className="text-2xl font-medium box-border leading-[28.8px] max-w-[520px] break-words text-left mx-auto font-forma_djr_display md:text-[26px] md:leading-[31.2px]">
              Devenir franchisé au sein de notre enseigne, c'est avant tout rejoindre une aventure humaine avec de belles valeurs. Nous avons créé un véritable écosystème pour accompagner nos franchisés dans toutes les étapes de la vie d'un entrepreneur.
            </p>
            <div className="items-center box-border gap-x-6 flex flex-wrap max-w-[520px] break-words gap-y-6 mt-[25px] mx-auto md:mt-[50px]">
              <div title="Découvrir" className="box-border break-words">
                <a title="Découvrir" href="https://www.pizzacosy.fr/devenir-franchise-pizzacosy/" className="text-red-300 text-base font-medium content-center items-center bg-white box-border gap-x-0 inline-flex justify-center leading-4 min-h-[60px] min-w-[200px] outline-blue-500 outline break-words gap-y-0 text-center uppercase align-middle w-full px-[53px] py-5 rounded-[30px] border-2 border-solid border-white font-forma_djr_display md:text-xl md:leading-5 md:min-h-[75px] md:w-auto md:py-[25.5px] md:rounded-[37.5px]">
                  Découvrir
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
