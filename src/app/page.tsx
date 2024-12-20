"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "./Hero";
import KeyHighlights from "./KeyHighlights";
import JoinUs from "./JoinUs";
import Footer from "../components/Footer";

const backgrounds = [
  { id: "background1-trigger", background: "background1.jpg" },
];

export default function Home() {
  const [isSafari, setIsSafari] = useState(false);
  const [currentBackground, setCurrentBackground] = useState("background1.jpg");
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const isSafariBrowser = navigator.vendor?.indexOf("Apple") > -1;
    setIsSafari(isSafariBrowser);

    const preloadImages = async () => {
      const promises = backgrounds.map(({ background }) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image() as HTMLImageElement;
          img.src = `/${background}`;
          img.onload = () => resolve();
          img.onerror = (event: string | Event) => reject(event);
        });
      });
      await Promise.all(promises);
      setImagesLoaded(true);
    };

    preloadImages();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = backgrounds.find((s) => s.id === entry.target.id);
            if (section) {
              setCurrentBackground(section.background);
            }
          }
        });
      },
      { threshold: 0 }
    );

    backgrounds.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    const handleScroll = () => {
      backgrounds.forEach(({ id, background }) => {
        const section = document.getElementById(id);
        if (section && isInViewport(section)) {
          setCurrentBackground(background);
        }
      });
    };

    const isInViewport = (element: any) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      backgrounds.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isSafari ? (
        <style jsx global>
          {`
            body:after {
              content: "";
              position: fixed;
              top: 0;
              height: 100vh; /* fix for mobile browser address bar appearing/disappearing */
              left: 0;
              right: 0;
              z-index: -1;
              background: url("/${currentBackground}") no-repeat bottom right
                fixed;
              background-size: cover;
              opacity: 1;
              transition: opacity 0.5s;
            }
          `}
        </style>
      ) : (
        <style jsx global>
          {`
            body {
              background-image: url("/${currentBackground}");
              background-size: cover;
              background-repeat: no-repeat;
              background-attachment: fixed;
              background-position: bottom right;
              transition: background-image 0.5s;
            }
          `}
        </style>
      )}
      <Header />
      <main
        className="flex min-h-screen flex-col items-center justify-between pt-24 overflow-hidden"
        id="home"
      >
        <Hero />
        <KeyHighlights />
        <JoinUs />
      </main>
      <Footer />
    </>
  );
}
