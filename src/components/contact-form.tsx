"use client";

import { useActionState } from "react"; // Changed from react-dom
import { useFormStatus } from "react-dom"; // useFormStatus is still from react-dom
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-accent/50 transition-all duration-300">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export function ContactForm() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(submitContactForm, initialState); // Changed to useActionState

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        form.reset();
      }
    }
  }, [state, toast, form]);

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-foreground/80">Your Name</Label>
        <Input
          id="name"
          type="text"
          {...form.register("name")}
          className="mt-1 bg-background/70 border-border focus:ring-accent"
          aria-invalid={form.formState.errors.name ? "true" : "false"}
        />
        {form.formState.errors.name && (
          <p className="mt-1 text-sm text-destructive">{form.formState.errors.name.message}</p>
        )}
         {state.errors?.name && (
          <p className="mt-1 text-sm text-destructive">{state.errors.name[0]}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-foreground/80">Your Email</Label>
        <Input
          id="email"
          type="email"
          {...form.register("email")}
          className="mt-1 bg-background/70 border-border focus:ring-accent"
          aria-invalid={form.formState.errors.email ? "true" : "false"}
        />
        {form.formState.errors.email && (
          <p className="mt-1 text-sm text-destructive">{form.formState.errors.email.message}</p>
        )}
        {state.errors?.email && (
          <p className="mt-1 text-sm text-destructive">{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="text-foreground/80">Your Message</Label>
        <Textarea
          id="message"
          {...form.register("message")}
          rows={5}
          className="mt-1 bg-background/70 border-border focus:ring-accent"
          aria-invalid={form.formState.errors.message ? "true" : "false"}
        />
        {form.formState.errors.message && (
          <p className="mt-1 text-sm text-destructive">{form.formState.errors.message.message}</p>
        )}
        {state.errors?.message && (
          <p className="mt-1 text-sm text-destructive">{state.errors.message[0]}</p>
        )}
      </div>
      
      <SubmitButton />
    </form>
  );
}
