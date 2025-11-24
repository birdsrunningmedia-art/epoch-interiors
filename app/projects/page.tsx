import React from "react";
import { projects } from "@/data/project";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      {projects.map((project, index) => (
        <Link key={index} href={`/projects/${project.id}`}>
          <div className="relative">
            <div>
              <h2>{project.title}</h2>
              <p>{project.projectSubtext}</p>
            </div>
            <Image
              src={project.projectImageUrls[0]}
              alt={project.title}
              width={4000}
              height={3000}
              className="w-full object-cover"
            />
          </div>
        </Link>
      ))}
    </section>
  );
}
