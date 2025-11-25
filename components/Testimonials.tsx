"use client";
import React, { useState, useEffect, useRef, Ref } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
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
        console.log("next");
        if (count >= 0 && count < length - perScreen) {
          setCount((prev) => prev + 1);
        }
        break;

      case "prev":
        console.log("prev");
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
        {testimonials.map((testimonial, index) => (
          <Card className="w-fit flex flex-col" key={index}>
            <CardHeader>
              <Avatar>
                <AvatarImage src={"https://github.com/shadcn.png"} />
                <AvatarFallback>
                  {testimonial.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent className="flex flex-col gap-6 min-w-64">
              <h3 className="underline">
                {`${testimonial.name.split(" ")[0]} from ${
                  testimonial.company
                }`}
              </h3>
              <p>{testimonial.message}</p>
            </CardContent>
          </Card>
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
