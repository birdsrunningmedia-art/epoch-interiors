"use client";
import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { homePageContent } from "@/data/homePage";
import { serviceImages, getRandomEdge, texts } from "@/data/service";
import { TImage } from "@/types/types";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { serviceCopy } from "@/data/service";

export default function Services() {
  const [activeImages, setActiveImages] = useState<TImage[]>([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const spawnImage = () => {
      const newImage = {
        id: crypto.randomUUID(),
        src: serviceImages[Math.floor(Math.random() * serviceImages.length)],
        start: getRandomEdge(),
      };
      setActiveImages((prev) => [...prev, newImage]);

      setTimeout(() => {
        setActiveImages((prev) => prev.filter((img) => img.id !== newImage.id));
      }, Math.random() * 2500 + 700);
    };

    const interval = setInterval(() => {
      spawnImage();
    }, Math.random() * 1500 + 700);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="relative min-h-[500px]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <AnimatePresence>
            {activeImages.map((img) => (
              <motion.div
                key={img.id}
                initial={{
                  top: img.start.top,
                  left: img.start.left,
                  opacity: 0,
                  scale: 0.6,
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  top: "50%",
                  left: "50%",
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.2,
                }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                }}
                className="relative w-24 h-24"
              >
                <Image
                  src={img.src}
                  alt="sinking image"
                  fill
                  loading="eager"
                  sizes="96px"
                  className="object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div>
          <div className="absolute inset-0" />

          <div className="absolute inset-0 z-10 flex flex-col gap-8 items-center justify-center h-full p-4">
            <h1 className=" text-3xl text-center max-w-[600px] leading-[200%]">
              {serviceCopy} {texts[index]}
            </h1>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[50vh] sm:h-[70vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/showreel.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col gap-8 items-center justify-center h-full text-brand-light p-4">
          <h1 className="lg:text-5xl md:text-4xl text-3xl text-center">
            {homePageContent.closingCTA}
          </h1>
          <p className="lg:text-2xl text-center">
            {homePageContent.subClosingCTA}
          </p>
          <div className="bg-brand-gold p-4 flex items-center gap-2 hover:scale-105 hover:bg-brand-dark transition-all duration-300 cursor-pointer">
            <p>
              Design
              <br />
              with
              <br />
              Epoch
            </p>
            <ArrowRight />
          </div>
        </div>
      </section>
    </>
  );
}
