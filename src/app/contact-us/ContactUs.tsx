"use client";

import React, { useEffect, useRef } from "react";
import styles from "../Hero.module.css";
import { motion, useAnimation } from "framer-motion";

export default function ContactUs() {
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
      <div className={`flex flex-col max-w-[1280px] mx-auto gap-[40px]`}>
        <motion.div
          className={styles.textContainer}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          style={{ marginBottom: "80px" }}
        >
          <h1 className={styles.headline}>Contact Us</h1>
          <motion.div
            className={styles.serviceBox}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className={styles.bodyText}>
              <em>"While there was tremendous wealth created during the period of neoliberal globalization, there was also great inequality created—really, in most countries." - <strong>Homecoming: The Path to Prosperity in a Post Global World | Rana Foroohar</strong></em>
            </p>
            <p className={styles.bodyText}>We are in a post-global world where job displacement and hollowed-out community have not been repaired. Right-minded policy with no local regard has led us to the myth of cheap, the failure of positive benefit to local humans from climate change policy, and centralized economics that outsourced the wealth of local communities.</p>
            <p className={styles.bodyText}>Here, at Pocket, we fund startups that can focus on repair of that damage and foresee as Marjorie Kelly suggests aiming to "Focus on solutions people can see and feel in their communities".</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
