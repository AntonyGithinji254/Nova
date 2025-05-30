"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navbarRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > (navbarRef.current?.offsetHeight ?? 80) / 2);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = navbarHeight;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };


  return (
    <header 
      ref={navbarRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="#home" onClick={(e) => scrollToSection(e, "#home")} className="text-2xl font-bold text-primary font-headline">
          Portfolio
        </Link>
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              asChild
              className="text-foreground hover:text-accent-foreground hover:bg-accent hover:shadow-glow-accent transition-all duration-300"
            >
              <Link href={item.href} onClick={(e) => scrollToSection(e, item.href)}>
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
            <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsMtzvl_5Ntwh5LXnVtYgqY1xmD_0Z1A18ot-ukKje_YfT19zSrUveFBiNXdr4gTgN9vU&usqp=CAU"
                alt="Personal Avatar"
                width={72}
                height={72}
                className="rounded-full border-2 border-primary object-cover"
                data-ai-hint="professional portrait"
            />
        </div>
        {/* Mobile Menu Trigger (optional, not explicitly requested but good for responsiveness) */}
        {/* <div className="md:hidden"> ... </div> */}
      </div>
    </header>
  );
}
