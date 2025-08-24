import React, { useState } from "react";
import { navigationData } from "../../data/navigationData";
import whiteLogo from "../../assets/mamma_palermo_white.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed text-white box-border h-[80px] w-full z-[100] left-0 top-0 md:h-[125px]">
      <nav
        aria-label="Navigation principal"
        className="items-stretch box-border gap-x-2.5 flex h-full max-w-[1960px] gap-y-2.5 w-full mx-auto px-5 md:max-w-[1980px] md:px-[30px]"
      >
        <a
          title="Retourner sur la page d'accueil"
          href="/mammapalermo"
          className="relative items-center self-center aspect-[517_/_72] box-border flex h-[min(80px,100%_-_40px)] justify-center max-w-[517px] outline-transparent outline underline decoration-from-font"
        >
          <img
            src={whiteLogo}
            alt=""
            className="absolute italic aspect-[auto_517_/_72.24] bg-no-repeat bg-cover box-border max-h-full max-w-full translate-x-[-50%] translate-y-[-50%] w-[105%] z-[2] left-2/4 top-2/4"
          />
        </a>

        <button
          type="button"
          title="Cliquer ici pour afficher tous les liens du menu"
          className="absolute items-center aspect-square bg-transparent gap-x-0 flex h-full justify-center min-h-[65px] min-w-[65px] outline-transparent -outline-offset-2 outline gap-y-0 text-center align-middle z-[3] p-0 right-0 top-0 md:hidden md:min-h-[80px] md:min-w-[80px]"
          onClick={toggleMenu}
        >
          <span className="relative box-border block h-[18px] min-h-[auto] min-w-[auto] w-7 md:inline-block md:min-h-0 md:min-w-0">
            <span className="absolute bg-white box-border block h-[3px] mt-[-1.5px] w-7 rounded-[3px] top-2/4 before:accent-auto before:bg-white before:box-border before:text-white before:block before:text-lg before:not-italic before:normal-nums before:font-normal before:h-[3px] before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:absolute before:text-center before:indent-[0px] before:normal-case before:top-[-7px] before:visible before:w-[calc(100%_-_5px)] before:rounded-[3px] before:border-separate before:font-forma_djr_display after:accent-auto after:bg-white after:bottom-[-7px] after:box-border after:text-white after:block after:text-lg after:not-italic after:normal-nums after:font-normal after:h-[3px] after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-[calc(100%_-_10px)] after:rounded-[3px] after:border-separate after:left-[5px] after:font-forma_djr_display"></span>
          </span>
        </button>

        <div className="fixed [align-items:normal] box-border gap-x-5 flex flex-col h-[930px] justify-normal max-h-[930px] min-h-0 min-w-0 opacity-0 overscroll-x-contain overscroll-y-contain gap-y-5 translate-x-[25%] invisible w-full overflow-auto px-5 py-[35px] left-0 top-[80px] md:static md:items-center md:gap-x-3 md:flex-row md:h-full md:justify-end md:max-h-[885px] md:min-h-[auto] md:min-w-[auto] md:opacity-100 md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:transform-none md:visible md:overflow-visible md:p-0 md:top-[125px]">
          <ul className="font-medium box-border gap-x-6 flex flex-col list-none gap-y-6 invisible pl-0 font-forma_djr_display md:gap-x-4 md:flex-row md:gap-y-0 md:visible">
            {navigationData.mainNavigation.map((item) => (
              <li
                key={item.id}
                className="box-border flex justify-center text-left invisible md:visible"
              >
                <a
                  href={item.href}
                  className="text-lg md:text-xl items-center box-border gap-x-0 flex h-auto justify-center leading-5 max-w-[300px] min-h-[65px] outline-transparent outline gap-y-0 text-center uppercase align-middle invisible w-full px-[53px] py-5 rounded-[35px] border-2 border-solid border-transparent md:h-[75px] md:max-w-none md:min-h-[auto] md:visible md:w-auto md:px-[18px] md:py-3 md:rounded-[40px]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="box-border flex justify-center invisible md:visible">
            <a
              href="/contact"
              title="Nous Contacter"
              className="text-base md:text-lg font-medium items-center bg-white box-border gap-x-0 flex h-auto justify-center leading-5 max-w-[300px] min-h-[65px] outline-transparent outline gap-y-0 text-center uppercase align-middle invisible w-full px-[53px] py-5 rounded-[35px] border-2 border-solid border-white font-forma_djr_display md:text-emerald-900 md:h-[75px] md:max-w-none md:min-h-[auto] md:visible md:w-auto md:px-[18px] md:py-3 md:rounded-[40px]"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
