import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">

      
      <Image
        src={"/images/image24.jpg"}
        alt="Hero Image"
        width={6144}
        height={5400}
        className="w-full object-cover"
      />

      <div className="absolute top-0 left-0 h-full flex justify-center items-center bg-red-200">
        <h1>
          Welcome to epoch
        </h1>
      </div>
    </section>
  );
}
