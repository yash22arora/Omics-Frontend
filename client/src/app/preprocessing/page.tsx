"use client";
import UploadBox from "@/components/UploadBox";
import { useEffect, useState } from "react";

export default function PreProcessingLayout({
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
      <main className="flex flex-col">
        <p>This is the PreProcessing page</p>
        <UploadBox onUpload={setFile} />
        {children}
      </main>
    </div>
  );
}
