"use client";
import React, { useState, useEffect, useRef, Ref } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { projects } from "@/data/project";
import Image from "next/image";
import Link from "next/link";

export default function MoreProjectsSlider({ id }: { id: string }) {
  const [length, setLength] = useState(0);
  const [count, setCount] = useState(0);
  const carouselRef: Ref<HTMLDivElement> | null = useRef(null);

  useEffect(() => {
    if (carouselRef.current != null) {
      const cards = carouselRef.current.children;
      setLength(cards.length);
    }
  }, [carouselRef]);

  const scrollToCard = (index: number) => {
    const el = carouselRef.current;
    if (!el) return;

    const cards = el.children;
    const card = cards[index] as HTMLElement;
    if (!card) return;

    el.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToCard(count);
  }, [count]);

  const scrollCarousel = (action: string, perScreen: number) => {
    switch (action.toLocaleLowerCase()) {
      case "next":
        if (count >= 0 && count < length - perScreen) {
          setCount((prev) => prev + 1);
        }
        break;

      case "prev":
        if (count > 0) {
          setCount((prev) => prev - 1);
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className="flex flex-col h-fit gap-4">
      <div
        ref={carouselRef}
        className="
          flex gap-4 
          overflow-x-auto 
          snap-x snap-mandatory 
          scroll-smooth 
          [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
        "
      >
        {/* Cards */}
        {projects
          .filter((project) => project.id !== id)
          .map((project, index) => (
            <Link key={index} href={`/projects/${project.id}`}>
              <div className="relative h-72 w-60 group overflow-hidden cursor-pointer">
                <Image
                  fill
                  sizes="240px"
                  src={project.projectImageUrls[0]}
                  alt={project.title}
                  className="object-cover object-center group-hover:scale-110 transition-all duration-300 "
                />
                {/* Optional overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-brand-dark/0 transition-all duration-300 " />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:3px_3px] pointer-events-none"></div>

                <div className="relative z-10 flex flex-col pt-32 px-4 h-full text-brand-light group-hover:opacity-0">
                  <h1 className="text-[16px]">{project.title}</h1>
                  <p className="text-[10px]">{project.projectSubtext}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>

      <div className="flex justify-between gap-2">
        <ArrowLeft
          onClick={() => {
            scrollCarousel("prev", 4);
          }}
          size={38}
          className="text-brand-dark hover:scale-110 transition-all duration-300 cursor-pointer"
        />
        <ArrowRight
          onClick={() => {
            scrollCarousel("next", 4);
          }}
          size={38}
          className="text-brand-dark hover:scale-110 transition-all duration-300 cursor-pointer"
        />
      </div>
    </div>
  );
}
