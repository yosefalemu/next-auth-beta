import AuthButton from "@/componets/AuthButton";
import { auth } from "@/lib/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  console.log("LOGGED IN USER", session?.user);

  return (
    <>
      <div>You are logged in as {session?.user?.email ?? "nobody"}</div>
      <AuthButton serverSession={session} />
    </>
  );
}
