"use client";
import React, { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/project";
import { TProject } from "@/types/types";
import MoreProjectsSlider from "./MoreProjectsSlider";
import Link from "next/link";

export default function Project({ id }: { id: string }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const closeModal = () => setSelectedImage(null);

  const project: TProject | undefined = projects.find(
    (project) => project.id === id
  );
  if (project) {
    return (
      <>
        <section className="flex flex-col gap-32 ">
          <div className="group relative h-[400px] w-full cursor-pointer overflow-hidden">
            <Image
              fill
              src={project.projectImageUrls[0]}
              alt={project.title}
              className="object-cover object-center group-hover:scale-110 transition-all duration-300"
              onClick={() => setSelectedImage(project.projectImageUrls[0])}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:3px_3px] pointer-events-none"></div>
          </div>

          <div className="flex flex-col gap-8 px-4">
            <h2 className="text-2xl md:text-4xl underline">{project.title}</h2>
            <p className="leading-[200%] max-w-4xl">
              {project.projectDescription}
            </p>
          </div>

          <div className="min-h-[800px] cursor-pointer">
            {project.projectImageUrls.slice(1).map((url, index) => (
              <div
                key={index}
                className="group relative h-[400px] w-full overflow-hidden"
              >
                <Image
                  fill
                  src={url}
                  alt={project.title}
                  className="object-cover object-center group-hover:scale-110 transition-all duration-300"
                  onClick={() =>
                    setSelectedImage(project.projectImageUrls.slice(1)[index])
                  }
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:3px_3px] pointer-events-none"></div>
              </div>
            ))}
          </div>
          <div className="p-4">
            <div className="flex py-4 text-xl underline text-brand-dark">
              <Link href={"/projects"}>
                <h2>View more of our projects</h2>
              </Link>
            </div>
            <MoreProjectsSlider id={id} />
          </div>
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
}
