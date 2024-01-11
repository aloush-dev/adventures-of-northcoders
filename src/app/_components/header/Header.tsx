import React from "react";
import { getServerAuthSession } from "~/server/auth";
import ProfileView from "../header/ProfileView";

export async function Header() {
  const session = await getServerAuthSession();

  return (
    <header className="flex justify-between bg-gray-700 p-4 text-white">
      <h1 className="text-3xl font-extrabold tracking-tight ">
        Adventures <span className="text-[hsl(280,100%,70%)]">of</span>{" "}
        Northcoders
      </h1>
      <button className="h-auto w-auto">
        {session ? <ProfileView session={session} /> : "Sign In"}
      </button>
    </header>
  );
}
