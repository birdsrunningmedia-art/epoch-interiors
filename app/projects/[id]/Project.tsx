import React from "react";
import Image from "next/image";
import { projects } from "@/data/project";
import { TProject } from "@/types/types";

export default function Project({ id }: { id: string }) {
  const project: TProject | undefined = projects.find(
    (project) => project.id === id
  );
  if (project) {
    return (
      <section className="flex flex-col gap-32 ">
        <div className="relative h-[400px]">
          <Image
            fill
            src={project.projectImageUrls[0]}
            alt={project.title}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:3px_3px] pointer-events-none"></div>
        </div>

        <div className="flex flex-col gap-4 px-4">
          <h2 className="text-2xl md:text-4xl underline">{project.title}</h2>
          <p className="leading-[200%]">{project.projectDescription}</p>
        </div>

        <div className="min-h-[800px]">
          {project.projectImageUrls.slice(1).map((url, index) => (
            <div key={index} className="relative h-[400px]">
              <Image
                fill
                src={url}
                alt={project.title}
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:3px_3px] pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
