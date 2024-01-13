import { Splash } from "./_components/Splash";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-800 text-white">
      <Splash />
    </main>
  );
}
