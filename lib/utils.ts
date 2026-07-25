import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMailtoUrl({
  to,
  subject,
  body,
}: {
  to: string;
  subject?: string;
  body?: string;
}) {
  const params = [
    subject ? `subject=${encodeURIComponent(subject)}` : null,
    body ? `body=${encodeURIComponent(body)}` : null,
  ].filter(Boolean);

  return params.length > 0 ? `mailto:${to}?${params.join("&")}` : `mailto:${to}`;
}
