"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    // Keep the animation on screen for 3.5 seconds
    const hideTimer = setTimeout(() => {
      setIsHiding(true);
    }, 3500);

    // Completely remove it from the DOM after it slides up (4.1 seconds)
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4100);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`splash-screen ${isHiding ? "is-hidden" : ""}`}>
      <div className="splash-logo-container">
        <div className="splash-crest">
          <Image 
            src="/briliantlogo.png" 
            alt="School Crest" 
            width={100} 
            height={100} 
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
        <h1 className="splash-text-main">Brilliant Future</h1>
        <h2 className="splash-text-sub">Integrated School</h2>
        <div className="splash-line"></div>
      </div>
    </div>
  );
}
