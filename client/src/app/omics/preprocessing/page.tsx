"use client";

import ResultContainer from "@/components/ResultContainer";
import UploadBox from "@/components/UploadBox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

const PreProcessing = () => {
  const [file, setFile] = useState<File | null>(null);
  const [technique, setTechnique] = useState<string | undefined>(undefined);
  useEffect(() => {
    console.log(file);
  }, [file]);
  return (
    <div>
      <main className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium">Preprocessing</h1>
        <Separator />
        <UploadBox onUpload={setFile} />
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg font-medium">Choose technique:</span>
          <Select
            value={technique}
            onValueChange={(value) => setTechnique(value)}
          >
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Select a technique" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="na-remove">NA Remove</SelectItem>
              <SelectItem value="knn-impute">KNN Imputation</SelectItem>
            </SelectContent>
          </Select>
          <Button disabled={technique === undefined || file === null}>
            Get preprocessed data
          </Button>
        </div>
        <div className="mt-4 mb-3 flex flex-col gap-3">
          <h3 className="text-lg font-medium">Result</h3>
          <ResultContainer></ResultContainer>
        </div>
        <Button className=" ml-auto min-h-max max-h-full">
          Download preprocessed data
        </Button>
      </main>
    </div>
  );
};

export default PreProcessing;
