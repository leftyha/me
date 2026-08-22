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
    { id: "github", label: "GitHub", href: "https://github.com/leftyha" },
    { id: "linkedin", label: "LinkedIn", href: null },
    { id: "email", label: "Email", href: null },
  ] as ProfileLink[],
};

export const availableLinks = profile.links.filter((link): link is ProfileLink & { href: string } => Boolean(link.href));
