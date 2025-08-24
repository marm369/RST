import React from 'react';
import { qualityFeaturesData } from '../../data/qualityFeaturesData';

export function QualitySection() {
  return (
    <div className="relative text-white bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 px-5 py-12 md:px-20 md:py-20 overflow-hidden">
      {/* Enhanced Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.3)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(5,150,105,0.2)_0%,transparent_50%)]"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-emerald-300/30 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-emerald-500/15 rounded-full blur-lg animate-bounce delay-500"></div>
      <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-emerald-600/25 rounded-full blur-xl animate-pulse delay-2000"></div>

      <div className="relative max-w-[1340px] mx-auto flex flex-wrap gap-8 md:gap-12 justify-center">
        {qualityFeaturesData.map((feature, index) => (
          <div 
            key={feature.id} 
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center text-center group animate-fadeInUp"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Enhanced Image Container with Creative Effects */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 mb-2">
              {/* Glowing Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/40 to-emerald-600/40 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110 group-hover:scale-125 animate-spin-slow"></div>
              
              {/* Hexagonal Frame */}
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg border border-white/30 overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:rotate-2 group-hover:scale-105">
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-transparent to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                {/* Image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-40 h-40 md:w-44 md:h-44 object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 filter drop-shadow-2xl"
                  />
                </div>
                
                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-emerald-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-emerald-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-emerald-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300"></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-emerald-300/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-400"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-80 group-hover:animate-ping transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-pulse transition-opacity duration-300 delay-200"></div>
            </div>

            {/* Enhanced Title with Text Effects */}
            <div className="relative overflow-hidden">
              <h3 className="mt-6 text-2xl md:text-3xl font-souvenir_std font-medium relative z-10 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-200 group-hover:to-emerald-100">
                {feature.title}
              </h3>
              {/* Underline Animation */}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-300 to-emerald-200 transition-all duration-500 group-hover:w-full group-hover:left-0 rounded-full"></div>
            </div>

            {/* Enhanced Description */}
            <p className="mt-4 text-center font-forma_djr_display opacity-80 group-hover:opacity-100 transition-all duration-300 px-2 transform group-hover:translate-y-1 group-hover:text-emerald-100">
              {feature.description}
            </p>

            {/* Subtle Bottom Line */}
            <div className="mt-4 w-8 h-0.5 bg-emerald-400/30 group-hover:bg-emerald-300/60 group-hover:w-16 transition-all duration-500 rounded-full"></div>
          </div>
        ))}
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}