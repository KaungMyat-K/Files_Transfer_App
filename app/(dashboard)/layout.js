import React from "react";
import SideNav from "./_components/SideNav";

export default function Layout({ children }) {
  return (
    <div>
      <div className=" h-full w-38 flex-col fixed inset-y-0 z-50">
        <SideNav />
      </div>
      <div className="ml-38 ">{children}</div>
    </div>
  );
}
