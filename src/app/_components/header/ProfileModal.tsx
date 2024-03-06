"use client";

import { type DefaultSession } from "next-auth";
import { signOut } from "next-auth/react";
import React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const ProfileModal = ({
  menu,
  session,
}: {
  menu: boolean;
  session: DefaultSession;
}) => {
  if (
    typeof global.window !== "undefined" ||
    typeof global.document !== "undefined"
  ) {
    return null;
  }
  const modalContent = (
    <AnimatePresence>
      {menu && (
        <motion.div
          initial={{ y: -80 }}
          animate={{ y: 80 }}
          exit={{ y: -80 }}
          className="absolute right-0 top-0 mr-2 flex flex-col rounded-lg bg-gray-300 p-4 text-gray-900"
        >
          <button
            onClick={() => signOut()}
            className="rounded-lg bg-gray-900 p-2 text-gray-300"
          >
            Sign Out
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!session) return null;

  return createPortal(modalContent, document.body);
};

export default ProfileModal;
