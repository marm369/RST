import React, { useState } from "react";
import palermoImg from "/src/assets/palermo-sicily.jpg";
import { storyStepsData } from "../../data/storyStepsData";
export function ConceptSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={palermoImg}
          alt="Palermo, Sicile - Notre inspiration culinaire"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-300/30 via-red-200/20 to-red-100/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-red-400/30 to-transparent rounded-full opacity-50 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-red-500/40 to-transparent rounded-full opacity-60 translate-y-24 -translate-x-24"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          {/* Story Section */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Progress indicators */}
            <div className="flex space-x-2 mb-8">
              {storyStepsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex-1 h-1.5 rounded-full transition-all duration-300 ${
                    index === activeStep
                      ? "bg-gradient-to-r from-red-400 to-red-600 shadow-lg"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Story Card */}
            <div className="relative z-10">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30 hover:bg-white/98 transition-all duration-300">
                {/* Icon and subtitle */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-3xl">{storyStepsData[activeStep].icon}</div>
                  <span className="text-sm font-bold text-red-600 uppercase tracking-wider">
                    {storyStepsData[activeStep].subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {storyStepsData[activeStep].title}
                </h3>

                {/* Content */}
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {storyStepsData[activeStep].content}
                </p>

                {/* Highlight */}
                <div className="bg-gradient-to-r from-red-100 to-red-50 rounded-2xl p-4 border-l-4 border-red-500">
                  <p className="font-semibold text-red-800">
                    ✨ {storyStepsData[activeStep].highlight}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center space-x-4 mt-6 z-10 relative">
              <button
                onClick={() =>
                  setActiveStep(Math.max(0, activeStep - 1))
                }
                disabled={activeStep === 0}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeStep === 0
                    ? "text-red-400 cursor-not-allowed bg-white/20 backdrop-blur-sm"
                    : "text-red-600 bg-white hover:bg-red-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>Précédent</span>
              </button>

              {/* Step counter */}
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-bold text-gray-700">
                  {activeStep + 1} / {storyStepsData.length}
                </span>
              </div>

              <button
                onClick={() =>
                  setActiveStep(Math.min(
                    storyStepsData.length - 1,
                    activeStep + 1
                  ))
                }
                disabled={activeStep === storyStepsData.length - 1}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeStep === storyStepsData.length - 1
                    ? "text-red-400 cursor-not-allowed bg-white/20 backdrop-blur-sm"
                    : "text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                }`}
              >
                <span>Suivant</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Content placeholder for balance */}
          <div className="order-1 lg:order-2 relative hidden lg:block">
            <div className="relative">
              {/* Floating info card */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/30 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏛️</div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    Palermo, Sicile
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Berceau de nos traditions culinaires, cette magnifique ville
                    sicilienne inspire chaque plat que nous préparons avec amour.
                  </p>
                  <div className="mt-6 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-75"></div>
                    <div className="w-2 h-2 bg-red-300 rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient for better text readability */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </section>
  );
}