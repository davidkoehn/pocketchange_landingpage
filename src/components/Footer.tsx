"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center py-4 text-[#203c4d] bg-[#97b2bd] w-full border-t-0">
      <div className="text-center mb-2">
        <p className="mb-2">© 2024 PocketChange.fund</p>
        <a
          href="/privacy-policy"
          className="hover:underline hover:underline-offset-4 transition-all duration-150 hidden xl:block"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
