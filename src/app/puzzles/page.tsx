"use client";

import React, { useState } from "react";
import { api } from "~/trpc/react";
import CollectionTitle from "../_components/puzzle/CollectionTitle";
import PuzzleCard from "../_components/puzzle/PuzzleCard";

const PuzzlesPage: React.FC = () => {
  const { data } = api.puzzle.getPuzzleCollections.useQuery();
  const [open, setOpen] = useState(true);

  if (!data) return <p>loading...</p>;

  return (
    <div className="m-6">
      {data.map((collection, index) => {
        return (
          <div key={index}>
            <CollectionTitle open={open} setOpen={setOpen} collection={collection} />
            {open && <PuzzleCard collection={collection} />}
          </div>
        );
      })}
    </div>
  );
};

export default PuzzlesPage;
