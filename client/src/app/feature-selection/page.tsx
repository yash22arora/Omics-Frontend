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
import { useEffect, useState } from "react";

export default function FeatureSelection() {
  const [file, setFile] = useState<File | null>(null);
  const [technique, setTechnique] = useState<string | undefined>(undefined);
  useEffect(() => {
    console.log(file);
  }, [file]);
  return (
    <div>
      <main className="flex flex-col gap-4">
        <h1 className="text-3xl font-medium">Feature Selection</h1>
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
              <SelectItem value="boruta">Boruta</SelectItem>
              <SelectItem value="lasso">Glmnet - Lasso</SelectItem>
              <SelectItem value="xgboost">Xg Boost</SelectItem>
            </SelectContent>
          </Select>
          <Button
            disabled={technique === undefined || file === null}
            className="disabled:cursor-not-allowed"
          >
            Get selected features
          </Button>
        </div>
      </main>
    </div>
  );
}
