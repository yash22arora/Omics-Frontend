"use client";

import UploadBox from "@/components/UploadBox";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        <div className="my-4 w-full">
          <Tabs defaultValue="result" className="w-full flex flex-col">
            <TabsList className="w-3/4 mx-auto h-max mb-4 bg-[hsl(var(--secondary))]">
              <TabsTrigger value="result" className="w-1/2">
                Result
              </TabsTrigger>
              <TabsTrigger value="plot" className="w-1/2">
                Kaplan Meier Curve
              </TabsTrigger>
            </TabsList>
            <TabsContent value="result">
              The result will be displayed here
            </TabsContent>
            <TabsContent value="plot">Curve is displayed here</TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default SurvivalAnalysis;
