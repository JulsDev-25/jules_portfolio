// PhotoInShape.jsx
import React from "react";

export default function PhotoInShape({ src, size = 300 }) {
  return (
    <div className="w-auto" style={{ width: size }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="w-full h-auto">
        <defs>
          <clipPath id="myClip">
            {/* remplace PATH_DU_GENERATEUR par le `d` de ton SVG */}
            <path d="M10,30 C20,5 80,5 90,30 C95,45 80,80 50,90 C20,80 5,50 10,30 Z" />
          </clipPath>
        </defs>

        {/* image à l'intérieur de la forme */}
        <image
          href={src}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid cover"
          clipPath="url(#myClip)"
        />
        {/* contour optionnel */}
        <path d="M10,30 C20,5 80,5 90,30 C95,45 80,80 50,90 C20,80 5,50 10,30 Z" fill="none" stroke="rgba(0,0,0,0.12)" strokeWidth="0.8"/>
      </svg>
    </div>
  );
}
