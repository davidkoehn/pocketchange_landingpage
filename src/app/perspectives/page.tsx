"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Perspectives from "./Perspectives";

export default function PerspectivesPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between pt-24 overflow-hidden">
        <Perspectives />
      </main>
      <Footer />
    </>
  );
}
