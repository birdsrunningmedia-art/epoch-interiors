import React from "react";
import Hero from "@/components/sections/Hero";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <>
      <Hero />

      {/* Subsection */}
      <section>
        <div className="relative">
          <div className="absolute"></div>
          <Image
            src={"/images/image5.jpg"}
            alt={"interior image"}
            width={6000}
            height={4000}
            className="w-full object-cover"
          />
        </div>
        <div className="relative">
          <div className="absolute"></div>
          <Image
            src={"/images/image29.jpg"}
            alt={"interior image"}
            width={6000}
            height={4000}
            className="w-full object-cover"
          />
        </div>
        <div className="relative">
          <div className="absolute"></div>
          <Image
            src={"/images/image12.jpg"}
            alt={"interior image"}
            width={6000}
            height={4000}
            className="w-full object-cover"
          />
        </div>
        <div className="relative">
          <div className="absolute"></div>
          <Image
            src={"/images/image28.jpg"}
            alt={"interior image"}
            width={6000}
            height={4000}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* view more projects button */}
      <div>
        <Link href={"/projects"}>
          <p>View more of our projects</p>
        </Link>
      </div>

      {/* Testimonial section */}
      <section></section>

      {/* Closing CTA section */}
      <section>
        <div>
          <h1>{"If you’ve been waiting for a sign, this is it."}</h1>
          <p>One decision. A completely different space</p>
        </div>
        <div>
          <p>
            Design
            <br />
            with
            <br />
            Epoch
          </p>
          <ArrowRight />
        </div>
      </section>

      {/* Footer next */}
    </>
  );
}
