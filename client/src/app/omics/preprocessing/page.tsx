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
import axiosInstance from "@/lib/axios";
import { saveAs } from "@/lib/utils";
import { Loader, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

type TTechnique = "na-remove" | "knn-impute";

const preprocessInput = async (technique: TTechnique, file: File) => {
  if (!file || !technique) return;
  const formData = new FormData();
  formData.append("file", file);
  let endpoint = "";
  if (technique === "knn-impute") {
    endpoint = "/knn";
  } else endpoint = "/removeNA";

  try {
    const data = await axiosInstance.post<string>(endpoint, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};

const PreProcessing = () => {
  const [file, setFile] = useState<File | null>(null);
  const [technique, setTechnique] = useState<TTechnique | undefined>(undefined);
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    console.log(file);
  }, [file]);

  const handleSubmit = async () => {
    setResult("");
    setLoading(true);
    if (!file || !technique) return;
    const data = await preprocessInput(technique as TTechnique, file as File);
    setLoading(false);

    setResult(data?.data || "");
  };

  const handleDownload = () => {
    if (!result) return;

    saveAs(result, "preprocessed_data.csv");
  };

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
            onValueChange={(value) => setTechnique(value as TTechnique)}
          >
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Select a technique" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="na-remove">NA Remove</SelectItem>
              <SelectItem value="knn-impute">KNN Imputation</SelectItem>
            </SelectContent>
          </Select>
          <Button
            disabled={technique === undefined || file === null}
            onClick={handleSubmit}
          >
            {loading && <Loader2 className="mr-2 animate-spin" size={20} />}
            Get preprocessed data
          </Button>
        </div>
        <div className="mt-4 mb-3 flex flex-col gap-3">
          <h3 className="text-lg font-medium">Result</h3>
          <ResultContainer>
            {loading && (
              <Loader2
                className="animate-spin mx-auto"
                size={30}
                color="white"
              />
            )}
            {result}
          </ResultContainer>
        </div>
        <Button
          className=" ml-auto min-h-max max-h-full"
          onClick={handleDownload}
        >
          Download preprocessed data
        </Button>
      </main>
    </div>
  );
};

export default PreProcessing;
