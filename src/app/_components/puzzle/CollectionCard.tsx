"use client";

import React, { useState } from "react";
import { deSlugTitle } from "~/utils/utils";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import PuzzleCard from "./PuzzleCard";

interface CollectionCardProps {
  collection: { collectionName: string };
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="my-2">
      <button
        className="flex w-full items-center justify-between rounded-lg bg-slate-200 p-2 px-4 text-xl font-bold text-slate-800"
        onClick={() => setOpen((current) => !current)}
      >
        {deSlugTitle(collection.collectionName)}
        {open ? <SlArrowUp /> : <SlArrowDown />}
      </button>
      {open && <PuzzleCard collection={collection} />}
    </div>
  );
};

export default CollectionCard;
