"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutUs from "./AboutUs";
import Team from "./Team";

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between pt-24 overflow-hidden">
        <AboutUs />
        <Team />
      </main>
      <Footer />
    </>
  );
}
