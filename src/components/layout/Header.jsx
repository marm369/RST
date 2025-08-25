import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigationData } from "../../data/navigationData";
import whiteLogo from "../../assets/logos/mamma_palermo_white.png";
import greenLogo from "../../assets/logos/mamma_palermo_green.png";

export function Header({ scrollToSection, refs }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 100); // Changer après 100px de scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour gérer scroll ou navigation vers la page principale
  const handleClick = (item) => {
    if (location.pathname === "/" && (item.id === "about" || item.id === "concept")) {
      const ref = refs[item.id + "Ref"];
      if (ref?.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = item.href;
    }
  };

  return (
    <header
      className={`fixed box-border h-[80px] w-full z-[100] left-0 top-0 md:h-[125px] transition-all duration-300 ${
        isScrolled ? "bg-white text-emerald-900 shadow-lg" : "text-white bg-transparent"
      }`}
    >
      <nav
        aria-label="Navigation principal"
        className="items-stretch box-border gap-x-2.5 flex h-full max-w-[1960px] gap-y-2.5 w-full mx-auto px-5 md:max-w-[1980px] md:px-[30px]"
      >
        <Link
          title="Retourner sur la page d'accueil"
          to="/"
          className="relative items-center self-center aspect-[517_/_72] box-border flex h-[min(80px,100%_-_40px)] justify-center max-w-[517px] outline-transparent underline decoration-from-font"
        >
          <img
            src={isScrolled ? greenLogo : whiteLogo}
            alt=""
            className={`absolute italic aspect-[auto_517_/_72.24] bg-no-repeat bg-cover box-border max-h-full max-w-full translate-x-[-50%] translate-y-[-50%] w-[105%] z-[2] left-2/4 top-2/4 transition-all duration-300 ${
              isScrolled ? "filter brightness-0" : ""
            }`}
          />
        </Link>

        {/* Hamburger menu pour mobile */}
        <button
          type="button"
          title="Cliquer ici pour afficher tous les liens du menu"
          className="absolute items-center aspect-square bg-transparent gap-x-0 flex h-full justify-center min-h-[65px] min-w-[65px] outline-transparent -outline-offset-2 outline gap-y-0 text-center align-middle z-[3] p-0 right-0 top-0 md:hidden md:min-h-[80px] md:min-w-[80px]"
          onClick={toggleMenu}
        >
          <span className="relative box-border block h-[18px] min-h-[auto] min-w-[auto] w-7 md:inline-block md:min-h-0 md:min-w-0">
            <span
              className={`absolute box-border block h-[3px] mt-[-1.5px] w-7 rounded-[3px] top-2/4 transition-all duration-300 ${
                isScrolled ? "bg-emerald-900" : "bg-white"
              } before:bg-current after:bg-current before:absolute after:absolute before:h-[3px] after:h-[3px] before:top-[-7px] after:bottom-[-7px] before:w-[calc(100%_-_5px)] after:w-[calc(100%_-_10px)] before:rounded-[3px] after:rounded-[3px]`}
            ></span>
          </span>
        </button>

        {/* Navigation principale */}
        <div
          className={`fixed [align-items:normal] box-border gap-x-5 flex flex-col h-[930px] justify-normal max-h-[930px] min-h-0 min-w-0 opacity-0 overscroll-x-contain overscroll-y-contain gap-y-5 translate-x-[25%] invisible w-full overflow-auto px-5 py-[35px] left-0 top-[80px] transition-all duration-300 ${
            isScrolled ? "bg-white" : "bg-transparent"
          } md:static md:items-center md:gap-x-3 md:flex-row md:h-full md:justify-end md:max-h-[885px] md:min-h-[auto] md:min-w-[auto] md:opacity-100 md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:transform-none md:visible md:overflow-visible md:p-0 md:top-[125px] md:bg-transparent`}
        >
          <ul className="font-medium box-border gap-x-6 flex flex-col list-none gap-y-6 invisible pl-0 font-forma_djr_display md:gap-x-4 md:flex-row md:gap-y-0 md:visible">
            {navigationData.mainNavigation.map((item) => (
              <li key={item.id} className="box-border flex justify-center text-left invisible md:visible">
                <button
                  onClick={() => handleClick(item)}
                  className={`text-lg md:text-xl items-center box-border gap-x-0 flex h-auto justify-center leading-5 max-w-[300px] min-h-[65px] outline-transparent gap-y-0 text-center uppercase align-middle w-full px-[53px] py-5 rounded-[35px] border-2 border-solid border-transparent transition-all duration-300 md:h-[75px] md:max-w-none md:min-h-[auto] md:w-auto md:px-[18px] md:py-3 md:rounded-[40px] ${
                    isScrolled
                      ? "text-emerald-900 hover:bg-emerald-900 hover:text-white"
                      : "text-white hover:bg-white hover:text-emerald-900"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="box-border flex justify-center invisible md:visible">
            <Link
              to="/contact"
              title="Nous Contacter"
              className={`text-base md:text-lg font-medium items-center box-border gap-x-0 flex h-auto justify-center leading-5 max-w-[300px] min-h-[65px] outline-transparent gap-y-0 text-center uppercase align-middle w-full px-[53px] py-5 rounded-[35px] border-2 border-solid font-forma_djr_display transition-all duration-300 md:h-[75px] md:max-w-none md:min-h-[auto] md:w-auto md:px-[18px] md:py-3 md:rounded-[40px] ${
                isScrolled
                  ? "bg-emerald-900 text-white border-emerald-900 hover:bg-emerald-800 hover:border-emerald-800"
                  : "bg-white text-emerald-900 border-white hover:bg-emerald-900 hover:text-white hover:border-emerald-900"
              }`}
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
