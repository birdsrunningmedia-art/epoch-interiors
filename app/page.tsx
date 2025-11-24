import React from "react";
import Hero from "@/components/sections/Hero";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/project";
import { homePageContent } from "@/data/homePage";

export default function Page() {
  return (
    <>
      <Hero />

      {/* Subsection */}
      <section className="relative">
        {projects.slice(0, 4).map((project, index) => (
          <div key={index} className="relative h-[450px]">
            <Image
              src={project.projectImageUrls[0]}
              alt={project.title}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-brand-dark opacity-20">
            </div>
            <div className="absolute inset-0 text-brand-light flex flex-col justify-end p-2 gap-2">
              <h2 className="text-xl underline">{homePageContent.subHeadingText[index].mainText}</h2>
              <p>{homePageContent.subHeadingText[index].smallerText}</p>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:3px_3px] pointer-events-none"></div>
          </div>
        ))}
      </section>

      {/* view more projects button */}
      <div className="flex justify-end p-4 text-xl underline">
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
