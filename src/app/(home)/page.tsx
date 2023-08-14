import AppLogo from "@/client-components/AppLogo";
import Appheader from "@/client-components/Appheader";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Appheader />
      <AppLogo />

      <div>
        <Link href={"/"}>หน้าแรก</Link> | {""}
        <Link href={"about/"}>About</Link> |{" "}
        <Link href={`about/${1}`}>About id </Link>
      </div>
    </main>
  );
}
