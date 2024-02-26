"use client";

import { api } from "~/trpc/react";
import { ProgressCard } from "./ProgressCard";

export const ProgressSummary = () => {
  const { data } = api.puzzle.getAllPuzzles.useQuery();

  if(!data) return <p>loading....</p>

  return (
    <div className="grid grid-flow-row grid-cols-4 gap-4">
      {data?.map((solution, index) => {
        return <ProgressCard key={index} />;
      })}
    </div>
  );
};
