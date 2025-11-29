"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/data/footerLinks";
import { AnimatePresence, motion } from "framer-motion";

export default function Footer() {
  const [usefulLink, setUsefulLink] = useState(false);
  const [social, setSocial] = useState(false);

  return (
    <>
      {/* footer for screens bigger than desktop */}
      <>
        <footer className="hidden h-fit sm:flex justify-center lg:gap-16 sm:gap-4 items-start py-20 sm:mx-4 md:px-8">
          <div className="flex gap-16">
            {/* just text */}
            <div className="hidden lg:flex flex-col gap-4 max-w-90 justify-center">
              <p className="lg:block font-light">
                Finally, exhale and rejoice! Your space, absolute bliss, is now
                ready to hold you.
              </p>
            </div>

            {/* useful links */}
            <div className="flex-1 flex flex-col gap-4">
              <h2 className="font-bold whitespace-nowrap">Useful Links</h2>

              <div className="font-light flex flex-col gap-2">
                <Link href={footerLinks.services}>
                  <p className="hover:opacity-65 hover:scale-95">Services</p>
                </Link>
                <Link href={footerLinks.contact}>
                  <p className="hover:opacity-65 hover:scale-95">Contact</p>
                </Link>
                <Link href={footerLinks.projects}>
                  <p className="hover:opacity-65 hover:scale-95">Projects</p>
                </Link>
              </div>
            </div>

            {/* socials */}
            <div className="flex-1 flex flex-col gap-4">
              <h2 className="font-bold whitespace-nowrap">Socials</h2>
              <div className="font-light flex flex-col gap-2">
                <Link href={footerLinks.instagram}>
                  <p className="hover:opacity-65 hover:scale-95">Instagram</p>
                </Link>
                <Link href={footerLinks.facebook}>
                  <p className="hover:opacity-65 hover:scale-95">Facebook</p>
                </Link>
                <Link href={footerLinks.twitter}>
                  <p className="hover:opacity-65 hover:scale-95">Twitter</p>
                </Link>
                <Link href={footerLinks.subStack}>
                  <p className="hover:opacity-65 hover:scale-95">Substack</p>
                </Link>
                <Link href={footerLinks.linkedIn}>
                  <p className="hover:opacity-65 hover:scale-95">LinkedIn</p>
                </Link>
              </div>
            </div>

            {/* Newsletter section */}
            <div className="flex-1 md:min-w-96 flex flex-col justify-between">
              <div className="px-4">
                <h2 className="font-bold whitespace-nowrap">Newsletter</h2>
                <form className="w-full bg-blue-700 flex relative">
                  <input
                    className="flex-1 h-12 focus:ring-0 focus:outline-none placeholder:opacity-100 placeholder:font-semibold placeholder:text-brand-dark"
                    placeholder="Subscribe?"
                  />
                  <button className="absolute right-0 top-0 h-full underline text-brand-dark font-semibold">
                    Sign up
                  </button>
                </form>
                <hr className=" border-brand-dark" />
              </div>
              <div className="pb-4 px-4">
                <p className="font-thin opacity-60 whitespace-nowrap">
                  © EPOCH INTERIORS, 2025
                </p>
              </div>
            </div>
          </div>
          {/* logo */}
        </footer>
        <div className="hidden w-full pb-8 sm:flex justify-center items-center px-8">
          <Image
            src={"/images/logo.png"}
            alt="epoch logo"
            width={161 * 5}
            loading="eager"
            height={61 * 5}
            className=""
          />
        </div>
      </>

      {/* footer for mobile sites */}
      <footer className="sm:hidden flex flex-col w-fit py-4 gap-8 text-brand-dark">
        <div className=" flex flex-col  gap-4">
          <Image
            src={"/images/logo.png"}
            alt="epoch logo"
            width={161}
            loading="eager"
            height={61}
            className="px-4"
          />
          <p className=" font-thin w-[70%] px-4">
            Finally, exhale and rejoice! Your space, absolute bliss, is now
            ready to hold you.
          </p>
          <hr />
        </div>

        {/* the drop-down lots */}
        <div className="flex flex-col gap-8">
          {/* Useful links */}
          <div className="">
            <p
              className="cursor-pointer font-bold px-4"
              onClick={() => {
                setUsefulLink(!usefulLink);
              }}
            >
              Useful Links
            </p>
            <AnimatePresence mode="wait">
              {usefulLink && (
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
                  className="flex flex-col pt-4 px-4 gap-6"
                >
                  <Link href={footerLinks.services}>
                    <p>Services</p>
                  </Link>
                  <Link href={footerLinks.contact}>
                    <p>Contact Us</p>
                  </Link>
                  <Link href={footerLinks.projects}>Projects</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <hr />

          {/* Socials */}
          <div className="">
            <p
              className="cursor-pointer font-bold px-4"
              onClick={() => {
                setSocial(!social);
              }}
            >
              Socials
            </p>
            <AnimatePresence mode="wait">
              {social && (
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
                  className="flex flex-col pt-4 px-4 gap-6"
                >
                  <Link href={footerLinks.instagram}>
                    <p className="">Instagram</p>
                  </Link>
                  <Link href={footerLinks.facebook}>
                    <p>Facebook</p>
                  </Link>
                  <Link href={footerLinks.twitter}>
                    <p>Twitter</p>
                  </Link>
                  <Link href={footerLinks.subStack}>Substack</Link>
                  <Link href={footerLinks.linkedIn}>LinkedIn</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <hr />

          <div className="px-4">
            <h2 className="font-bold">Newsletter</h2>
            <form className="w-full bg-blue-700 flex relative">
              <input
                className="flex-1 h-12 focus:ring-0 focus:outline-none placeholder:opacity-100 placeholder:font-semibold placeholder:text-brand-dark"
                placeholder="Subscribe?"
              />
              <button className="absolute right-0 top-0 h-full underline text-brand-dark font-semibold">
                Sign up
              </button>
            </form>
            <hr className=" border-brand-dark" />
          </div>

          <hr />
        </div>
      </footer>
      <div className="pb-4 px-4 sm:hidden">
        <p className="font-thin opacity-60">© EPOCH INTERIORS, 2025</p>
      </div>
    </>
  );
}
