"use client";

import UploadBox from "@/components/UploadBox";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

const SurvivalAnalysis = () => {
  const [file, setFile] = useState<File | null>(null);
  useEffect(() => {
    if (file) {
      console.log(file);
    }
  }, [file]);
  return (
    <div>
      <main className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium">Survival Ananlyis</h1>
        <Separator />
        <UploadBox onUpload={setFile} />
      </main>
    </div>
  );
};

export default SurvivalAnalysis;
