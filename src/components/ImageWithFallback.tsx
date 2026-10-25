import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = "Bakery and sweet delights",
  fallbackTitle = "Fresh Bakery & Sweets",
  className = "w-full h-full object-cover",
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`flex flex-col items-center justify-center bg-stone-900/40 border border-stone-700/50 p-4 text-center select-none ${className}`}>
        <div className="w-10 h-10 mb-2 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-serif text-lg">
          ✦
        </div>
        <p className="text-xs font-medium text-stone-300 max-w-[85%] truncate">{fallbackTitle}</p>
        <span className="text-[10px] text-stone-500 mt-1 uppercase tracking-wider">ForgeDCode Demo Asset</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden bg-stone-950/20">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-stone-800/30 animate-pulse flex items-center justify-center">
          <span className="text-xs text-stone-500">Loading...</span>
        </div>
      )}
    </div>
  );
};
