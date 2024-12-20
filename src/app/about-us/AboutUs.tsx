"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../Hero.module.css";

export default function AboutUs() {
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
        <h1 className={`${styles.headline} mt-[80px]`}>About Us</h1>
        <p className={styles.bodyText}>
          We are a response to measuring corporate success as profit at all
          costs and to the anti-woke agenda funds aimed at degrading social
          liberties.
        </p>
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div
            className={`${styles.serviceBoxWhite} flex flex-col`}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex items-center mb-4 flex-wrap">
              <img
                src="/mission.jpg"
                alt="Mission"
                className={styles.serviceIcon}
              />
              <h3 className={styles.serviceTitle}>Mission</h3>
            </div>
            <p className={styles.serviceDescription}>
              Pocket Ventures' mission is to transform impact investing into a
              tool for community empowerment, helping communities become
              self-sufficient and resilient.
            </p>
          </motion.div>
          <motion.div
            className={`${styles.serviceBoxWhite} flex flex-col`}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex items-center mb-4 flex-wrap">
              <img
                src="/vision.jpg"
                alt="Vision"
                className={styles.serviceIcon}
              />
              <h3 className={styles.serviceTitle}>Vision</h3>
            </div>
            <p className={styles.serviceDescription}>
              Pocket Ventures drives social change through innovative solutions
              for communities.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
