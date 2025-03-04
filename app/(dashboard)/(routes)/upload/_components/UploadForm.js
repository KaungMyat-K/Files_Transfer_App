import React, { useState } from "react";
import AlertMsg from "./AlertMsg";
import FilePreview from "./FilePreview";

export default function UploadForm() {
  const [file, setFile] = useState();
  const [message, setMessage] = useState();
  const uploadFile = (data) => {
    console.log("this is data >>> ", data);
    if (data && data.size > 2000000) {
      setMessage("Maximum File Upload Size is 2 MB");
      return;
    }
    setMessage(null);
    setFile(data);
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-900 dark:hover:bg-gray-800 dark:bg-gray-800 hover:bg-gray-950 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-12 h-10 mb-4 text-teal-400 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-xl md:text-2xl text-gray-100 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or{" "}
              <strong className="text-teal-400">drag</strong> and
              <strong className="text-teal-400"> drop</strong>
            </p>
            <p className="text-xs text-gray-100 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX SIZE : 2MB)
            </p>
          </div>
          <input
            onChange={(e) => uploadFile(e.target.files[0])}
            id="dropzone-file"
            type="file"
            className="hidden"
          />
        </label>
      </div>
      {message && <AlertMsg message={message} />}
      {file && <FilePreview file={file} removeFile={() => setFile(null)} />}
      <button
        disabled={!file}
        className="disabled:bg-gray-400 p-2 text-white bg-teal-600 hover:bg-teal-700 w-[30%] rounded-full mt-5 "
      >
        Upload
      </button>
    </div>
  );
}
