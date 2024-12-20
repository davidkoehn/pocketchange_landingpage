"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../Hero.module.css";

export default function LPAccess() {
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
      className={`${styles.container} flex flex-col items-center backdrop-blur-3xl w-full pb-8 text-[#203c4f] -mt-24 mb-[16px]`}
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
        <h1 className={`${styles.headline} mt-[80px]`}>LP Access Overview</h1>
        <p className={`${styles.bodyText} -mt-[40px]`}>
          Welcome to where we change the world. Here, we call for funds, intake
          calls for funds, make transparent use of funds, and report on where
          the funds have flowed and their impact.
        </p>
        <h2 className={styles.headline}>KPIs & Performance</h2>
        <img
          src="/returns.jpg"
          alt="KPIs & Performance"
          className={`${styles.serviceBoxWhite} w-full h-auto -mt-[40px]`}
          style={{ padding: 0 }}
        />
        <h2 className={`${styles.headline} mt-[40px]`}>
          How we Communicate<br />the Status of the Portfolio
        </h2>
        <img
          src="/measures.jpg"
          alt="How we Communicate the Status of the Portfolio"
          className="w-full h-auto"
        />
      </div>
      <h1 className={`${styles.headline}`}>Coming Soon...</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </motion.div>
  );
}
