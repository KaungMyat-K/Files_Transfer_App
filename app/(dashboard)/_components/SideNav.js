"use client";
import { File, Shield, Upload } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const menuList = [
  {
    id: 1,
    name: "Upload",
    icon: Upload,
    path: "/upload",
  },
  {
    id: 2,
    name: "Files",
    icon: File,
    path: "/files",
  },
  {
    id: 3,
    name: "Upgrade",
    icon: Shield,
    path: "/upgrade",
  },
];
export default function SideNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" shadow-md h-full shadow-black/50">
      <div className=" pl-10 p-5">
        <Image src="/logo.png" width={50} height={10} alt="logo"></Image>
      </div>
      <div className="flex flex-col  justify-center items-center">
        {menuList.map((data) => (
          <button
            onClick={() => setActiveIndex(data.id)}
            key={data.id}
            className={`flex gap-2 p-4 pl-3 px-0 hover:bg-teal-600 w-full text-gray-500 hover:text-white ${
              activeIndex === data.id ? "bg-teal-500 text-white" : null
            }`}
          >
            <data.icon />
            <h2>{data.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}
