"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    period: "2021 - Present",
    title: "Web Developer Student",
    description: "Improving my skills in web development, working on personal projects, and exploring new technologies."
  },
  {
    period: "2019 - 2021",
    title: "HTML/CSS Beginner",
    description: "Started learning web development with basic HTML, CSS, and JavaScript fundamentals."
  }
];

export default function About() {
  const aboutRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
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

      // Text animation
      gsap.from(textRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse"
        }
      });

      // Cards animation
      gsap.from(".experience-card", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
          end: "bottom 60%",
          toggleActions: "play none none reverse"
        }
      });

    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 relative"
          >
            About Me
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded"></div>
          </h2>
          <p
            ref={textRef}
            className="text-muted-foreground max-w-2xl mt-6 mb-8"
          >
            I&apos;m a web developer from Morocco who is passionate about creating modern web applications.
            I&apos;m currently focused on expanding my skills and working on personal projects to build
            my portfolio. I love learning new technologies and solving challenging problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              My journey in web development began with a curiosity about how websites work.
              Starting with HTML and CSS, I gradually expanded my knowledge to include JavaScript,
              PHP, and modern frameworks like React. I enjoy the process of turning ideas into
              functional and visually appealing websites.
            </p>
            <p className="text-muted-foreground mb-6">
              As a student of web development, I continuously strive to improve my skills and
              stay updated with the latest industry trends and best practices. I am passionate about creating
              clean, efficient, and user-friendly web applications.
            </p>
            <Button variant="outline">
              <a href="#contact">Let&apos;s Talk</a>
            </Button>
          </div>

          <div ref={cardsRef}>
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card key={index} className="experience-card overflow-hidden">
                  <CardContent className="p-6">
                    <span className="text-sm text-primary font-medium block mb-1">{exp.period}</span>
                    <h4 className="text-lg font-semibold mb-2">{exp.title}</h4>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="about-stat">
            <h4 className="text-3xl font-bold text-primary">30+</h4>
            <p className="text-muted-foreground">Repositories</p>
          </div>
          <div className="about-stat">
            <h4 className="text-3xl font-bold text-primary">8+</h4>
            <p className="text-muted-foreground">Tech Skills</p>
          </div>
          <div className="about-stat">
            <h4 className="text-3xl font-bold text-primary">10+</h4>
            <p className="text-muted-foreground">Following</p>
          </div>
          <div className="about-stat">
            <h4 className="text-3xl font-bold text-primary">106+</h4>
            <p className="text-muted-foreground">Contributions</p>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
