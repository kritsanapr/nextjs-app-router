"use client";

import React from "react";
import { useEffect } from "react";

type Props = {};

export default function Appheader({}: Props) {
  useEffect(() => {
    console.log("Appheader mounted");
    return () => {
      console.log("Appheader unmounted");
    };
  }, []);

  return (
    <div>
      Appheader
      <div className="flex flex-row">
        {process.env.NEXT_PUBLIC_ANALYTICS_ID}
      </div>
    </div>
  );
}
