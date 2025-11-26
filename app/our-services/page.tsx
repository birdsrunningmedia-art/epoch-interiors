import React from "react";
import { ArrowRight } from "lucide-react";
import { homePageContent } from "@/data/homePage";

export default function Services() {
  return (
    <section className="min-h-screen">
      <div className="relative w-full h-[50vh] sm:h-[70vh] overflow-hidden">
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
      </div>
    </section>
  );
}
