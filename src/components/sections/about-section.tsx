
import { SectionWrapper } from '@/components/layout/section-wrapper';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-background">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary font-headline">About Me</h2>
          <p className="text-lg text-foreground/80 mb-4">
            Hello! I&apos;m a passionate and creative individual with a love for technology and design. My journey in the digital world has been fueled by a curiosity to learn and a drive to build meaningful solutions.
          </p>
          <p className="text-lg text-foreground/80 mb-4">
            With a strong foundation in web development and a keen eye for aesthetics, I strive to create interfaces that are not only functional but also delightful to use. My expertise includes HTML, CSS, Java, and JavaScript, and I am committed to continuous learning and exploring new technologies.
          </p>
          <p className="text-lg text-foreground/80">
            When I&apos;m not coding, you can find me exploring new web features, reading books and even planning an adventure to clear my mind.
          </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <Card className="w-full max-w-md overflow-hidden shadow-2xl rounded-xl transform transition-all duration-500 hover:scale-105">
            <CardContent className="p-0">
              <Image
                src="https://cdn.prod.website-files.com/66619549eba8f39855e63f8a/66de8d2aaf85340e40ca7698_software-developer.jpeg"
                alt="About Me Image"
                width={600}
                height={750}
                className="object-cover w-full h-full"
                data-ai-hint="software developer"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
