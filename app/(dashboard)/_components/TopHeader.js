import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function TopHeader() {
  return (
    <div className="flex p-5 shadow-md shadow-black/50 items-center justify-between md:justify-end">
      <AlignJustify className="md:hidden" />
      <Image
        src="/logo.png"
        width={50}
        height={10}
        alt="logo"
        className="md:hidden"
      ></Image>
      <UserButton />
    </div>
  );
}
