import React from "react";
import { Header } from "./components/layout/Header";
import { CookieConsent } from "./components/ui/CookieConsent";
import { OrderNavigation } from "./components/features/OrderNavigation";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ConceptSection } from "./components/sections/ConceptSection";
import { ProductsSection } from "./components/sections/ProductsSection";
import { QualitySection } from "./components/sections/QualitySection";
import { RestaurantsSection } from "./components/sections/RestaurantsSection";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <div className="fixed text-emerald-900 text-lg not-italic normal-nums font-normal accent-auto bg-fixed bg-white bg-[linear-gradient(to_right,rgb(0,81,62),rgb(0,81,62)_20%,rgb(255,255,255)_20%,rgb(255,255,255)_40%,rgb(0,81,62)_40%,rgb(0,81,62)_60%,rgb(255,255,255)_60%,rgb(255,255,255)_80%,rgb(0,81,62)_80%,rgb(0,81,62)_100%,rgb(255,255,255)_100%,rgb(255,255,255)_120%)] bg-repeat-y bg-size-[100%_100%] box-border flex flex-col tracking-[normal] leading-[27px] list-outside list-disc min-h-[1000px] overflow-x-hidden overflow-y-hidden text-start indent-[0px] normal-case visible w-full bg-center border-separate font-forma_djr_display md:static md:bg-[linear-gradient(to_right,rgb(255,255,255),rgb(255,255,255)_7.69231%,rgb(0,81,62)_7.69231%,rgb(0,81,62)_15.3846%,rgb(255,255,255)_15.3846%,rgb(255,255,255)_23.0769%,rgb(0,81,62)_23.0769%,rgb(0,81,62)_30.7692%,rgb(255,255,255)_30.7692%,rgb(255,255,255)_38.4615%,rgb(0,81,62)_38.4615%,rgb(0,81,62)_46.1538%,rgb(255,255,255)_46.1538%,rgb(255,255,255)_53.8462%,rgb(0,81,62)_53.8462%,rgb(0,81,62)_61.5385%,rgb(255,255,255)_61.5385%,rgb(255,255,255)_69.2308%,rgb(0,81,62)_69.2308%,rgb(0,81,62)_76.9231%,rgb(255,255,255)_76.9231%,rgb(255,255,255)_84.6154%,rgb(0,81,62)_84.6154%,rgb(0,81,62)_92.3077%,rgb(255,255,255)_92.3077%,rgb(255,255,255)_100%,rgb(0,81,62)_100%,rgb(0,81,62)_107.692%)] md:overflow-y-auto md:w-auto">
      <div className="relative box-border z-[55] font-rubik md:z-[45]">
        <div className="box-border">
          <CookieConsent />
        </div>
      </div>

      <div className="relative box-border">
        <div className="absolute box-border h-px top-0"></div>
      </div>

      <Header />

      <main className="box-border">
        <OrderNavigation />
        <HeroSection />
        <AboutSection />
        <ConceptSection />
        <ProductsSection />
        <QualitySection />
        <RestaurantsSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
