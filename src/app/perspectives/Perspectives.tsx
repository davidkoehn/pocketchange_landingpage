"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../Hero.module.css";

export default function Perspectives() {
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
      className={`${styles.container} flex flex-col items-center backdrop-blur-3xl w-full pb-8 text-[#203c4f] -mt-24`}
      style={{
        backgroundColor: "white",
        backgroundImage: "url(/background-decoration.png)",
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right",
      }}
      ref={containerRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div
        className={`flex flex-col max-w-[1280px] mx-auto gap-[40px] mb-[40px]`}
      >
        <h1 className={`${styles.headline} mt-[80px]`}>Perspectives</h1>
        <h2 className={`${styles.headline}`}>Blog</h2>
        <p className={`${styles.bodyText} -mt-[40px]`}>
          Coming Soon...
        </p>

        <div className={`flex flex-col gap-[40px] mt-[20px]`}>
          <h2 className={`${styles.headline}`}>How We Make Decisions</h2>
          <img src="/focus.jpg" alt="How we make decisions" className={`${styles.serviceBoxWhite} w-full h-auto -mt-[40px]`} style={{ padding: 0 }} />
          <h2 className={`${styles.headline}`}>Where We Focus</h2>
          <img src="/key-focus-areas.jpg" alt="Where we focus" className={`${styles.serviceBoxWhite} w-full h-auto -mt-[40px]`} style={{ padding: 0 }} />
        </div>
      </div>
    </motion.div>
  );
}
