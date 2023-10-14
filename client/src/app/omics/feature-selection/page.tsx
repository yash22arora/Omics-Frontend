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
import ResultContainer from "@/components/ResultContainer";
import axiosInstance from "@/lib/axios";
import { useToast } from "@/components/ui/use-toast";
import { saveAs } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type TTechnique = "anova" | "fire" | "pso";

const submitInput = async (technique: TTechnique, file: File) => {
  if (!file || !technique) return;
  const formData = new FormData();
  formData.append("file", file);
  let endpoint = "";
  if (technique === "anova") {
    endpoint = "/anova";
  } else if (technique === "fire") endpoint = "/fire";
  else endpoint = "/pso";

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

const FeatureSelection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [technique, setTechnique] = useState<TTechnique | undefined>(undefined);
  const [result, setResult] = useState<string>("");
  const [displayResult, setDisplayResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  useEffect(() => {
    console.log(file);
  }, [file]);

  const handleSubmit = async () => {
    setResult("");
    setDisplayResult("");
    setLoading(true);
    if (!file || !technique) return;
    const data = await submitInput(technique, file);
    setLoading(false);

    let output = data?.data || "";
    setResult(output);
    let selectedFeatures = output.split("\n")[0].split(",");
    let selectedFeaturesString = selectedFeatures
      .splice(0, selectedFeatures.length - 1)
      .join("\n");
    setDisplayResult(selectedFeaturesString);

    if (data?.status !== 200) {
      toast({
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  const handleDownload = () => {
    if (!result) {
      return toast({
        description: "No data to download",
        variant: "destructive",
      });
    } else saveAs(result, `selected_features_${technique}.csv`);
  };

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
            onValueChange={(value) => setTechnique(value as TTechnique)}
          >
            <SelectTrigger className="w-[250px]">
              <SelectValue placeholder="Select a technique" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="anova">Anova</SelectItem>
              <SelectItem value="fire">Fire</SelectItem>
              <SelectItem value="pso">Pso</SelectItem>
            </SelectContent>
          </Select>
          <Button
            disabled={technique === undefined || file === null}
            className="disabled:cursor-not-allowed"
            onClick={handleSubmit}
          >
            {loading && <Loader2 className="mr-2 animate-spin" size={20} />}
            Get selected features
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
            {displayResult}
          </ResultContainer>
        </div>
        <Button
          className=" ml-auto min-h-max max-h-full"
          disabled={!result}
          onClick={handleDownload}
        >
          Download selected features
        </Button>
      </main>
    </div>
  );
};

export default FeatureSelection;
