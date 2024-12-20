import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { motion, useAnimation } from "framer-motion";

export default function JoinUs() {
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
      id="join-us"
      className={`${styles.container} flex flex-col items-center mt-0 text-white pb-[64px] bg-white`}
      ref={containerRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div id="join-us-section-trigger" className="h-0" />
      <motion.div
        className="-mt-16"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className={styles.servicesHeadlineBox}>
          <img
            src="/separator.png"
            alt="Separator"
            className={styles.servicesHeadlineBoxSeparator}
          />
          <div className="mx-auto flex flex-col items-start max-w-[1280px]">
            <div className="flex ml-4 mb-4 pt-2 flex-wrap">
              <img
                src="/join-us.jpg"
                alt="Join Us"
                className={styles.headerServiceIcon}
              />
              <div>
                <h3 className={styles.servicesHeadline}>Join Us</h3>
                <h4 className={styles.servicesSubheadline}>
                  Join Us in Transforming Communities
                </h4>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <br />
      <div className="px-[24px]">
        <motion.div
          className={styles.serviceBoxWhite}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className={styles.serviceDescription}>
            Pocket Ventures invites philanthropic family offices, high-net-worth
            individuals, and corporate foundations to partner in driving social
            impact and financial returns. By investing in Pocket Ventures'
            impact fund, you can support innovative solutions that empower
            communities to become self-sufficient, sustainable, and equitable.
          </div>
        </motion.div>
        <motion.div
          className={styles.servicesContainer}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex flex-row gap-8 mx-auto justify-center mb-8">
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              <motion.div className="flex items-center justify-center hover:scale-105 transition-transform">
                <img
                  src="/telegram.png"
                  alt="Telegram"
                  className="w-16 h-16 shadow-md rounded-full"
                />
              </motion.div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <motion.div className="flex items-center justify-center hover:scale-105 transition-transform">
                <img
                  src="/x.png"
                  alt="X"
                  className="w-16 h-16 shadow-md rounded-full"
                />
              </motion.div>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <motion.div className="flex items-center justify-center hover:scale-105 transition-transform">
                <img
                  src="/discord.svg"
                  alt="Discord"
                  className="w-16 h-16 shadow-md rounded-full"
                />
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
