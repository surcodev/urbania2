'use client'
import Header from "@/components/Header";
import { useState } from "react";

function LayoutProvider({ children }: { children: React.ReactNode }) {



  const getContent = () => {
    return (
      <div>{children}</div>
    )
  }

  return (
    <div>
      <Header />
      {getContent()}
    </div>
  )
}

export default LayoutProvider