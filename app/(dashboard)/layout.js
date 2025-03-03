import React from "react";
import SideNav from "./_components/SideNav";
import TopHeader from "./_components/TopHeader";

export default function Layout({ children }) {
  return (
    <div>
      <div className=" h-full md:w-38 flex-col fixed inset-y-0 z-50 md:flex hidden">
        <SideNav />
      </div>
      <div className="md:ml-38 ">
        <TopHeader />
        {children}
      </div>
    </div>
  );
}
