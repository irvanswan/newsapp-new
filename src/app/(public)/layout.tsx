import dynamic from "next/dynamic";
import { ContainerComponentProps } from "@/utils/layout.utils";
import React from "react";

const Footer = dynamic(() => import('@/components/organisms/Footer/Footer'));
const Navbar = dynamic(() => import('@/components/organisms/Navbar'));

export default function PublicLayout({ children }: ContainerComponentProps) {
  return (
    <React.Fragment>
      <Navbar/>
      {children}
      <Footer />
    </React.Fragment>
  )
}