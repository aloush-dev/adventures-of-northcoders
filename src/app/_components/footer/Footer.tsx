import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-gray-700 p-4 text-center text-white">
      Made by{"\u00A0"}
      <Link
        className="font-extrabold"
        href="https://aloush.dev"
        target="_blank"
      >
        Ali
      </Link>
      {"\u00A0&\u00A0"}
      <Link
        className="font-extrabold"
        href="https://www.linkedin.com/in/mark-tyree/"
        target="_blank"
      >
        Mark
      </Link>
    </footer>
  );
};
