"use client";

import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { smoothScrollToElement } from "../utils/scroll";

export default function Hero() {
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
      id="home"
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
        className={`flex max-w-[1280px] xl:flex-row flex-col gap-[40px]`}
      >
        <motion.div
          className={styles.textContainer}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          style={{ marginBottom: "80px" }}
        >
          <h1 className={styles.headline}>POCKET VENTURES</h1>
          <h2 className={styles.subheadline}>Welcome to PocketChange</h2>
          <motion.div
            className={styles.serviceBox}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className={styles.bodyText}>
              We leverage emerging technologies to provide essential services like decentralized energy, sustainable agriculture, community-owned finance, and independent information networks.
            </p>
            <p className={styles.bodyText}>
              Our investments focus on creating long-term value across economic, social, cultural, and environmental capitals, offering strong financial returns and genuine community impact. With a team experienced in edtech, angel investing, and incubator management, we support high-potential startups in scaling their businesses.
            </p>
            <p className={styles.bodyText}>
              In today's challenging political and economic climate, the need for resilient, localized systems is urgent. By investing in pocket communities, we aim to restore autonomy and resilience to local economies, ensuring sustainable and inclusive growth.
            </p>
            <p className={styles.bodyText}>
              Join us in fostering a new economic paradigm that prioritizes community resilience and democratic accountability. Together, we can build a future where communities thrive independently and sustainably.
            </p>
            <Link href="/lp-access" className={`${styles.ctaButton}`}>
              Invest Now
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="items-center justify-center xl:w-1/2 w-full xl:mb-0 mb-8 mt-16 hidden xl:flex"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <motion.img
            src="/logo.jpg"
            alt="Logo"
            className={`${styles.logo}`}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
