import { SectionWrapper } from '@/components/layout/section-wrapper';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, MessageSquare } from 'lucide-react'; // Using MessageSquare for WhatsApp

const socialLinks = [
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/syntaxx_smiles?igsh=MTh1eWNxamU2dHQ1aA==', brandColor: 'text-pink-600' },
  { name: 'WhatsApp', icon: MessageSquare, url: 'https://wa.me/qr/MKMIVNUW3YXUL1', brandColor: 'text-green-600' },
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
                    className="p-0 rounded-full w-16 h-16 bg-card hover:bg-accent/10 border border-border focus:ring-2 focus:ring-ring transition-all duration-300 group"
                    asChild
                    aria-label={`Connect on ${social.name}`}
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center w-full h-full rounded-full ${social.brandColor}`}>
                      <social.icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-200" />
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
