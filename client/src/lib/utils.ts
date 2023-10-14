import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const saveAs = (data: string, filename: string) => {
  const link = document.createElement("a");
  const blob = new Blob([data], {
    type: "text/plain;charset=utf-8",
  });

  link.href = window.URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  window.URL.revokeObjectURL(link.href);
};
