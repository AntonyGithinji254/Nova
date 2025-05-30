"use client";

import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomeSection() {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      // Adjust for navbar height if necessary
      const navbarHeight = document.querySelector('header')?.offsetHeight || 80;
      const elementPosition = projectsSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <SectionWrapper id="home" className="bg-gradient-to-br from-background to-secondary/30" containerClassName="text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary font-headline tracking-tight">
        Welcome to my portfolio
      </h1>
      <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl mx-auto">
        Crafting digital experiences that inspire and engage. Discover my journey and work.
      </p>
      <div className="space-x-4">
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
          <Link href="#projects" onClick={scrollToProjects}>
            View My Work <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105">
          <Link href="#contact">
            Get in Touch
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
