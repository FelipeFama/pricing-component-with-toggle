import React from "react";

export function Toggle() {
  return (
    <header className="flex items-center">
      <h1 className="text-32 text-center">Our Pricing</h1>
      <nav className="flex items-center justify-center">
        <p>Anually</p>
        <label className="block relative h-8 w-14" htmlFor="toggleBtn"></label>
        <input
          className="invisible"
          type="checkbox"
          name="toggleBtn"
          id="toggleBtn"
        />
        <span></span>
        <p>Monthly</p>
      </nav>
    </header>
  );
}
