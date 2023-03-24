import { backgroundImages } from "../data";

export function Background() {
  return (
    <>
      <img
        className="absolute -z-50 -top-8 -right-2/4 lg:top-0 lg:right-0"
        src={backgroundImages.backgroundTop.image}
        alt={backgroundImages.backgroundTop.alt}
      />
      <img
        className="absolute -z-50 hidden lg:block lg:bottom-0 lg:left-0"
        src={backgroundImages.backgroundBottom.image}
        alt={backgroundImages.backgroundBottom.alt}
      />
    </>
  );
}
