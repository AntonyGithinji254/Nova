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
    imageUrl: 'data:image/jpeg;base64,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',
    imageHint: 'task board',
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
