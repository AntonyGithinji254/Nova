import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
}

const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product listings, cart functionality, and user accounts.',
    imageUrl: 'https://www.iwdagency.com/cdn/shop/articles/eCommerce_Platform_Pic_2000x.jpg?v=1698957713',
    imageHint: 'online store',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative tool to organize tasks, set deadlines, and track progress for teams.',
    imageUrl: 'https://dianapps.com/blog/wp-content/uploads/2024/06/Add-a-heading-39.png',
    imageHint: 'task manager',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    liveLink: '#',
  },
  {
    id: '3',
    title: 'Portfolio Website Template',
    description: 'A sleek and modern portfolio template designed for creatives and developers.',
    imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/alime-free-template-353x278.jpg',
    imageHint: 'website template',
    tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    repoLink: '#',
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-secondary/30">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary font-headline">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Card key={project.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
            <Image src={project.imageUrl} alt={project.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={project.imageHint} />
            <CardHeader>
              <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
              <CardDescription className="text-foreground/80 h-20 overflow-hidden">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium">{tag}</span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2 p-4 bg-muted/50">
              {project.liveLink && (
                <Button variant="outline" size="sm" asChild className="text-accent border-accent hover:bg-accent/10">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.repoLink && (
                <Button variant="ghost" size="sm" asChild className="text-foreground/70 hover:text-accent hover:bg-accent/10">
                  <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
