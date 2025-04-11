"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { usePathname } from "next/navigation";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    // Hide the cursor initially
    gsap.set(cursor, { opacity: 0, scale: 0.5 });
    gsap.set(cursorDot, { opacity: 0, scale: 0.5 });

    // Show cursor when mouse moves for the first time
    const onFirstMove = (e: MouseEvent) => {
      updateCursorPosition(e);

      gsap.to(cursor, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      });

      gsap.to(cursorDot, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      });

      window.removeEventListener("mousemove", onFirstMove);
      window.addEventListener("mousemove", updateCursorPosition);
    };

    // Update the cursor position with a smooth animation
    const updateCursorPosition = (e: MouseEvent) => {
      // Main cursor with slight delay (following effect)
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
      });

      // Cursor dot moves instantly for precision
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "none"
      });
    };

    // Add hover effect for interactive elements
    const addHoverEffect = () => {
      const interactiveElements = document.querySelectorAll("a, button, input, textarea, [role='button']");

      interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
          gsap.to(cursor, {
            scale: 1.5,
            opacity: 0.7,
            backgroundColor: "rgba(var(--primary) / 0.3)",
            duration: 0.3
          });

          gsap.to(cursorDot, {
            scale: 0.5,
            duration: 0.3
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(cursor, {
            scale: 1,
            opacity: 1,
            backgroundColor: "rgba(var(--primary) / 0.1)",
            duration: 0.3
          });

          gsap.to(cursorDot, {
            scale: 1,
            duration: 0.3
          });
        });
      });
    };

    // Hide on mobile/touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    if (!isTouch) {
      window.addEventListener("mousemove", onFirstMove);
      addHoverEffect();
    } else {
      // Hide cursor on touch devices
      gsap.set(cursor, { display: "none" });
      gsap.set(cursorDot, { display: "none" });
    }

    // Handle cursor leaving window
    window.addEventListener("mouseout", () => {
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.3
      });

      gsap.to(cursorDot, {
        opacity: 0,
        duration: 0.3
      });
    });

    window.addEventListener("mouseover", () => {
      gsap.to(cursor, {
        opacity: 1,
        duration: 0.3
      });

      gsap.to(cursorDot, {
        opacity: 1,
        duration: 0.3
      });
    });

    return () => {
      window.removeEventListener("mousemove", onFirstMove);
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, [pathname]);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-10 h-10 rounded-full bg-primary/10 border border-primary/20 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
        style={{ top: 0, left: 0 }}
      />
      <div
        ref={cursorDotRef}
        className="fixed w-2 h-2 rounded-full bg-primary pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ top: 0, left: 0 }}
      />
    </>
  );
}
