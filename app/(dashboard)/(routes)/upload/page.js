"use client";
import React from "react";
import UploadForm from "./_components/UploadForm";

export default function Upload() {
  return (
    <div className="p-5 px-8 md:px-28">
      <h2 className="text-[20px] text-center m-5">
        Start <strong className="text-teal-700">Uploading</strong> File and{" "}
        <strong className="text-teal-700">Share</strong> it
      </h2>
      <UploadForm />
    </div>
  );
}
