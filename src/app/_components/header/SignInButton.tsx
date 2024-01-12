"use client";
import { signIn } from "next-auth/react";

export const SignInButton = () => {
  const handleSignin = async () => {
    await signIn("github");
  };

  return <button onClick={handleSignin}>Sign In</button>;
};
