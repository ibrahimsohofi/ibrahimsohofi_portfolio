"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { motion } from "framer-motion";

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const skills = [
  { name: "JavaScript", image: "/images/skills/javascript.svg", level: 75 },
  { name: "HTML5", image: "/images/skills/html5.svg", level: 90 },
  { name: "CSS3", image: "/images/skills/css3.svg", level: 85 },
  { name: "React", image: "/images/skills/react.svg", level: 70 },
  { name: "PHP", image: "/images/skills/php.svg", level: 65 },
  { name: "Python", image: "/images/skills/python.svg", level: 60 },
  { name: "Bootstrap", image: "/images/skills/bootstrap.svg", level: 80 },
  { name: "Tailwind CSS", image: "/images/skills/tailwindcss.svg", level: 75 },
];

export default function Skills() {
  const skillsRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse"
        }
      });

      // Cards animation with stagger
      gsap.from(".skill-card", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate progress bars
      gsap.from(".skill-progress-fill", {
        width: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 relative"
          >
            My Skills
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded"></div>
          </h2>
          <p className="text-muted-foreground max-w-2xl mt-6 mb-8">
            Here are the technologies and programming languages I work with.
            I&apos;m constantly learning and adding new skills to my repertoire.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.2 }}
              className="skill-card bg-card rounded-lg p-6 border border-border shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-medium mb-3">{skill.name}</h3>
              <div className="w-full bg-muted rounded-full h-2.5 mt-1 mb-2">
                <div
                  className="skill-progress-fill bg-primary h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-card p-8 rounded-lg border border-border shadow-sm">
          <h3 className="text-xl font-semibold mb-6 text-center">My Coding Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">Clean Code</h4>
              <p className="text-muted-foreground text-sm">
                I write clean, maintainable, and efficient code following best practices.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">Continuous Learning</h4>
              <p className="text-muted-foreground text-sm">
                I&apos;m always exploring new technologies and expanding my skill set.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">Problem Solving</h4>
              <p className="text-muted-foreground text-sm">
                I approach problems methodically and enjoy finding elegant solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
