"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/bg1.png", alt: "Brilliant Future Integrated School campus view" },
  { src: "/bg2.png", alt: "Brilliant Future Integrated School building and grounds" },
  { src: "/bg3.png", alt: "Brilliant Future Integrated School learning environment" },
] as const;

const INTERVAL_MS = 6000;

export function BackgroundSlideshow() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const activeIndex = reduceMotion ? 0 : index;

  return (
    <div className="hero-slideshow" aria-hidden="true">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={i === activeIndex ? "hero-slide is-active" : "hero-slide"}
        >
          <Image
            src={slide.src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            quality={85}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      ))}
      <div className="hero-slide-status" aria-hidden="true">
        {SLIDES.map((slide, i) => (
          <span
            key={slide.src}
            className={i === activeIndex ? "hero-dot is-active" : "hero-dot"}
          />
        ))}
      </div>
    </div>
  );
}
