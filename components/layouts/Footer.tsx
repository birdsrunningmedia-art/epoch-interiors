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
      <footer className="hidden min-h-96 sm:flex justify-center items-center">
        <p>Footer section for desktop coming soon 🙂😊😁</p>
      </footer>
      <footer className="sm:hidden flex flex-col w-fit py-4 gap-8 text-brand-dark">
        <div className=" flex flex-col  gap-4">
          <Image
            src={"/images/logo.png"}
            alt="epoch logo"
            width={161}
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
                  <Link href={footerLinks.about}>
                    <p>About Us</p>
                  </Link>
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
