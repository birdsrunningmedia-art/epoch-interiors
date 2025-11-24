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
      <section>
        <Image
          src={project.projectImageUrls[0]}
          alt={project.title}
          width={4000}
          height={3000}
          className="w-full object-cover"
        />

        <div>
          <h2>{project.title}</h2>
          <p>{project.projectDescription}</p>
        </div>
        <div>
          {project.projectImageUrls.splice(1).map((url, index) => (
            <Image
              key={index}
              src={url}
              alt={project.title}
              width={4000}
              height={3000}
              className="w-full object-cover"
            />
          ))}
        </div>
      </section>
    );
  }
}
