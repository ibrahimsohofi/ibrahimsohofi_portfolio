"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Define project type
interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  repoUrl: string;
  demoUrl: string;
}

// Project data based on the user's GitHub repositories
const projects: ProjectType[] = [
  {
    id: 1,
    title: "Vidstack Player",
    description: "A forked project from vidstack/player. A modern video player alternative to JW Player and Video.js.",
    image: "https://placehold.co/600x400/e2e8f0/ffffff?text=Vidstack+Player",
    tags: ["TypeScript", "Video", "Player"],
    category: "video",
    repoUrl: "https://github.com/ibrahimsohofi/vidstack",
    demoUrl: ""
  },
  {
    id: 2,
    title: "Books Website",
    description: "A website for browsing and exploring books built with HTML.",
    image: "https://placehold.co/600x400/e2e8f0/ffffff?text=Books+Website",
    tags: ["HTML", "CSS", "Web"],
    category: "web",
    repoUrl: "https://github.com/ibrahimsohofi/Bookswebsite",
    demoUrl: ""
  },
  {
    id: 3,
    title: "Watch Series",
    description: "A platform for watching series and shows built with TypeScript.",
    image: "https://placehold.co/600x400/e2e8f0/ffffff?text=Watch+Series",
    tags: ["TypeScript", "React", "Streaming"],
    category: "streaming",
    repoUrl: "https://github.com/ibrahimsohofi/watch-series-",
    demoUrl: ""
  },
  {
    id: 4,
    title: "Vid_dl",
    description: "JavaScript-based video downloader project.",
    image: "https://placehold.co/600x400/e2e8f0/ffffff?text=Vid_dl",
    tags: ["JavaScript", "Node.js", "Downloader"],
    category: "utilities",
    repoUrl: "https://github.com/ibrahimsohofi/Vid_dl",
    demoUrl: ""
  },
  {
    id: 5,
    title: "Watchit",
    description: "A TypeScript-based streaming platform project.",
    image: "https://placehold.co/600x400/e2e8f0/ffffff?text=Watchit",
    tags: ["TypeScript", "React", "Streaming"],
    category: "streaming",
    repoUrl: "https://github.com/ibrahimsohofi/watchit",
    demoUrl: ""
  },
  {
    id: 6,
    title: "Vidnet Frontend",
    description: "A JavaScript frontend for a video platform.",
    image: "https://placehold.co/600x400/e2e8f0/ffffff?text=Vidnet+Frontend",
    tags: ["JavaScript", "React", "Frontend"],
    category: "web",
    repoUrl: "https://github.com/ibrahimsohofi/vidnet_frontend",
    demoUrl: ""
  }
];

const categories = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "streaming", label: "Streaming" },
  { id: "utilities", label: "Utilities" },
  { id: "video", label: "Video" }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const projectsRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Filter projects based on active category
  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

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

      // Create animation for project cards
      const animateCards = () => {
        gsap.from(".project-card", {
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          clearProps: "all",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        });
      };

      animateCards();

      // Re-run animation when category changes
      return () => {
        ScrollTrigger.getAll().forEach(st => st.kill());
      };
    }, projectsRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section id="projects" ref={projectsRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold mb-4 relative"
          >
            My Projects
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary rounded"></div>
          </h2>
          <p className="text-muted-foreground max-w-2xl mt-6 mb-8">
            Here are some of the projects I&apos;ve worked on. Check out my GitHub profile
            for more repositories and projects.
          </p>

          <div className="w-full max-w-xl mb-10">
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
              <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-8">
                {categories.map(category => (
                  <TabsTrigger key={category.id} value={category.id} className="text-xs md:text-sm">
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="project-card overflow-hidden border border-border bg-card transition-all duration-300 hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" onClick={() => setSelectedProject(project)}>
                      Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    {selectedProject && (
                      <>
                        <DialogHeader>
                          <DialogTitle>{selectedProject.title}</DialogTitle>
                          <DialogDescription>{selectedProject.description}</DialogDescription>
                        </DialogHeader>
                        <div className="relative h-60 w-full my-4 overflow-hidden rounded-md">
                          <Image
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {selectedProject.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex justify-between mt-4">
                          <Button variant="outline" asChild>
                            <a href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer">
                              <FaGithub className="mr-2 h-4 w-4" />
                              View Repository
                            </a>
                          </Button>
                          {selectedProject.demoUrl && (
                            <Button asChild>
                              <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href="https://github.com/ibrahimsohofi?tab=repositories" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
