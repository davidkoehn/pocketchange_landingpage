"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../Hero.module.css";

export default function LPTeam() {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const { top, bottom } = container.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
        controls.start(isVisible ? "visible" : "hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      className={`${styles.container} flex flex-col items-center backdrop-blur-3xl w-full pb-8 text-[#203c4f] -mt-1`}
      ref={containerRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <motion.div className="-mt-16 flex flex-col items-center">
        <div className={`${styles.servicesHeadlineBox}`}>
          <img
            src="/separator.png"
            alt="Separator"
            className={styles.servicesHeadlineBoxSeparator}
          />
          <div className="mx-auto flex flex-col items-start max-w-[1280px]">
            <div className="flex ml-4 mb-4 pt-2 flex-wrap w-full">
              <img
                src="/team.jpg"
                alt="LP Team"
                className={styles.headerServiceIcon}
              />
              <div className="flex flex-col">
                <h3 className={styles.servicesHeadline}>LP Team Contact</h3>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="my-[40px]">
        <motion.div className={`${styles.serviceBoxWhite} mt-[20px] mx-auto w-full max-w-[1280px] p-[40px] bg-[#ffffff5e] rounded-md shadow-md`}>
          <form>
            <div className="mb-[16px]">
              <label htmlFor="name" className="block text-[18px] mb-[4px]">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-[16px] py-[8px] border rounded-md font-normal"
              />
            </div>
            <div className="mb-[16px]">
              <label htmlFor="email" className="block text-[18px] mb-[4px]">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-[16px] py-[8px] border rounded-md font-normal"
              />
            </div>
            <div className="mb-[16px]">
              <label htmlFor="message" className="block text-[18px] mb-[4px]">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-[16px] py-[8px] border rounded-md min-h-[160px] font-normal"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              className={`${styles.ctaButton} text-white py-[8px] px-[16px] rounded-md cursor-pointer`}
            />
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
