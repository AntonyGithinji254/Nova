import Navbar from '@/components/layout/navbar';
import HomeSection from '@/components/sections/home-section';
import AboutSection from '@/components/sections/about-section';
import ProjectsSection from '@/components/sections/projects-section';
import ContactSection from '@/components/sections/contact-section';

export default function FolioForgePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow pt-20"> {/* pt-20 to offset fixed navbar height */}
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="text-center py-8 text-foreground/60 bg-muted/50">
        <p>&copy; {new Date().getFullYear()} FolioForge. All rights reserved.</p>
      </footer>
    </div>
  );
}
