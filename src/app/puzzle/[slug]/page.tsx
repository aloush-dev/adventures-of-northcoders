/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PuzzleMain } from "../../_components/puzzle/PuzzleMain";

export default async function PuzzlePage({
  params,
}: {
  params: { slug: string };
}) {
  return <PuzzleMain puzzleId={params.slug} />;
}
