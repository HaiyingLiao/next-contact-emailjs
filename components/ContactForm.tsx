"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

// Message types
type MessageType = "success" | "error";

interface ResultMessage {
  type: MessageType;
  text: string;
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [resultMessage, setResultMessage] = useState<ResultMessage | null>(
    null
  );

  // 1. Initialise the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema), // connect zod validation
    defaultValues: {
      name: "", // must match the schema keys
      email: "",
      message: "",
    },
  });

  // 2. Submit handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    setResultMessage(null);

    try {
      await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      values,
      process.env.NEXT_PUBLIC_EMAILJS_API_KEY!
      );
      setResultMessage({
        type: "success",
        text: "Thank you! Your message has been sent successfully.",
      });
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setResultMessage({
        type: "error",
        text: "Failed to send message. Please try again or contact us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-md bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  {...field}
                  className="w-full px-3 py-2 rounded border border-zinc-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  {...field}
                  className="w-full px-3 py-2 rounded border border-zinc-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message here..."
                  {...field}
                  className="w-full px-3 py-2 rounded border border-zinc-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-primary min-h-[150px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full cursor-pointer">
        {loading ? "Sending..." : "Send Message"}
        </Button>

        {resultMessage && (
          <p className={`text-sm font-medium ${resultMessage.type === "success" ? "text-green-600" : "text-red-600"}`}
     role="alert"
    >
     {resultMessage.text}
    </p>)}
      </form>
    </Form>
  );
}