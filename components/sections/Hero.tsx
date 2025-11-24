import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[450px] md:h-[600px]">
      {/* Background Image */}
      <Image
        src="/images/image20.jpg"
        alt="Hero Image"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Glass overlay */}
      <div className="absolute top-32 left-0 h-[60%] md:h-[70%] w-full flex justify-center items-center backdrop-blur-[5px] border border-white/10 shadow-lg p-4 hover:bg-transparent">
        <h1 className="text-white lg:text-6xl text-2xl md:text-4xl text-center">
          Where Your Home Finally Feels Like You
        </h1>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:3px_3px] pointer-events-none"></div>
    </section>
  );
}
