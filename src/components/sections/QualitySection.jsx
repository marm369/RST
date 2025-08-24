import React from 'react';
import { qualityFeaturesData } from '../../data/qualityFeaturesData';

export function QualitySection() {
  return (
    <div className="relative text-white bg-emerald-900 box-border z-[2] px-5 py-[30px] md:px-[30px] md:py-[75px]">
      <div className="box-border gap-x-[25px] flex flex-wrap max-w-[1340px] gap-y-[25px] mx-auto md:gap-x-[50px] md:flex-nowrap md:gap-y-[50px]">
        <div className="box-border basis-full grow break-words md:basis-0">
          <div className="box-border gap-x-[25px] flex break-words gap-y-0 md:gap-x-[50px]">
            {qualityFeaturesData.map((feature) => (
              <div key={feature.id} className="self-start box-border basis-0 grow break-words w-full">
                <figure className="font-medium box-border clear-both table break-words text-center mx-auto font-forma_djr_display">
                  <img alt="" src={feature.image} className={feature.imageClass} />
                </figure>
                <p className="text-[26px] font-medium box-border tracking-[-1.3px] leading-[26px] break-words text-center mt-6 font-souvenir_std md:text-3xl md:tracking-[-1.5px] md:leading-[30px]">{feature.title}</p>
                <p className="font-medium box-border break-words text-center mt-6 font-forma_djr_display">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
