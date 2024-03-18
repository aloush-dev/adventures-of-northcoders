import React from "react";
import CollectionCard from "../_components/puzzle/CollectionCard";
import { getAllCollections } from "~/models/collections.model";

const PuzzlesPage: React.FC = async () => {
  const collections = await getAllCollections();

  if (!collections) return null;

  return (
    <div className="m-6">
      {collections.map((collection, index) => {
        return <CollectionCard key={index} collection={collection} />;
      })}
    </div>
  );
};

export default PuzzlesPage;
