import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { FadeInSection } from '@/components/ui/fade-in-section';

type SectionWrapperProps = {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  ariaLabel?: string;
};

export function SectionWrapper({ id, children, className, containerClassName, ariaLabel }: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      aria-label={ariaLabel || `${id} section`}
      className={cn('min-h-screen w-full py-16 md:py-24 flex items-center justify-center', className)}
    >
      <FadeInSection 
        className={cn('container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl w-full', containerClassName)}
      >
        {children}
      </FadeInSection>
    </section>
  );
}
