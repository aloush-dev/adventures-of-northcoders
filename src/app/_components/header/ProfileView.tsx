"use client";

import Image from "next/image";
import React, { useState } from "react";
import { type DefaultSession } from "next-auth";
import ProfileModal from "./ProfileModal";

const ProfileView = ({ session }: { session: DefaultSession }) => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <button onClick={handleClick} className="flex items-end justify-center">
      <h3 className="mr-4 text-lg font-extrabold">
        <span className="text-base font-normal">Hello,</span>{" "}
        {session.user?.name}
      </h3>
      <Image
        className="h-10 w-10 rounded-full bg-gray-900"
        width={50}
        height={50}
        src={session?.user?.image ? session?.user.image : ""}
        alt="Your profile image"
      />

      <ProfileModal menu={menu} session={session} />
    </button>
  );
};

export default ProfileView;
