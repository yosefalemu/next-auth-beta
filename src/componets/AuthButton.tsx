"use client";

import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";

interface AuthSession {
  serverSession: Session | null;
}

export default function AuthButton({ serverSession }: AuthSession) {
  // Takes in the session from page.tsx, and returns either a
  // sign in or sign out button depending on their authentication
  // status.
  return serverSession ? (
    <button onClick={() => signOut()}>Sign Out</button>
  ) : (
    <button onClick={() => signIn("google")}>Sign In</button>
  );
}
