"use client";

import AppLogo from "@/client-components/AppLogo";
import Appheader from "@/client-components/Appheader";
import Link from "next/link";
import Buttons from "@/ui/Buttons";

export default function Home() {
  return (
    <main>
      <Appheader />
      <AppLogo />
      <Buttons text="Hello" />
      <div>
        <Link href={"/"}>หน้าแรก</Link> | {""}
        <Link href={"about/"}>About</Link> |{" "}
        <Link href={`about/${1}`}>About id </Link>
      </div>
    </main>
  );
}
