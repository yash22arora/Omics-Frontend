import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const UploadBox: React.FC<{
  onUpload: (file: File | null) => void;
}> = ({ onUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "text/csv": [".csv"],
      "application/vnd.ms-excel": [".csv"],
      "text/comma-separated-values": [".csv"],
      "text/plain": [".csv"],
    },
  });

  useEffect(() => {
    console.log(acceptedFiles);
    if (acceptedFiles.length > 0) {
      onUpload(acceptedFiles[0]);
    } else {
      onUpload(null);
    }
  }, [acceptedFiles, onUpload]);

  return (
    <div {...getRootProps()} className="flex flex-col gap-2  my-4">
      <div className="p-6 border-2 border-dashed cursor-pointer text-center rounded-md">
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 opacity-70">
            <span>Drag and drop the CSV file here</span>
            <span className="opacity-50">- - - or - - -</span>
            <span>Click to select file</span>
          </div>
        )}
      </div>
      {acceptedFiles.length > 0 && (
        <div className="mt-4 p-4 bg-green-500 bg-opacity-[0.15] border border-dashed border-green-500 rounded-md">
          <span className="font-medium dark:text-green-400">
            Selected File:
          </span>
          <span className="ml-2">{acceptedFiles[0].name}</span>
        </div>
      )}
      {acceptedFiles.length === 0 && fileRejections.length > 0 && (
        <div className="mt-4 p-4 bg-red-500 bg-opacity-[0.15] border border-dashed border-red-500 rounded-md">
          <span className=" text-red-500">
            File rejected - Only .csv file is permissible. Multiple files upload
            not allowed.
          </span>
        </div>
      )}
    </div>
  );
};

export default UploadBox;
