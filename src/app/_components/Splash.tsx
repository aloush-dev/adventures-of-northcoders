"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const Splash = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStart(true);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        className="text-6xl font-extrabold"
      >
        Welcome
      </motion.div>
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="text-6xl font-extrabold"
      >
        To
      </motion.div>
      <div className="flex">
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ delay: 2 }}
          className="text-6xl font-extrabold"
        >
          Advent
        </motion.div>
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ delay: 6 }}
          className="text-6xl font-extrabold text-[#eb1c24]"
        >
          ures{""}
        </motion.div>
        {""}
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ delay: 3 }}
          className="text-6xl font-extrabold"
        >
          Of
        </motion.div>
        {""}
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ delay: 6 }}
          className="text-6xl font-extrabold text-[#eb1c24]"
        >
          {""}North
        </motion.div>
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ delay: 4 }}
          className="text-6xl font-extrabold"
        >
          code
        </motion.div>
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ delay: 6 }}
          className="text-6xl font-extrabold text-[#eb1c24]"
        >
          rs
        </motion.div>
      </div>
    </>
  );
};

{
  /* <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ delay: 2 }}
        className="text-6xl font-extrabold"
      >
        Advent
        <motion.span
          initial={{ opacity: -500 }}
          animate={{ opacity: 10 }}
          transition={{ delay: 4 }}
          className="text-[#eb1c24]"
        >
          ures
        </motion.span>{" "}
        of{" "}
        <motion.span
          initial={{ opacity: -500 }}
          animate={{ opacity: 10 }}
          transition={{ delay: 4 }}
          className="text-[#eb1c24]"
        >
          North
        </motion.span>
        code
        <motion.span
          initial={{ opacity: -500 }}
          animate={{ opacity: 10 }}
          transition={{ delay: 4 }}
          className="text-[#eb1c24]"
        >
          rs
        </motion.span>
      </motion.div> */
}
