import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { motion, useAnimation } from "framer-motion";
import { smoothScrollToElement } from "../utils/scroll";

export default function KeyHighlights() {
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
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const highlights = [
    {
      title: (
        <>
          Concessionary
          <br />
          Funding
        </>
      ),
      description:
        "LPs support Impact using concessional funding models and share Pocket Ventures' definition of return.",
      image: "/concessionary-funding.jpg",
    },
    {
      title: (
        <>
          Linking America
          <br />
          and the World
        </>
      ),
      description:
        "Pocket Ventures is first looking here in the US, but with an eye to the world. Here and abroad, communities face mounting pressures from social unrest, economic upheaval, and environmental crises. These challenges strain local resources and erode community resilience. We seek innovations that work and scale here and everywhere because the refugee crisis, like many challenges, is not a US-only concern.",
      image: "/linking-america.jpg",
    },
    {
      title: (
        <>
          Community
          <br />
          Capitals
          <br />
          Framework
        </>
      ),
      description:
        "The Community Capitals Framework (CCF) is a model used to evaluate and enhance the various forms of capital that contribute to the overall health and resilience of a community. It identifies seven types of capital that are essential for sustainable community development.",
      image: "/community-capitals.jpg",
    },
  ];

  return (
    <motion.div
      id="key-highlights"
      className={`${styles.container} flex flex-col items-center max-w-[1280px] mx-auto text-white mb-[64px]`}
      ref={containerRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div id="key-highlights-section-trigger" className="h-0" />
      <motion.div
        className="-mt-16"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className={`${styles.servicesHeadlineBox}`}>
          <img
            src="/separator.png"
            alt="Separator"
            className={styles.servicesHeadlineBoxSeparator}
          />
          <div className="mx-auto flex flex-col items-start max-w-[1280px]">
            <div className="flex ml-4 mb-4 pt-2 flex-wrap">
              <img
                src="/features.jpg"
                alt="Features"
                className={styles.headerServiceIcon}
              />
              <div>
                <h3 className={styles.servicesHeadline}>Key Highlights</h3>
                <h4 className={styles.servicesSubheadline}>
                  Discover the cornerstones of Pocket Ventures' mission and vision.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="">
        <motion.div
          className={`${styles.servicesContainer} flex flex-col`}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex flex-col xl:flex-row gap-8 pr-[48px] xl:px-[0px]">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className={`${styles.serviceBoxWhite} flex flex-col`}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex items-center mb-4 flex-wrap">
                  <img
                    src={highlight.image}
                    alt=""
                    className={styles.serviceIcon}
                  />
                  <h5 className={`${styles.serviceTitle}`}>{highlight.title}</h5>
                </div>
                <p className={`${styles.serviceDescription}`}>
                  {highlight.description}
                </p>
                <div className="mb-[60px]" />
                <a
                  className={`${styles.ctaButton} absolute bottom-[30px]`}
                  href="/lp-access"
                >
                  Invest Now
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
