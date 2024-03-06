import { db } from "~/server/db";

export async function getAllCollections() {
  return db.collection.findMany();
}
