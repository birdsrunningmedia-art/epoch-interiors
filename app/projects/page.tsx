import React from "react";
import { projects } from "@/data/project";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="relative">
      {projects.map((project, index) => (
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
              <h2 className="text-xl underline">{project.title}</h2>
              <p>{project.projectSubtext}.</p>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:3px_3px] pointer-events-none"></div>
          </div>
        </Link>
      ))}
    </section>
  );
}
