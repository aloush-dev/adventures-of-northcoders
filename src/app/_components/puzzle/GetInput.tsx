"use client";
import React from "react";
import MainButton from "../ui/MainButton";
import { IoDownload } from "react-icons/io5";

type GetInputProps = {
  input: string;
  part_1_complete: boolean | null;
};

const GetInput: React.FC<GetInputProps> = ({ input, part_1_complete }) => {
  const downloadTxtFile = () => {
    // Step 2: Create a Blob from the text
    const blob = new Blob([input], { type: "text/plain" });

    // Step 3: Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Step 4: Trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = "input.txt";
    document.body.appendChild(link); // Append to html link element
    link.click();

    // Step 5: Clean up by removing the link and revoking the Blob URL
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <MainButton onClick={downloadTxtFile}>
      Download Input{" "}
      <div className="text-2xl items-center px-2">
        <IoDownload />
      </div>
    </MainButton>
  );
};

export default GetInput;
