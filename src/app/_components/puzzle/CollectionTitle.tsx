import React, { type Dispatch, type SetStateAction } from "react";
import { deSlugTitle } from "~/utils/utils";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

interface CollectionTitleProps {
  collection: { collectionName: string };
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

const CollectionTitle: React.FC<CollectionTitleProps> = ({
  collection,
  setOpen,
  open,
}) => {
  return (
    <button
      className="w-full rounded-lg bg-slate-200 p-2 text-xl font-bold text-slate-800 justify-between items-center flex px-4"
      onClick={() => setOpen((current) => !current)}
    >
      {deSlugTitle(collection.collectionName)}
      {open ? <SlArrowUp /> : <SlArrowDown />}
    </button>
  );
};

export default CollectionTitle;
