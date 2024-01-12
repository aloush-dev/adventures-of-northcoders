"use client";

import { type DefaultSession } from "next-auth";
import { signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 80 }}
      exit={{ y: 0 }}
      className="absolute right-0 top-0 mr-2 flex flex-col rounded-lg bg-gray-300 p-4 text-gray-900"
    >
      {children}
      <button
        onClick={() => signOut()}
        className="rounded-lg bg-gray-900 p-2 text-gray-300"
      >
        Sign Out
      </button>
    </motion.div>
  );

  if (!session) return null;

  return mounted ? createPortal(modalContent, document.body) : null;
};

export default ProfileModal;
