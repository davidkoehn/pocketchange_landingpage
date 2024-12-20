"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PrivacyPolicy from "./PrivacyPolicy";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between pt-24 overflow-hidden">
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  );
}
