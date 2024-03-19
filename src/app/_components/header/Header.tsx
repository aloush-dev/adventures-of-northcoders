import React from "react";
import { getServerAuthSession } from "~/server/auth";
import ProfileView from "../header/ProfileView";
import { SignInButton } from "../header/SignInButton";
import Link from "next/link";

export async function Header() {
  const session = await getServerAuthSession();

  return (
    <header className="flex items-center justify-between bg-gray-700 p-4 text-white">
      <div className="flex items-center gap-4">
        <Link href="/">
          <h1 className="text-3xl font-extrabold tracking-tight ">
            A<span className="text-[#eb1c24]">o</span>N
          </h1>
        </Link>
        {session ? <Link href="/puzzles">Puzzles</Link> : ""}
        {session ? <Link href="/progress">My Progress</Link> : ""}
        {session ? <Link href="/create">Create Your Own Puzzle</Link> : ""}
      </div>
      <div className="h-auto w-auto">
        {session ? <ProfileView session={session} /> : <SignInButton />}
      </div>
    </header>
  );
}
