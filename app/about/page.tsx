"use client";
import React, { useState } from "react";
import Image from "next/image";
import { aboutCopy } from "@/data/aboutCopy";
import { ArrowRight } from "lucide-react";
import { homePageContent } from "@/data/homePage";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeModal = () => setSelectedImage(null);
  return (
    <>
      <section className="flex flex-col gap-16">
        <div className="group relative h-[400px] w-full cursor-pointer overflow-hidden">
          <Image
            fill
            src={aboutCopy.image1}
            alt="The founder's pic"
            className="object-cover object-center group-hover:scale-110 transition-all duration-300"
            onClick={() => setSelectedImage(aboutCopy.image1)}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:3px_3px] pointer-events-none"></div>
        </div>

        <div className="flex flex-col gap-4 px-4">
          {/* Main Heading (Large and impactful) */}
          <h2 className="text-2xl underline text-brand-dark">
            {aboutCopy.heading}
          </h2>

          {/* Tagline/Opener (Slightly smaller, heavy emphasis) */}
          <p className="font-extralight italic text-brand-gold">
            {aboutCopy.tagline}
          </p>

          {/* Introduction (First paragraph, usually larger font) */}
          <p className="text-lg leading-[200%] max-w-4xl text-brand-dark">
            {aboutCopy.introduction}
          </p>
        </div>

        <div className="group relative h-[400px] w-full cursor-pointer overflow-hidden">
          <Image
            fill
            src={aboutCopy.image2}
            alt="The founder's pic"
            className="object-cover object-center group-hover:scale-110 transition-all duration-300"
            onClick={() => setSelectedImage(aboutCopy.image2)}
          />
        </div>

        {/* --- Philosophy Section --- */}
        <div className="flex flex-col gap-4 px-4">
          <h3 className="md:text-2xl text-xl underline">
            {aboutCopy.philosophyTitle}
          </h3>
          <p className="leading-[200%] max-w-4xl">{aboutCopy.philosophyBody}</p>
        </div>

        <div className="group relative h-[400px] w-full cursor-pointer overflow-hidden">
          <Image
            fill
            src={aboutCopy.image3}
            alt="The founder's pic"
            className="object-cover object-center group-hover:scale-110 transition-all duration-300"
            onClick={() => setSelectedImage(aboutCopy.image3)}
          />
        </div>

        {/* --- Transformation Section --- */}
        <div className="flex flex-col gap-4 px-4">
          <h3 className=" md:text-2xl text-xl underline">
            {aboutCopy.transformationTitle}
          </h3>
          <p className="leading-[200%] max-w-4xl">
            {aboutCopy.transformationBody}
          </p>
        </div>

        {/* Closing CTA section */}
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
              {homePageContent.closingCTA} again.
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
      </section>

      {selectedImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center cursor-pointer"
        >
          {/* prevent closing when clicking inside modal content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full px-4"
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-50 bg-white/30 hover:bg-white/60 text-white text-xl rounded-full w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>

            <div className="relative w-full aspect-[4/5] max-h-[90vh] m-auto rounded-lg overflow-hidden">
              <Image
                src={selectedImage}
                alt="Selected design"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
