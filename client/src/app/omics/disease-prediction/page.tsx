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
import { useToast } from "@/components/ui/use-toast";
import axiosInstance from "@/lib/axios";
import { getPNGUrl } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Image from "next/image";

type TTechnique = "dnn" | "nb" | "rf" | "ensemble";

const DiseasePrediction = () => {
  const [file, setFile] = useState<File | null>(null);
  const [technique, setTechnique] = useState<TTechnique | undefined>(undefined);
  const [result, setResult] = useState<string>("");
  const [plot, setPlot] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!technique || !file) return;

    setResult("");
    setPlot(null);
    setLoading(true);
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    let endpoint = "";
    switch (technique) {
      case "dnn":
        endpoint = "/disease/dnn";
        break;
      case "nb":
        endpoint = "/disease/nb";
        break;
      case "rf":
        endpoint = "/disease/rf";
        break;
      case "ensemble":
        endpoint = "/disease/ensemble";
        break;
    }

    try {
      const data = await axiosInstance.post<string>(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setResult(data.data);

      const plot = await axiosInstance.post(endpoint + "/plot", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob", //TODO: VERYYYY IMPORTANT
      });

      const plotUrl = getPNGUrl(plot.data);
      setPlot(plotUrl);

      setLoading(false);
    } catch (err) {
      toast({
        description: "Something went wrong. " + err,
        variant: "destructive",
      });
      setLoading(false);
    }
  };

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
            onValueChange={(value) => setTechnique(value as TTechnique)}
          >
            <SelectTrigger className="w-[250px] mx-3">
              <SelectValue placeholder="Select a model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dnn">Deep Neural Network</SelectItem>
              <SelectItem value="nb">Naive Bayes</SelectItem>
              <SelectItem value="rf">Random Forest</SelectItem>
              <SelectItem value="ensemble">Stacked Ensemble</SelectItem>
            </SelectContent>
          </Select>
          <Button
            disabled={technique === undefined || file === null}
            onClick={handleSubmit}
          >
            {loading && <Loader2 className="mr-2 animate-spin" size={20} />}
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
            </TabsContent>
            <TabsContent value="plot">
              {plot ? (
                <Image
                  src={plot}
                  alt="Plot"
                  width={600}
                  height={200}
                  className="mx-auto mt-8"
                />
              ) : (
                <Loader2
                  className="animate-spin mx-auto mt-8"
                  size={30}
                  color="white"
                />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default DiseasePrediction;
