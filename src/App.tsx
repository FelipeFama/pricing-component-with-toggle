import React from "react";
import bgTop from "./images/bg-top.svg";
import bgBottom from "./images/bg-bottom.svg";
import { Toggle } from "./components/Toggle";

export function App() {
  return (
    <main className="relative z-0 overflow-hidden min-h-screen font-montserrat text-15 text-grayishBlue bg-veryLightGrayishBlue px-6 py-6">
      <img className="absolute -z-50 -top-8 -right-2/4" src={bgTop} alt="" />
      <img className="absolute -z-50 " src={bgBottom} alt="" />
      <Toggle />
    </main>
  );
}
