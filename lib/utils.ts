import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getGmailComposeUrl({
  to,
  subject,
  body,
}: {
  to: string;
  subject?: string;
  body?: string;
}) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to,
  });

  if (subject) {
    params.set("su", subject);
  }

  if (body) {
    params.set("body", body);
  }

  return `https://mail.google.com/mail/?${params.toString()}`;
}
