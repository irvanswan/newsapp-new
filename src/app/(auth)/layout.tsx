import dynamic from "next/dynamic";
import { ContainerComponentProps } from "@/utils/layout.utils";
import React from "react";

const Footer = dynamic(() => import('@/components/organisms/Footer/Footer'));

export default function AuthLayout({ children }: ContainerComponentProps) {
  return (
    <React.Fragment>
      {children}
      <Footer />
    </React.Fragment>
  )
}