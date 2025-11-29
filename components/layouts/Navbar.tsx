"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Card } from "../ui/card";
import { projects } from "@/data/project";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hoverProject, setHoverProject] = useState(false);
  const [viewAbout, setViewAbout] = useState(false);

  // To do to add AnimatePresence on the about modal

  const pathname = usePathname();
  const router = useRouter();

  // Disable scroll when modal is open
  useEffect(() => {
    if (open || hoverProject || viewAbout) {
      document.body.style.overflow = "hidden"; // lock scroll
    } else {
      document.body.style.overflow = "auto"; // unlock scroll
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open, hoverProject, viewAbout]);

  // Auto-close if screen exceeds mobile (>= 640px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {(open || hoverProject) && (
        <Card
          className="fixed top-0 left-0 bg-brand-dark opacity-65 h-screen w-full z-10 rounded-none"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
        ></Card>
      )}

      {viewAbout && (
        <div className="fixed top-0 left-0 bg-brand-light bg-opacity-95 min-h-screen w-full z-50 flex justify-center items-center flex-col gap-4">
          <div className="flex w-full justify-end px-4 max-w-[600px]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
                setHoverProject(false);
                setViewAbout(false);
              }}
              className="bg-brand-dark hover:bg-brand-gold hover:scale-105 transition-all duration-300 text-brand-light p-2 px-4"
            >
              CLOSE ABOUT
            </button>
          </div>
          <div className="grid grid-cols-1 md:gird md:grid-cols-2 max-w-[600px] gap-4">
            {/* About Image */}
            <div className="relative h-[300px] md:h-[350px] w-full">
              <Image
                src={"/images/revolution.jpg"}
                alt="about pic"
                fill
                className="object-center object-cover "
              />
            </div>
            {/* About text */}
            <div className="flex flex-col justify-center px-4 md:px-0 gap-4">
              <h2 className="text-xl underline text-brand-dark">
                About Epoch Interiors
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                sequi commodi, architecto iusto quam quaerat quod doloremque
                ratione iste odio? Molestiae odio voluptate quasi aliquid
                quisquam harum dignissimos cum maiores.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Entire nav */}
      <nav
        onMouseLeave={() => setHoverProject(false)}
        className="fixed top-3 md:top-12 left-1/2 -translate-x-1/2 z-20  w-[95%] max-w-[600px]"
      >
        <div className="flex items-center sm:gap-16 justify-between nav-text p-2 rounded-none bg-brand-light border border-black/10 shadow-lg backdrop-blur-sm">
          <Link
            href={"/"}
            onClick={() => {
              setOpen(false);
            }}
          >
            <Image
              src={"/images/logo.png"}
              alt={"logo"}
              loading="eager"
              height={61}
              width={161}
              className="sm:w-[100px] w-[80px]"
            />
          </Link>

          <p
            onClick={(e) => {
              e.stopPropagation();
              setOpen(!open);
            }}
            className="sm:hidden cursor-pointer"
          >
            {open ? "CLOSE" : "MENU"}
          </p>

          <div className="sm:flex gap-4 hidden">
            <Link onMouseEnter={() => setHoverProject(true)} href={"/projects"}>
              <p
                className={
                  pathname.startsWith("/projects")
                    ? "underline hover:opacity-55 hover:scale-95 transition-all duration-300"
                    : "hover:opacity-55 hover:scale-95 transition-all duration-300"
                }
              >
                PROJECTS
              </p>
            </Link>
            <Link href={"/our-services"}>
              <p
                className={
                  pathname.startsWith("/our-services")
                    ? "underline hover:opacity-55 hover:scale-95 transition-all duration-300"
                    : "hover:opacity-55 hover:scale-95 transition-all duration-300"
                }
              >
                SERVICES
              </p>
            </Link>

            <p
              onClick={() => {
                setViewAbout(true);
              }}
              className={
                pathname.startsWith("/about")
                  ? "underline hover:opacity-55 hover:scale-95 transition-all duration-300 cursor-pointer"
                  : "hover:opacity-55 hover:scale-95 transition-all duration-300 cursor-pointer"
              }
            >
              ABOUT
            </p>
          </div>

          <Button
            onClick={() => {
              router.push("/contact");
            }}
            className="nav-text hover:bg-brand-gold rounded-none hover:scale-105 transition-all duration-300"
          >
            Contact us
          </Button>
        </div>

        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
              }}
              className="h-fit px-2 py-4 flex flex-col gap-6 text-2xl border-t-[1px] bg-brand-light border rounded-none border-black/10 backdrop-blur-sm"
            >
              <Link
                href={"/projects"}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <p className="hover:opacity-65 cursor-pointer hover:scale-95 w-fit transition-all duration-300">
                  PROJECTS
                </p>
              </Link>

              <Link
                href={"/our-services"}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <p className="hover:opacity-65 cursor-pointer hover:scale-95 w-fit transition-all duration-300">
                  SERVICES
                </p>
              </Link>

              <p
                onClick={() => {
                  setOpen(false);
                  setViewAbout(true);
                }}
                className="hover:opacity-65 cursor-pointer hover:scale-95 w-fit transition-all duration-300"
              >
                ABOUT
              </p>

              <hr />

              {projects && (
                <div
                  onClick={() => {
                    setOpen(false);
                    router.push(`/projects/${projects[3].id}`);
                  }}
                  className="flex items-center gap-4 hover:bg-slate-300/25 p-2 rounded-none cursor-pointer transition-all duration-300"
                >
                  <Image
                    src={projects[3].projectImageUrls[0]}
                    alt={projects[3].title}
                    width={150}
                    height={150}
                    className="rounded-none"
                  />

                  <div className="flex flex-col">
                    <h2 className="text-[14px] text-red-500">Random project</h2>
                    <h2 className="text-[14px]">{projects[3].title}</h2>
                    <p className="text-[10px]">{projects[3].projectSubtext}</p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {hoverProject && (
            <motion.div
              initial={{
                opacity: 0,
                y: -50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
              }}
              className="h-fit px-2 py-2 flex flex-col gap-4 text-xl border-t-[1px] bg-brand-light border border-black/10 backdrop-blur-sm rounded-none"
            >
              <div className="h-fit p-2 flex flex-col gap-8">
                {projects.slice(0, 4).map((project, index) => (
                  <Link key={index} href={`/projects/${project.id}`}>
                    <div
                      className="flex gap-4 items-center hover:opacity-65 hover:scale-95 cursor-pointer transition-all duration-300"
                      onClick={() => {
                        router.push(`/projects/${project.id}`);
                        setHoverProject(false);
                      }}
                    >
                      <p className="">{project.title.toLocaleUpperCase()}</p>
                      <p className="text-[10px] font-thin">
                        {project.projectSubtext.toLocaleUpperCase()}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <hr />
              {projects && (
                <div
                  onClick={() => {
                    setOpen(false);
                    router.push(`/projects/${projects[3].id}`);
                  }}
                  className="flex items-center gap-4 hover:bg-slate-300/25 p-2 rounded-none cursor-pointer transition-all duration-300"
                >
                  <Image
                    src={projects[3].projectImageUrls[0]}
                    alt={projects[3].title}
                    width={150}
                    height={150}
                    className="rounded-none"
                  />

                  <div className="flex flex-col">
                    <h2 className="text-[14px] text-red-500">Random project</h2>
                    <h2 className="text-[14px]">{projects[3].title}</h2>
                    <p className="text-[10px]">{projects[3].projectSubtext}</p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
