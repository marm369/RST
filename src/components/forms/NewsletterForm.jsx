import React, { useState } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');

  // Supprimer le type TypeScript ici
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="box-border">
      <form aria-label="Formulaire de contact" className="box-border" onSubmit={handleSubmit}>
        <div className="box-border hidden">
          <input type="hidden" name="_wpcf7" value="355" className="box-border hidden outline-blue-500 outline text-left w-full py-[7px] border-solid border-white" />
          <input type="hidden" name="_wpcf7_version" value="5.9.8" className="box-border hidden outline-blue-500 outline text-left w-full py-[7px] border-solid border-white" />
          <input type="hidden" name="_wpcf7_locale" value="fr_FR" className="box-border hidden outline-blue-500 outline text-left w-full py-[7px] border-solid border-white" />
          <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f355-o1" className="box-border hidden outline-blue-500 outline text-left w-full py-[7px] border-solid border-white" />
          <input type="hidden" name="_wpcf7_container_post" value="0" className="box-border hidden outline-blue-500 outline text-left w-full py-[7px] border-solid border-white" />
          <input type="hidden" name="_wpcf7_posted_data_hash" value="" className="box-border hidden outline-blue-500 outline text-left w-full py-[7px] border-solid border-white" />
          <input type="hidden" name="_wpcf7_recaptcha_response" className="box-border hidden outline-blue-500 outline text-left w-full py-[7px] border-solid border-white" />
        </div>
        
        <div className="box-border gap-x-5 flex flex-col max-w-[770px] gap-y-5 w-full mx-auto">
          <div className="items-start box-border gap-x-5 flex flex-col justify-normal gap-y-5 md:flex-row md:justify-center">
            <div className="box-border gap-x-5 flex flex-col gap-y-5">
              <div className="relative box-border flex basis-[0%] flex-col grow">
                <p className="font-medium box-border flex flex-col font-forma_djr_display">
                  <span className="relative box-border block">
                    <input 
                      placeholder="Mail" 
                      value={email} 
                      type="email" 
                      name="email" 
                      className="box-border min-h-[60px] min-w-[200px] outline-blue-500 outline text-left w-full border-emerald-900 px-[38px] py-[7px] rounded-[30px] border-solid md:min-h-[75px] md:rounded-[37.5px]"
                      onChange={handleEmailChange}
                    />
                  </span>
                </p>
              </div>
              <div className="relative box-border flex basis-[0%] flex-col grow">
                <p className="font-medium box-border flex flex-col font-forma_djr_display">
                  <span className="relative box-border block">
                    <span className="box-border">
                      <span className="box-border inline-block">
                        <label className="relative items-stretch box-border gap-x-0 flex justify-start outline-blue-500 outline gap-y-0 w-full pl-[30px] pb-0.5">
                          <span className="box-border block text-left">
                            En renseignant votre adresse électronique ; vous acceptez de recevoir des informations et offres marketing Pizza Cosy par courrier électronique. Vous pouvez vous désabonner à tout moment en cliquant sur le lien de désinscription intégré dans la newsletter.
                          </span>
                        </label>
                      </span>
                    </span>
                  </span>
                </p>
              </div>
            </div>
            <div className="[align-items:normal] box-border gap-x-5 flex flex-col justify-normal gap-y-5 md:items-center md:gap-x-[50px] md:flex-row md:justify-between md:gap-y-[50px]">
              <div className="box-border">
                <p className="font-medium box-border font-forma_djr_display">
                  <button 
                    type="submit" 
                    title="Soumettre le formulaire" 
                    className="text-white text-base items-center bg-emerald-900 gap-x-0 inline-flex justify-center leading-4 min-h-[60px] min-w-[200px] outline-blue-500 outline gap-y-0 text-center uppercase align-middle w-full border-emerald-900 px-[53px] py-5 rounded-[30px] border-solid md:text-xl md:leading-5 md:min-h-[75px] md:py-[25.5px] md:rounded-[37.5px]"
                  >
                    S'inscrire
                    <span className="absolute text-base box-border hidden h-[30px] leading-4 w-[30px] left-2/4 top-2/4 md:text-xl md:leading-5"></span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
