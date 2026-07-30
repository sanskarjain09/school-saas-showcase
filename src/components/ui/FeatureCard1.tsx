import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  priceText?: string;   // Optional (e.g., "Starting at")
  price?: string;       // Optional (e.g., "€ 4.29")
  buttonText: string;
  onClick?: () => void;
}

export default function FeatureCard({
  icon,
  title,
  description,
  priceText,
  price,
  buttonText,
  onClick
}: FeatureCardProps) {
  return (
    // 'mt-12' is important here to give space for the overlapping icon
    <div className="relative bg-white rounded-xl shadow-lg p-8 pt-16 text-center max-w-sm w-full mx-auto mt-12 border border-gray-100">
      
      {/* Overlapping Icon Container */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#D31027] rounded-full flex items-center justify-center border-8 border-gray-100 shadow-sm text-white">
        {/* We expect an SVG or React Node to be passed here */}
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold tracking-widest text-gray-800 uppercase mb-4">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed mb-8">
        {description}
      </p>

      {/* Pricing (Renders only if price prop is passed) */}
      {price && (
        <div className="mb-6 flex items-baseline justify-center gap-1.5">
          <span className="text-sm font-medium text-gray-800">{priceText}</span>
          <span className="text-2xl font-semibold text-gray-800">{price}</span>
        </div>
      )}

      {/* Outline Action Button */}
      <button 
        onClick={onClick}
        className="border-2 border-gray-800 text-gray-800 font-bold text-lg px-8 py-2.5 rounded hover:bg-gray-800 hover:text-white transition-all duration-300"
      >
        {buttonText}
      </button>
    </div>
  );
}