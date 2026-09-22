import Sidebar from "@/components/Sidebar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
