import React from "react";
import bgTop from "../images/bg-top.svg";
import bgBottom from "../images/bg-bottom.svg";

export function Background() {
  return (
    <>
      <img className="absolute -z-50 -top-8 -right-2/4" src={bgTop} alt="" />
      <img className="absolute -z-50 hidden" src={bgBottom} alt="" />
    </>
  );
}
