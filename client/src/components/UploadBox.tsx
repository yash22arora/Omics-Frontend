import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const UploadBox: React.FC<{
  onUpload: (file: File) => void;
}> = ({ onUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    onUpload(acceptedFiles[0]);
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

  return (
    <div {...getRootProps()} className="flex flex-col gap-2  my-4">
      <div className="p-6 border-2 border-dashed cursor-pointer text-center">
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
        <div className="mt-4">
          <span className="font-medium text-green-500">Selected File:</span>
          <span className="ml-2">{acceptedFiles[0].name}</span>
        </div>
      )}
      {acceptedFiles.length === 0 && fileRejections.length > 0 && (
        <div className="mt-4">
          <span className="font-medium text-red-500">
            File rejected - Only .csv file is permissible. Multiple files upload
            not allowed.
          </span>
        </div>
      )}
    </div>
  );
};

export default UploadBox;
