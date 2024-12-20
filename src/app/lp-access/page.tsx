"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LPAccess from "./LPAccess";
import LPTeam from "./LPTeam";

export default function LPAccessPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between pt-24 overflow-hidden">
        <LPAccess />
        <LPTeam />
      </main>
      <Footer />
    </>
  );
}
