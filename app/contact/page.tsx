"use client";
import React from "react";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { leadSchema } from "@/schema/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { sendLeadMessage } from "../actions/actions";

export default function ContactForm() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(leadSchema),
  });

  async function onSubmit(data: z.infer<typeof leadSchema>) {
    const res = await sendLeadMessage(data);
    if (res) {
      form.reset();
      toast.error(res.message);
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-4">
      <Card className="sm:min-w-[500px] sm:max-w-[500px] max-w-[350px] rounded-none border-2 border-brand-dark mt-24 lg:mt-36">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>
            Got any questions or suggestion? Fill out this form to reach out
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              {/* Name */}
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}></FieldLabel>
                    <input
                      className="flex-1 h-12 focus:ring-0 focus:outline-none placeholder:opacity-100 placeholder:font-semibold placeholder:text-brand-dark"
                      aria-invalid={fieldState.invalid}
                      {...field}
                      id={field.name}
                      type="name"
                      placeholder="Name"
                    />
                    <hr className=" border-brand-dark" />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              {/* Email */}
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}></FieldLabel>
                    <input
                      className="flex-1 h-12 focus:ring-0 focus:outline-none placeholder:opacity-100 placeholder:font-semibold placeholder:text-brand-dark"
                      aria-invalid={fieldState.invalid}
                      {...field}
                      id={field.name}
                      type="email"
                      placeholder="Email"
                    />
                    <hr className=" border-brand-dark" />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              {/* Message */}
              <Controller
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}></FieldLabel>

                    <textarea
                      style={{ fieldSizing: "content" }}
                      className="focus:ring-0 focus:outline-none placeholder:opacity-100 placeholder:font-semibold placeholder:text-brand-dark field-sizing-content w-full min-h-16"
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Your Message"
                    ></textarea>
                    <hr className=" border-brand-dark" />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <button className=" p-2 bg-brand-dark text-brand-light hover:bg-brand-gold hover:scale-95 transition-all duration-300">
                SEND
              </button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
