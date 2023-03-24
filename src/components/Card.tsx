import React from "react";

interface CardProps {
  title: string;
  price: number;
  whatYouGet: string[];
  bgColor?: string;
  textColor?: string;
  priceColor?: string;
}

export function Card({
  title,
  price,
  whatYouGet,
  bgColor,
  textColor,
  priceColor,
}: CardProps) {
  return (
    <section>
      <p></p>
      <h2></h2>
      <article>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </article>
      <button>LEARN MORE</button>
    </section>
  );
}
