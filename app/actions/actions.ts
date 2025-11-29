"use server";
import { leadSchema } from "@/schema/schema";
import { z } from "zod";

export async function sendLeadMessage(unsafeData: z.infer<typeof leadSchema>) {
  const parsed = leadSchema.safeParse(unsafeData);
  if (!parsed.success) {
    return { data: null, message: "Invalid message format", success: false };
  }

  const leadMessage = parsed.data;
  return { data: leadMessage, message: "Valid message format", success: true };
}
