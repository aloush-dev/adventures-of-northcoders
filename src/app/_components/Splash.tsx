"use client";

import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import React from "react";

export const Splash = ({ authed }: { authed: boolean }) => {
  const loginAndRedirect = async () => {
    await signIn("github");
  };

  return (
    <div className="min-h-screen-act flex flex-col justify-center items-center">
      <motion.div
        initial={{ y: -1500 }}
        animate={{ y: 0 }}
        className="text-6xl font-extrabold"
      >
        Welcome
      </motion.div>
      <motion.div
        initial={{ y: -1500 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="text-6xl font-extrabold"
      >
        To
      </motion.div>
      <div className="flex">
        <motion.div
          initial={{ y: -1500 }}
          animate={{ y: 0 }}
          transition={{ delay: 2 }}
          className="text-6xl font-extrabold"
        >
          Advent
        </motion.div>
        <motion.div
          initial={{ y: -1500 }}
          animate={{ y: 0 }}
          transition={{ delay: 6 }}
          className="text-6xl font-extrabold text-[#eb1c24]"
        >
          ures{""}
        </motion.div>
        {""}
        <motion.div
          initial={{ y: -1500 }}
          animate={{ y: 0 }}
          transition={{ delay: 3 }}
          className="text-6xl font-extrabold"
        >
          Of
        </motion.div>
        {""}
        <motion.div
          initial={{ y: -1500 }}
          animate={{ y: 0 }}
          transition={{ delay: 6 }}
          className="text-6xl font-extrabold text-[#eb1c24]"
        >
          {""}North
        </motion.div>
        <motion.div
          initial={{ y: -1500 }}
          animate={{ y: 0 }}
          transition={{ delay: 4 }}
          className="text-6xl font-extrabold"
        >
          code
        </motion.div>
        <motion.div
          initial={{ y: -1500 }}
          animate={{ y: 0 }}
          transition={{ delay: 6 }}
          className="text-6xl font-extrabold text-[#eb1c24]"
        >
          rs
        </motion.div>
      </div>

      {authed ? (
        <motion.button
          initial={{ y: -1500 }}
          animate={{ y: 0 }}
          transition={{ delay: 7 }}
          className="absolute bottom-0 right-0 m-20 flex items-center justify-center rounded-lg bg-gray-200 p-4 text-2xl font-semibold text-gray-600"
        >
          Lets go!
        </motion.button>
      ) : (
        <motion.button
          onClick={loginAndRedirect}
          initial={{ y: -1500 }}
          animate={{ y: 0 }}
          transition={{ delay: 7 }}
          className="absolute bottom-0 right-0 m-20 flex items-center justify-center rounded-lg bg-gray-200 p-4 text-2xl font-semibold text-gray-600"
        >
          Lets go!
        </motion.button>
      )}
    </div>
  );
};
