"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const contactRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

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

      // Form animation
      gsap.from(formRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 75%",
          end: "bottom 60%",
          toggleActions: "play none none reverse"
        }
      });

      // Info cards animation
      gsap.from(".contact-info-card", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 75%",
          end: "bottom 60%",
          toggleActions: "play none none reverse"
        }
      });

      // Social icons animation
      gsap.from(".social-icon", {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".social-icons-container",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 relative"
          >
            Contact Me
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded"></div>
          </h2>
          <p className="text-muted-foreground max-w-2xl mt-6 mb-8">
            Feel free to reach out to me for collaboration, job opportunities, or just to say hello!
            I&apos;m always interested in new projects and connections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div>
            <form ref={formRef} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-card border-border"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-card border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can I help you?"
                  className="bg-card border-border"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={6}
                  className="bg-card border-border"
                />
              </div>

              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div ref={infoRef} className="space-y-6">
            <Card className="contact-info-card overflow-hidden">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <FaEnvelope className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:sohofibrahim9@gmail.com" className="hover:text-primary transition-colors">
                      sohofibrahim9@gmail.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="contact-info-card overflow-hidden">
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <FaMapMarkerAlt className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground">Morocco</p>
                </div>
              </CardContent>
            </Card>

            <Card className="contact-info-card overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Connect with me</h3>
                <div className="social-icons-container flex space-x-4">
                  <a
                    href="https://github.com/ibrahimsohofi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon p-2 rounded-full bg-card hover:bg-primary/10 transition-colors border border-border"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/ibrahimsohofi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon p-2 rounded-full bg-card hover:bg-primary/10 transition-colors border border-border"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://twitter.com/Ibrahimsohofi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon p-2 rounded-full bg-card hover:bg-primary/10 transition-colors border border-border"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com/sohofi.ibrahim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon p-2 rounded-full bg-card hover:bg-primary/10 transition-colors border border-border"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 bg-card rounded-lg border border-border shadow-sm contact-info-card">
              <h3 className="text-lg font-medium mb-4">Working Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
