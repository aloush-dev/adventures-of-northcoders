export const deSlugTitle = (slug: string): string => {
  const words = slug.split("-");

  const titleCase = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return titleCase;
};
