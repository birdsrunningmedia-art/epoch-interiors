import React from "react";
import Hero from "@/components/sections/Hero";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/project";
import { homePageContent } from "@/data/homePage";
import Testimonials from "@/components/Testimonials";

export default function Page() {
  return (
    <>
      <Hero />

      {/* Subsection */}
      <section className="relative">
        {projects.slice(0, 4).map((project, index) => (
          <Link key={index} href={`/projects/${project.id}`}>
            <div className="relative h-[400px] group overflow-hidden cursor-pointer">
              <Image
                src={project.projectImageUrls[0]}
                alt={project.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-brand-dark opacity-20 group-hover:opacity-50"></div>
              <div className="absolute inset-0 text-brand-light flex flex-col justify-end p-4 pb-20 gap-2">
                <h2 className="text-xl underline">
                  {homePageContent.subHeadingText[index].mainText}
                </h2>
                <p>{homePageContent.subHeadingText[index].smallerText}</p>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:3px_3px] pointer-events-none"></div>
            </div>
          </Link>
        ))}
      </section>

      {/* view more projects button */}
      <div className="flex justify-end p-4 text-xl underline">
        <Link href={"/projects"}>
          <h2>View more of our projects</h2>
        </Link>
      </div>

      {/* Testimonial section */}
      <section className="mx-4 flex flex-col gap-4 my-36">
        <h2 className="text-xl underline">Reviews from our clients</h2>
        <Testimonials />
      </section>

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

      {/* Footer next */}
    </>
  );
}
