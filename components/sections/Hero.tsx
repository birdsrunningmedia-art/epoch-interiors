import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <Image
        src={"/images/image24.jpg"}
        alt="Hero Image"
        width={6144}
        height={5400}
        className="w-full object-cover"
      />
    </div>
  );
}
