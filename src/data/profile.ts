export type ProfileLink = {
  id: "github" | "linkedin" | "email";
  label: string;
  href: string | null;
};

export const profile = {
  name: "Leonardo Mora",
  shortName: "LM",
  jobTitle: "Software Engineer",
  yearsOfExperience: 7,
  siteUrl: "https://leftyha.github.io/me/",
  links: [
    { id: "email", label: "Email", href: "mailto:leonardo.ced916@gmail.com" },
    { id: "github", label: "GitHub", href: "https://github.com/lefhiro-s" },
    { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/leonardo-david-mora-cede%C3%B1o-36602a155" },
  ] as ProfileLink[],
};

export const availableLinks = profile.links.filter((link): link is ProfileLink & { href: string } => Boolean(link.href));
