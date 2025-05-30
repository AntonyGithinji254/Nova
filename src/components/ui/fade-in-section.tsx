"use client";
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
  threshold?: number;
  transitionDelay?: string; // e.g. 'delay-100'
  transitionDuration?: string; // e.g. 'duration-500'
};

export function FadeInSection({ 
  children, 
  className, 
  threshold = 0.1,
  transitionDelay = 'delay-0',
  transitionDuration = 'duration-700'
}: FadeInSectionProps) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={domRef}
      className={cn(
        'transition-all ease-in-out',
        transitionDuration,
        transitionDelay,
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        className
      )}
    >
      {children}
    </div>
  );
}
