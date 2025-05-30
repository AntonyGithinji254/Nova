import { SectionWrapper } from '@/components/layout/section-wrapper';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, MessageSquare } from 'lucide-react'; // Using MessageSquare for WhatsApp

const socialLinks = [
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/syntaxx_smiles?igsh=MTh1eWNxamU2dHQ1aA==', color: 'hover:text-pink-500' },
  { name: 'WhatsApp', icon: MessageSquare, url: 'https://wa.me/qr/MKMIVNUW3YXUL1', color: 'hover:text-green-500' },
];

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-primary font-headline">Get In Touch</h2>
        <p className="text-lg text-foreground/80 mt-4 max-w-xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="shadow-xl rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Send me a message</CardTitle>
            <CardDescription className="text-foreground/70">I&apos;ll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-xl rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80">
              <p><strong>Email:</strong> your.email@example.com</p>
              <p><strong>Phone:</strong> +1 (234) 567-8900 (Optional)</p>
              <p><strong>Location:</strong> Your City, Your Country</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-xl rounded-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Connect With Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    className={`border-border hover:border-accent ${social.color} transition-colors duration-300 rounded-full w-12 h-12`}
                    asChild
                    aria-label={`Connect on ${social.name}`}
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-6 w-6" />
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
