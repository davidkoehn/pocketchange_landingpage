"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../Hero.module.css";

export default function Team() {
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
      <motion.div
        className="-mt-16 flex flex-col items-center"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className={`${styles.servicesHeadlineBox}`}>
          <img src="/separator.png" alt="Separator" className={styles.servicesHeadlineBoxSeparator} />
          <div className="mx-auto flex flex-col items-start max-w-[1280px]">
            <div className="flex ml-4 mb-4 pt-2 flex-wrap w-full">
              <img src="/team.jpg" alt="Team" className={styles.headerServiceIcon} />
              <div className="flex flex-col">
                <h3 className={styles.servicesHeadline}>Team</h3>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="my-[40px]">

          <p className={styles.bodyText}>
            Co-Founders of Batchery | 200+ startups 4-6% warrant coverage | batchery.com
          </p>
          <p className={styles.bodyText}>
            Co-Founders of IASV | Investor Advisor Seed Ventures | iasv.co
          </p>

        <div className="flex flex-col lg:flex-row gap-8 mt-[20px] max-w-[1280px]">
          <motion.div
            className={`${styles.serviceBoxWhite} flex flex-col`}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex items-center mb-4 flex-wrap">
              <img src="/photo1.jpg" alt="Andre Carothers" className={styles.serviceIcon} />
              <h3 className={styles.serviceTitle}>Andre Carothers</h3>
            </div>
            <p className={styles.serviceDescription}>
              Rockwell Leadership Foundation, Clients & Partners include: Furthur Foundation, Greenpeace, Sierra Club, Community Matters
            </p>
            <div className="mb-[60px]" />
            <a href="https://www.andrecarothers.com/about" target="_blank" rel="noopener noreferrer" className={`${styles.ctaButton} absolute bottom-[30px]`}>
              Learn More
            </a>
          </motion.div>
          <motion.div
            className={`${styles.serviceBoxWhite} flex flex-col`}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="flex items-center mb-4 flex-wrap">
              <img src="/photo2.jpg" alt="David Koehn" className={styles.serviceIcon} />
              <h3 className={styles.serviceTitle}>David Koehn</h3>
            </div>
            <p className={styles.serviceDescription}>
              Saba, Oracle, D2L, Udemy
            </p>
            <div className="mb-[60px]" />
            <a href="https://david-koehn.com/" target="_blank" rel="noopener noreferrer" className={`${styles.ctaButton} absolute bottom-[30px]`}>
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
