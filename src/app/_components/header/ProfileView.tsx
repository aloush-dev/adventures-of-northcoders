"use client";

import Image from "next/image";
import React from "react";
import { type DefaultSession } from "next-auth";

const ProfileView = ({ session }: { session: DefaultSession }) => {
  return (
    <div className="flex items-end justify-center">
      <h3 className="mr-4 text-lg font-extrabold">{session.user?.name}</h3>
      <Image
        className="h-10 w-10 bg-gray-900 rounded-full"
        width={50}
        height={50}
        src={session?.user?.image ? session?.user.image : ""}
        alt="Your profile image"
      />
    </div>
  );
};

export default ProfileView;
