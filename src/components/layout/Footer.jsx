import React from 'react';
import { socialLinksData } from '../../data/socialLinksData';
import { footerNavigationData } from '../../data/footerNavigationData';
import { NewsletterForm } from '../forms/NewsletterForm';

export function Footer() {
  return (
    <footer className="box-border">
      <div className="relative text-red-300 box-border z-[2] pt-[50px] md:pt-[130px]">
        <h2 className="text-[40px] font-medium box-border tracking-[-2px] leading-10 text-center font-souvenir_std md:text-[45px] md:tracking-[-2.25px] md:leading-[45px]">Suivez-nous</h2>
        <p className="text-2xl font-medium box-border leading-[28.8px] text-center font-forma_djr_display md:text-[26px] md:leading-[31.2px]">@pizzacosyfrance</p>
        <nav className="box-border flex justify-center mt-5">
          <ul className="font-medium items-center box-border flex flex-wrap list-none pl-0 font-forma_djr_display">
            {socialLinksData.map((social) => (
              <li key={social.id} className="box-border text-left">
                <a 
                  title={social.title} 
                  href={social.href} 
                  className={social.className}
                ></a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="relative aspect-[375_/_560] box-border max-w-none w-full z-[1] overflow-hidden -mt-2.5 mx-auto md:aspect-[1250_/_850] md:mt-[-50px] md:max-w-[1250px] md:w-[calc(100%_-_60px)]">
        <div className="absolute aspect-square box-border translate-x-[-150px] translate-y-[-150px] rotate-[-4.000001701562398deg] w-4/5 z-[1] left-2/4 top-2/4 md:translate-x-[-268.398px] md:translate-y-[-268.398px] md:rotate-[-4.000001701562398deg] md:w-[44%]">
          <img alt="" src="https://c.animaapp.com/menjgxnroMJDqo/assets/image-1.svg" className="absolute italic aspect-[auto_2000_/_2000] bg-no-repeat bg-cover box-border h-full max-w-full object-cover w-full left-0 top-0" />
        </div>
        <div className="absolute aspect-square box-border left-[-6%] rotate-[4.999996052434918deg] w-[42%] z-[2] top-[8%] md:w-[24%] md:left-[9%]">
          <img alt="" src="https://c.animaapp.com/menjgxnroMJDqo/assets/image-6.svg" className="absolute italic aspect-[auto_1200_/_1200] bg-no-repeat bg-cover box-border h-full max-w-full object-cover w-full left-0 top-0" />
        </div>
        <div className="absolute aspect-square box-border right-[-15%] rotate-[-1.999999842926156deg] w-[42%] z-[3] top-[1%] md:w-[24%] md:right-[9%]">
          <img alt="" src="https://c.animaapp.com/menjgxnroMJDqo/assets/image-1.svg" className="absolute italic aspect-[auto_2000_/_2000] bg-no-repeat bg-cover box-border h-full max-w-full object-cover w-full left-0 top-0" />
        </div>
        <div className="absolute aspect-square box-border right-[-17%] rotate-[5.999972975483472deg] w-[42%] z-[4] bottom-[9%] md:w-[24%] md:right-[1.3%] md:bottom-[1.7%]">
          <img alt="" src="https://c.animaapp.com/menjgxnroMJDqo/assets/image-1.svg" className="absolute italic aspect-[auto_2000_/_2000] bg-no-repeat bg-cover box-border h-full max-w-full object-cover w-full left-0 top-0" />
        </div>
        <div className="absolute aspect-square box-border left-[-12%] rotate-[-8.999976735956185deg] w-[42%] z-0 bottom-[2.6%] md:w-[24%] md:left-[1.8%]">
          <img alt="" src="https://c.animaapp.com/menjgxnroMJDqo/assets/image-1.svg" className="absolute italic aspect-[auto_2000_/_2000] bg-no-repeat bg-cover box-border h-full max-w-full object-cover w-full left-0 top-0" />
        </div>
      </div>
      
      <div className="relative box-border w-full mt-[30px] px-5 md:mt-[150px] md:px-[30px] after:accent-auto after:bg-white after:box-border after:text-emerald-900 after:block after:text-lg after:not-italic after:normal-nums after:font-normal after:h-3/6 after:tracking-[normal] after:leading-[27px] after:list-outside after:list-disc after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:z-[1] after:border-separate after:left-0 after:bottom-0 after:font-forma_djr_display">
        <div className="relative text-white items-center bg-red-300 box-border gap-x-5 flex flex-col justify-normal max-w-[1080px] gap-y-5 w-full z-[2] mx-auto px-[30px] py-[50px] md:gap-x-[150px] md:flex-row md:justify-between md:gap-y-[150px] md:px-[150px] md:py-[130px]">
          <address className="relative box-border basis-[0%] grow max-w-[310px] z-[2]">
            <h2 className="text-[40px] font-medium box-border tracking-[-2px] leading-10 max-w-[260px] mb-[25px] px-[15px] font-souvenir_std md:text-[45px] md:tracking-[-2.25px] md:leading-[45px] md:mb-[50px] md:px-0">Contactez nous.</h2>
            <p className="font-medium box-border px-[15px] font-forma_djr_display md:px-0">pizzacosy.fr</p>
            <img alt="" src="https://c.animaapp.com/menjgxnroMJDqo/assets/image-7.svg" className="absolute italic aspect-[auto_146_/_167] bg-no-repeat bg-cover box-border max-h-[130px] max-w-[115px] right-[-2%] translate-y-[-50.0%] w-[146px] z-[-1] top-[33%] md:max-h-[167px] md:max-w-[145px] md:right-0 md:top-[52%]" />
          </address>
          <div className="items-center box-border gap-x-2.5 flex flex-col gap-y-2.5 w-full md:w-auto">
            <a href="https://www.pizzacosy.fr/nous-contacter/" title="Contactez-nous" className="text-base font-medium items-center bg-emerald-900 box-border gap-x-0 flex basis-[0%] grow justify-center leading-4 max-w-[260px] min-h-[60px] min-w-[200px] outline-blue-500 outline gap-y-0 text-center uppercase align-middle w-full border-emerald-900 px-[53px] py-5 rounded-[30px] border-2 border-solid font-forma_djr_display md:text-xl md:leading-5 md:max-w-none md:min-h-[75px] md:py-[25.5px] md:rounded-[37.5px]">
              Contactez-nous
            </a>
            <a href="https://www.pizzacosy.fr/devenir-franchise-pizzacosy/" title="Devenez franchisé" className="text-emerald-900 text-base font-medium items-center bg-white box-border gap-x-0 flex basis-[0%] grow justify-center leading-4 max-w-[260px] min-h-[60px] min-w-[200px] outline-blue-500 outline gap-y-0 text-center uppercase align-middle w-full px-[53px] py-5 rounded-[30px] border-2 border-solid border-white font-forma_djr_display md:text-xl md:leading-5 md:max-w-none md:min-h-[75px] md:py-[25.5px] md:rounded-[37.5px]">
              Devenez franchisé
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-white box-border">
        <div className="[align-items:normal] box-border gap-x-[25px] flex flex-col justify-normal max-w-[1520px] gap-y-[25px] w-full mx-auto px-5 py-[30px] md:items-center md:gap-x-[50px] md:flex-row md:justify-between md:max-w-[1540px] md:gap-y-[50px] md:px-[30px] md:py-[75px]">
          <h2 className="text-[40px] font-medium box-border tracking-[-2px] leading-10 max-w-[350px] text-start font-souvenir_std md:text-[45px] md:tracking-[-2.25px] md:leading-[45px] md:text-left">Inscription à la newsletter</h2>
          <div className="box-border max-w-none w-full md:max-w-[770px]">
            <NewsletterForm />
          </div>
        </div>
      </div>
      
      <div className="text-white bg-emerald-900 box-border">
        <div className="items-center box-border gap-x-[30px] flex flex-col justify-normal max-w-[1520px] gap-y-[30px] w-full mx-auto pt-[50px] pb-[97.5px] px-5 md:gap-x-[75px] md:flex-row md:justify-between md:max-w-[1540px] md:gap-y-[75px] md:pt-[130px] md:pb-[325px] md:px-[30px]">
          <a 
            href="https://www.pizzacosy.fr/" 
            title="Cliquer ici pour aller sur la page d'accueil" 
            className="items-center box-border flex justify-center max-w-full outline-blue-500 outline underline decoration-from-font w-[500px]"
          >
            <img src="https://c.animaapp.com/menjgxnroMJDqo/assets/image-8.svg" alt="" className="italic aspect-[auto_241_/_72] bg-no-repeat bg-cover box-border block max-w-full min-h-[auto] min-w-[auto] w-[241px] md:hidden md:min-h-0 md:min-w-0" />
            <img alt="" src="https://c.animaapp.com/menjgxnroMJDqo/assets/image-9.svg" className="italic aspect-[auto_505_/_218] bg-no-repeat bg-cover box-border hidden max-w-full min-h-0 min-w-0 w-[505px] md:block md:min-h-[auto] md:min-w-[auto]" />
          </a>
          <nav className="box-border max-w-[700px] w-full md:max-w-[800px]">
            <ul className="font-medium box-border gap-x-5 grid grid-flow-row grid-cols-[1fr_1fr] grid-rows-none list-none gap-y-5 pl-0 font-forma_djr_display md:grid-flow-col md:grid-cols-[repeat(3,1fr)] md:grid-rows-[repeat(4,1fr)]">
              {footerNavigationData.map((item) => (
                <li key={item.id} className="box-border text-left">
                  <a href={item.href} className="items-center box-border justify-center outline-offset-[3px] outline decoration-from-font uppercase">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
