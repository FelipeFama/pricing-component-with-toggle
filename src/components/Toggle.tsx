import React from "react";
import { ToggleProps } from "../types";

export function Toggle({ priceMonthly, setPriceMonthly }: ToggleProps) {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setPriceMonthly(evt.target.checked);
  };

  return (
    <header className="flex flex-col items-center">
      <h1 className="text-32 text-center text-grayishBlue">Our Pricing</h1>
      <nav className="flex items-center justify-center gap-6">
        <p className="text-lightGrayishBlue">Anually</p>
        <label
          className="block bg-gradient-to-r from-linearGradient-from to-linearGradient-to cursor-pointer relative rounded-full h-8 w-14"
          htmlFor="toggleBtn"
        >
          <input
            className="invisible"
            checked={priceMonthly ? true : false}
            onChange={handleChange}
            type="checkbox"
            name="toggleBtn"
            id="toggleBtn"
          />
          <span
            className={
              priceMonthly
                ? "absolute top-1/2 translate-x-[15px] -translate-y-1/2 h-6 w-6 rounded-full bg-white transition-transform duration-300 ease-in-out"
                : "absolute top-1/2 left-1 -translate-y-1/2 h-6 w-6 rounded-full bg-white transition-transform duration-300 ease-in-out"
            }
          ></span>
        </label>
        <p className="text-lightGrayishBlue">Monthly</p>
      </nav>
    </header>
  );
}
