import React from 'react';
import { orderOptionsData } from '../../data/orderOptionsData';

export function OrderNavigation() {
  return (
    <nav className="fixed box-border w-full z-50 right-0 bottom-0">
      <ul className="absolute font-medium box-border flex flex-row-reverse h-[65px] list-none w-full pl-0 right-0 bottom-0 font-forma_djr_display md:flex-col md:h-[260px]">
        {orderOptionsData.map((option) => (
          <li key={option.id} className="box-border basis-[0%] grow text-left w-6/12 md:w-full">
            <a href="#" title={option.title} className={option.className}>
              <img src={option.image} alt={option.alt} className="static text-base italic aspect-[auto_95_/_62] bg-no-repeat bg-cover box-border shrink-0 h-9 leading-4 max-h-full max-w-full min-h-[auto] min-w-[auto] opacity-100 transform-none left-auto top-auto md:absolute md:text-xl md:h-3/6 md:leading-5 md:max-h-[77px] md:max-w-[77px] md:min-h-0 md:min-w-0 md:opacity-0 md:scale-0 md:left-2/4 md:top-5" />
              <span className="absolute text-2xl box-border hidden leading-[28.8px] opacity-0 transform-none origin-[0%_50%] left-2/4 top-2/4 md:text-[26px] md:block md:leading-[31.2px] md:opacity-100 md:translate-x-[-50.0%] md:translate-y-[-50.0%]">{option.description}</span>
              <span className={option.buttonClass}>{option.buttonText}</span>
              <span className="static text-base box-border hidden leading-4 max-w-[200px] text-left transform-none w-auto left-auto bottom-auto font-souvenir_std md:absolute md:text-6xl md:block md:leading-[60px] md:max-w-none md:translate-x-[30px] md:translate-y-[50.0%] md:w-[calc(100%_-_20px)] md:left-0 md:bottom-2/4">{option.type}</span>
              <span className="static text-base box-border block h-[12.8px] leading-4 max-w-[200px] min-h-[auto] min-w-[auto] opacity-100 transform-none w-auto left-auto bottom-auto font-forma_djr_display md:absolute md:text-6xl md:h-12 md:leading-[60px] md:max-w-none md:min-h-0 md:min-w-0 md:opacity-0 md:translate-x-[30px] md:translate-y-[50.0%] md:w-[calc(100%_-_20px)] md:left-0 md:bottom-2/4">{option.type}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
