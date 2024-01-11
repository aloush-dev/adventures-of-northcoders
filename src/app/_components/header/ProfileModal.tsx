"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const ProfileModal = ({ children }: React.PropsWithChildren) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const modalContent = <div>hello{children}</div>;

  return mounted ? createPortal(modalContent, document.body) : null;
};

export default ProfileModal;
