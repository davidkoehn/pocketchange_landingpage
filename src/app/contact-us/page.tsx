"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactUs from "./ContactUs";
import GetInTouch from "./GetInTouch";

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between pt-24 overflow-hidden">
        <ContactUs />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
}
