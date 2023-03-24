import React from "react";
import bgTop from "./images/bg-top.svg";
import bgBottom from "./images/bg-bottom.svg";

export function App() {
  return (
    <main className="relative z-0 overflow-hidden min-h-screen font-montserrat text-15 text-grayishBlue bg-veryLightGrayishBlue px-6 py-6">
      <img src={bgTop} alt="" />
      <img src={bgBottom} alt="" />
    </main>
  );
}
