import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const UploadBox: React.FC<{
  onUpload: (file: File) => void;
}> = ({ onUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    onUpload(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
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
    <div
      {...getRootProps()}
      className="p-6 border border-dashed my-4 cursor-pointer text-center"
    >
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
  );
};

export default UploadBox;
