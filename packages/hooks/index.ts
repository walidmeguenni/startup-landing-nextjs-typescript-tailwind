import { useEffect, useState } from "react";

export function useOnScreen() {
  const [currentSection, setCurrentSection] = useState<string>("Home");

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
          setCurrentSection(section.getAttribute("id") ?? "");
        }
      });
    }

    if (typeof window !== "undefined") {
      // browser code
      window.addEventListener("scroll", handleScroll);
    }

    handleScroll();

    // Remove the listener as soon as the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return currentSection;
}

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", updatePosition);
  }

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};