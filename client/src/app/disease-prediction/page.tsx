"use client";
import UploadBox from "@/components/UploadBox";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

export default function DiseaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [file, setFile] = useState<File | null>(null);
  useEffect(() => {
    if (file) {
      console.log(file);
    }
  }, [file]);
  return (
    <div>
      <main className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium">Disease Prediction</h1>
        <Separator />
        <UploadBox onUpload={setFile} />
      </main>
    </div>
  );
}
