import React from 'react';
import logoImg from '../assets/images/ab_graphics_black_logo_1781615800353.jpg.png';

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  showText?: boolean;
  textSize?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light' | 'colored';
  className?: string;
  width?: string | number;
  height?: string | number;
}

export default function Logo({
  showText = true,
  textSize = 'md',
  theme = 'colored',
  className = '',
  width,
  height,
  ...props
}: LogoProps) {
  // If showText is false, we crop the image to show ONLY the top emblem part (cropping the bottom text out)
  if (!showText) {
    return (
      <div 
        className={`relative overflow-hidden aspect-square flex-shrink-0 rounded-xl bg-black/20 border border-white/5 ${className}`}
        style={{ width: width || undefined, height: height || undefined }}
      >
        {/* Subtle premium neon mesh grid/glow behind icon to make it pop inside the navbar */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/5 via-transparent to-purple-400/5 pointer-events-none" />
        
        {/* Zoomed & translated image to display ONLY the top AB symbol part */}
        <img
          src={logoImg}
          alt="AB Graphics Icon"
          className="w-[145%] h-[145%] max-w-none absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
          style={{ mixBlendMode: 'screen' }}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // If showText is true, we display the entire logo image (emblem + text) keeping original proportions
  // We remove any solid outline, frames, borders, or layout boxes for a lightweight, borderless identity
  return (
    <div className={`flex flex-col items-center select-none relative ${className}`}>
      {/* High-end ambient multi-colored neon glow behind the logo */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[55%] bg-gradient-to-tr from-cyan-500/10 via-purple-500/15 to-orange-500/10 blur-[45px] rounded-full pointer-events-none" />
      
      {/* Clean responsive wrapper crop to eliminate excessive black margin around the graphic asset */}
      <div className="relative overflow-hidden w-full h-auto aspect-square flex items-center justify-center p-1.5">
        <img
          src={logoImg}
          alt="AB Graphics Logo"
          className="w-[105%] h-[105%] max-w-none select-none pointer-events-none transform hover:scale-[1.02] transition-transform duration-500"
          style={{ mixBlendMode: 'screen' }}
          referrerPolicy="no-referrer"
          {...props}
        />
      </div>
    </div>
  );
}
