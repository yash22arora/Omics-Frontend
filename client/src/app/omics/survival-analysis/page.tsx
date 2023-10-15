"use client";

import ResultContainer from "@/components/ResultContainer";
import UploadBox from "@/components/UploadBox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import axiosInstance from "@/lib/axios";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import test from "@/assets/about.png";

import { useEffect, useState } from "react";
import { getPNGUrl, saveAs } from "@/lib/utils";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const SurvivalAnalysis = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<string>("");
  const [plot1, setPlot1] = useState<string | null>();
  const [plot2, setPlot2] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    setResult("");
    setPlot1(null);
    setPlot2(null);
    setLoading(true);
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    try {
      const data = await axiosInstance.post<string>("/survive", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setResult(data.data);

      const plot1 = await axiosInstance.post("/surviveplot", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob", //TODO: VERYYYY IMPORTANT
      });

      const plot1Url = getPNGUrl(plot1.data);
      setPlot1(plot1Url);

      const plot2 = await axiosInstance.post("/surviveplot1", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob", //TODO: VERYYYY IMPORTANT
      });

      const plot2Url = getPNGUrl(plot2.data);
      setPlot2(plot2Url);

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
        <h1 className="text-3xl font-medium">Survival Analyis</h1>
        <Separator />
        <UploadBox onUpload={setFile} />
        <Button
          disabled={file === null}
          onClick={handleSubmit}
          className=" ml-auto min-h-max max-h-full"
        >
          {loading && <Loader2 className="mr-2 animate-spin" size={20} />}
          Get Output
        </Button>
        <div className="my-4 w-full">
          <Tabs defaultValue="result" className="w-full flex flex-col">
            <TabsList className="w-3/4 mx-auto h-max mb-4 bg-[hsl(var(--secondary))]">
              <TabsTrigger value="result" className="w-1/2">
                Result
              </TabsTrigger>
              <TabsTrigger value="plot1" className="w-1/2">
                Brier Curve
              </TabsTrigger>
              <TabsTrigger value="plot2" className="w-1/2">
                Kaplan Meier Curve
              </TabsTrigger>
            </TabsList>
            <TabsContent value="result">
              <ResultContainer className="mt-8">
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
            <TabsContent value="plot1">
              {plot1 ? (
                <Image
                  src={plot1}
                  alt="Brier Curve"
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
            <TabsContent value="plot2">
              {plot2 ? (
                <Image
                  src={plot2}
                  alt="Brier Curve"
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

export default SurvivalAnalysis;
