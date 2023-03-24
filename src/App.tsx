import React, { useState } from "react";
import bgTop from "./images/bg-top.svg";
import bgBottom from "./images/bg-bottom.svg";
import { Toggle } from "./components/Toggle";
import { Card } from "./components/Card";

export function App() {
  const [priceMonthly, setPriceMonthly] = useState(false);
  console.log({ priceMonthly, setPriceMonthly });
  return (
    <main className="relative z-0 overflow-hidden min-h-screen font-montserrat text-15  bg-veryLightGrayishBlue px-6 py-6">
      <img className="absolute -z-50 -top-8 -right-2/4" src={bgTop} alt="" />
      <img className="absolute -z-50 hidden" src={bgBottom} alt="" />
      <Toggle priceMonthly={priceMonthly} setPriceMonthly={setPriceMonthly} />
      <section>
        <Card
          title="Basic"
          price={priceMonthly ? 19.99 : 199.99}
          whatYouGet={["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"]}
        />
        <Card
          title="Professional"
          price={priceMonthly ? 24.99 : 249.99}
          whatYouGet={["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"]}
          bgColor="bg-gradient-to-br from-linearGradient-from to-linearGradient-to"
          textColor="text-white"
          priceColor="text-white"
        />
        <Card
          title="master"
          price={priceMonthly ? 39.99 : 399.0}
          whatYouGet={["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"]}
        />
      </section>
    </main>
  );
}
