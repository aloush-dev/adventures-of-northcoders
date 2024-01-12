"use client";

import { type DefaultSession } from "next-auth";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const ProfileModal = ({
  children,
  session,
}: {
  children: React.ReactNode;
  session: DefaultSession;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const modalContent = (
    <div className="absolute mr-2 mt-20 flex flex-col rounded-lg bg-gray-300 p-4 text-gray-900">
      {children}
      <button>Sign Out</button>
    </div>
  );

  if (!session) return null;

  return mounted ? createPortal(modalContent, document.body) : null;
};

export default ProfileModal;
