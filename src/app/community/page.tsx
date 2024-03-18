import React from "react";
import { getCommunityPuzzles } from "~/models/puzzles.model";

const Page = async ({}) => {
  const communityPuzzles = await getCommunityPuzzles();
  return (
    <div>
      {communityPuzzles.map((puzzle) => {
        return (
          <div key={puzzle.id}>
            <h2>{puzzle.puzzleName}</h2>
            <p>created by: {puzzle.UserCreatedBy?.name}</p>
            <p>times completed: {puzzle.completedCount}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
