"use client";

import UploadBox from "@/components/UploadBox";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useEffect, useState } from "react";
import ResultContainer from "@/components/ResultContainer";

const DiseasePrediction = () => {
  const [file, setFile] = useState<File | null>(null);
  const [technique, setTechnique] = useState<string | undefined>(undefined);
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
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg font-medium">Choose a model:</span>
          <Select
            value={technique}
            onValueChange={(value) => setTechnique(value)}
          >
            <SelectTrigger className="w-[250px] mx-3">
              <SelectValue placeholder="Select a model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dnn">Deep Neural Network</SelectItem>
              <SelectItem value="random-forest">Random Forest</SelectItem>
              <SelectItem value="stacked-ensemble">Stacked Ensemble</SelectItem>
            </SelectContent>
          </Select>
          <Button disabled={technique === undefined || file === null}>
            Get results
          </Button>
        </div>
        <div className="mb-4 mt-16 w-full">
          <Tabs defaultValue="result" className="w-full flex flex-col">
            <TabsList className="w-3/4 mx-auto h-max mb-6 bg-[hsl(var(--secondary))]">
              <TabsTrigger value="result" className="w-1/2">
                Result
              </TabsTrigger>
              <TabsTrigger value="plot" className="w-1/2">
                Plot
              </TabsTrigger>
            </TabsList>
            <TabsContent value="result">
              <ResultContainer></ResultContainer>
            </TabsContent>
            <TabsContent value="plot">Plot is displayed here</TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default DiseasePrediction;
