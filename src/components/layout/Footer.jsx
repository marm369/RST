import React from "react";
import { socialLinksData } from "../../data/socialLinksData";
import { footerNavigationData } from "../../data/footerNavigationData";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // pour le scroll interne
import pizzas from "../../assets/pizzas.jpg";
import pizzaSlice from "../../assets/pizza_slice.jpg";
import spaghetti from "../../assets/spaghetti.jpg";
import restaurant from "../../assets/restaurant.jpg";
import chef from "../../assets/chef.jpg";

export function Footer() {
  return (
    <footer className="box-border">
      {/* --- Suivez-nous --- */}
      <div className="relative text-red-300 box-border z-[2] pt-[50px] md:pt-[130px]">
        <h2 className="text-[40px] font-medium box-border tracking-[-2px] leading-10 text-center font-souvenir text-[#CD212A] md:text-[45px] md:tracking-[-2.25px] md:leading-[45px]">
          Suivez-nous
        </h2>
        <p className="text-2xl font-medium box-border leading-[28.8px] text-center font-forma_djr_display text-[#CD212A] md:text-[26px] md:leading-[31.2px]">
          @mammapalermo
        </p>

        <nav className="flex justify-center mt-5">
          <ul className="flex flex-wrap gap-4 list-none p-0 items-center">
            {socialLinksData.map((social) => {
              const Icon = social.icon;
              return (
                <li key={social.id}>
                  <a
                    title={social.title}
                    href={social.href}
                    className="flex items-center justify-center w-12 h-12 text-[#CD212A] border border-[#CD212A] hover:bg-[#CD212A] hover:text-white rounded-full transition-colors"
                  >
                    <Icon size={24} />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* --- Images décoratives --- */}
      <div className="relative aspect-[375_/_560] box-border max-w-none w-full z-[1] overflow-hidden -mt-2.5 mx-auto md:aspect-[1250_/_850] md:mt-[-50px] md:max-w-[1250px] md:w-[calc(100%_-_60px)]">
        <div className="absolute aspect-square box-border translate-x-[-150px] translate-y-[-150px] rotate-[-4deg] w-4/5 z-[1] left-2/4 top-2/4 md:translate-x-[-268px] md:translate-y-[-268px] md:rotate-[-4deg] md:w-[44%]">
          <img alt="" src={chef} className="absolute object-cover w-full h-full" />
        </div>
        <div className="absolute aspect-square box-border left-[-6%] rotate-[5deg] w-[42%] z-[2] top-[8%] md:w-[24%] md:left-[9%]">
          <img alt="" src={spaghetti} className="absolute object-cover w-full h-full" />
        </div>
        <div className="absolute aspect-square box-border right-[-15%] rotate-[-2deg] w-[42%] z-[3] top-[1%] md:w-[24%] md:right-[9%]">
          <img alt="" src={pizzaSlice} className="absolute object-cover w-full h-full" />
        </div>
        <div className="absolute aspect-square box-border right-[-17%] rotate-[6deg] w-[42%] z-[4] bottom-[9%] md:w-[24%] md:right-[1.3%] md:bottom-[1.7%]">
          <img alt="" src={pizzas} className="absolute object-cover w-full h-full" />
        </div>
        <div className="absolute aspect-square box-border left-[-12%] rotate-[-9deg] w-[42%] z-0 bottom-[2.6%] md:w-[24%] md:left-[1.8%]">
          <img alt="" src={restaurant} className="absolute object-cover w-full h-full" />
        </div>
      </div>

      {/* --- Contact --- */}
      <div className="relative box-border w-full mt-[30px] px-5 md:mt-[150px] md:px-[30px]">
        <div className="relative text-white items-center bg-[#CD212A] box-border gap-x-5 flex flex-col justify-normal max-w-[1080px] gap-y-5 w-full z-[2] mx-auto px-[30px] py-[50px] md:gap-x-[150px] md:flex-row md:justify-between md:gap-y-[150px] md:px-[150px] md:py-[130px]">
          <address className="relative box-border basis-[0%] grow max-w-[310px] z-[2]">
            <h2 className="text-[55px] font-medium box-border tracking-[-2px] leading-[60px] max-w-[260px] mb-[25px] px-[15px] font-souvenir md:text-[70px] md:tracking-[-2.25px] md:leading-[75px] md:mb-[50px] md:px-0">
              Contactez nous.
            </h2>
            <p className="font-medium box-border px-[15px] font-forma_djr_display md:px-0">
              mammapalerm.com
            </p>
          </address>
          <div className="items-center box-border gap-x-2.5 flex flex-col gap-y-2.5 w-full md:w-auto">
            <Link
              to="/contact"
              title="Contactez-nous"
              className="text-base font-medium items-center bg-emerald-900 box-border gap-x-0 flex basis-[0%] grow justify-center leading-4 max-w-[260px] min-h-[60px] min-w-[200px] text-center uppercase align-middle w-full border-emerald-900 px-[53px] py-5 rounded-[30px] border-2 border-solid font-forma_djr_display md:text-xl md:leading-5 md:max-w-none md:min-h-[75px] md:py-[25.5px] md:rounded-[37.5px]"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>

      {/* --- Footer Navigation --- */}
      <div className="text-white bg-emerald-900 box-border">
        <div className="items-center box-border gap-x-[30px] flex flex-col justify-normal max-w-[1520px] gap-y-[30px] w-full mx-auto pt-[50px] pb-[97.5px] px-5 md:gap-x-[75px] md:flex-row md:justify-between md:max-w-[1540px] md:gap-y-[75px] md:pt-[130px] md:pb-[325px] md:px-[30px]">
          <a
            href="/"
            title="Cliquer ici pour aller sur la page d'accueil"
            className="items-center box-border flex justify-center max-w-full"
          >
            <img
              src="/public/logo.png"
              alt="Logo"
              className="hidden md:block w-[505px] max-w-full"
            />
          </a>

          <nav className="box-border max-w-[700px] w-full md:max-w-[800px]">
            <ul className="font-medium box-border gap-x-5 grid grid-flow-row grid-cols-[1fr_1fr] gap-y-5 pl-0 font-forma_djr_display md:grid-flow-col md:grid-cols-[repeat(3,1fr)] md:grid-rows-[repeat(4,1fr)]">
              {footerNavigationData.map((item) => (
                <li key={item.id} className="box-border text-left">
                  {item.href.startsWith("/") ? (
                    // Liens vers une page
                    <Link
                      to={item.href}
                      className="items-center box-border uppercase"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    // Liens vers une section
                    <ScrollLink
                      to={`${item.id}-section`}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="cursor-pointer items-center box-border uppercase"
                    >
                      {item.label}
                    </ScrollLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
