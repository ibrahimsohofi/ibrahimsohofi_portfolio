"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main timeline
      const tl = gsap.timeline();

      // Animate the heading
      tl.from(".hero-title span", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      })
      .from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.4")
      .from(".hero-description", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3")
      .from(".hero-buttons", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out"
      }, "-=0.3")
      .from(".social-icons > *", {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.3");

      // Create hovering animation for the image
      gsap.to(".image-container", {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center pt-20 pb-10 overflow-hidden relative"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={textRef} className="order-2 lg:order-1">
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              <span className="block">Hi, I&apos;m </span>
              <span className="block text-primary">Ibrahim Sohofi</span>
            </h1>

            <h2 className="hero-subtitle text-xl md:text-2xl font-medium text-muted-foreground mb-4">
              Web Developer & UI Designer
            </h2>

            <p className="hero-description text-muted-foreground mb-8 max-w-lg">
              I design and build modern web applications with a focus on responsive design,
              user experience, and clean code. Currently working on new projects and
              improving my skills as a developer.
            </p>

            <div className="hero-buttons flex flex-wrap gap-4 mb-8">
              <Button size="lg">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="social-icons flex space-x-4">
              <a
                href="https://github.com/ibrahimsohofi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card hover:bg-muted transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/ibrahimsohofi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card hover:bg-muted transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/Ibrahimsohofi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card hover:bg-muted transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/sohofi.ibrahim"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card hover:bg-muted transition-colors"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div
            ref={imageRef}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="image-container relative w-72 h-72 md:w-96 md:h-96 overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 animate-pulse"></div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30"
              >
                <Image
                  src="/images/IMG.png"
                  alt="Ibrahim Sohofi"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
}
