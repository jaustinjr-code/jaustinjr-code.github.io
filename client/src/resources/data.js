// Structured, presentation-agnostic content for the portfolio sections.
// Components consume these arrays so markup stays declarative and the content
// is easy to edit in one place. Text lives in strings.js; colors in palette.js.

import { Accents } from "./palette.js";
import {
  GitHubLabel,
  GitHubLink,
  InstagramLabel,
  InstagramLink,
  LinkedInLabel,
  LinkedInLink,
  MediumLabel,
  MediumLink,
  NavAboutLabel,
  NavProjectsLabel,
  NavSkillsLabel,
  NavWritingLabel,
} from "./strings.js";

// Anchor targets for in-page navigation and scroll-spy.
export const SectionIds = {
  hero: "top",
  about: "about",
  skills: "skills",
  projects: "projects",
  writing: "writing",
  contact: "contact",
};

// Primary nav links (the Contact call-to-action is rendered separately).
export const NavLinks = [
  { label: NavAboutLabel, href: `#${SectionIds.about}` },
  { label: NavSkillsLabel, href: `#${SectionIds.skills}` },
  { label: NavProjectsLabel, href: `#${SectionIds.projects}` },
  { label: NavWritingLabel, href: `#${SectionIds.writing}` },
];

// Skill pills, each with an accent dot color.
export const Skills = [
  { name: "React & TypeScript", color: Accents.green },
  { name: "Kotlin & Android", color: Accents.cyan },
  { name: "Swift / iOS", color: Accents.magenta },
  { name: ".NET & C#", color: Accents.orange },
  { name: "SQL & Postgres", color: Accents.yellow },
  { name: "Docker & Azure", color: Accents.green },
  { name: "CI/CD Pipelines", color: Accents.cyan },
  { name: "System Design", color: Accents.magenta },
];

// The kind of device mockup rendered inside a project's demo modal.
export const ProjectKind = Object.freeze({
  mobile: "mobile",
  desktop: "desktop",
  web: "web",
});

// Project types offered to clients. Opening a card reveals a placeholder demo
// whose mockup shape is chosen by `kind`.
export const ProjectTypes = [
  {
    id: "mobile",
    glyph: "M",
    color: Accents.cyan,
    kind: ProjectKind.mobile,
    title: "Mobile App",
    summary:
      "Native or cross-platform Android & iOS apps — from consumer products to internal field tools.",
    description:
      "A placeholder walkthrough of what a mobile engagement looks like: onboarding, a core workflow screen, and a details view. Screens below are illustrative — real projects are built to your product and brand.",
    tags: ["Android (Kotlin)", "iOS (Swift)", "Push notifications", "Offline-first"],
  },
  {
    id: "desktop",
    glyph: "D",
    color: Accents.orange,
    kind: ProjectKind.desktop,
    title: "Internal Desktop Tool",
    summary:
      "Line-of-business dashboards and back-office tools that replace spreadsheets and manual process.",
    description:
      "A placeholder view of an internal tool: sidebar navigation, a data table, and lightweight reporting. This is the shape of dashboards built for ops, finance, and support teams.",
    tags: [".NET / C#", "SQL Server", "Role-based access", "Reporting"],
  },
  {
    id: "web",
    glyph: "W",
    color: Accents.magenta,
    kind: ProjectKind.web,
    title: "Landing Page / Catalog Site",
    summary:
      "Marketing sites and product catalogs built to convert — fast, responsive, and easy to update.",
    description:
      "A placeholder landing page: hero banner up top, catalog grid below. Real builds are tailored to your brand, copy, and product photography.",
    tags: ["Responsive design", "CMS-ready", "SEO basics", "Fast load"],
  },
];

// Social links shown in the About section (compact set).
export const AboutSocials = [
  { label: GitHubLabel, href: GitHubLink },
  { label: LinkedInLabel, href: LinkedInLink },
  { label: MediumLabel, href: MediumLink },
];

// Social links shown in the Contact footer (full set).
export const ContactSocials = [
  { label: GitHubLabel, href: GitHubLink },
  { label: LinkedInLabel, href: LinkedInLink },
  { label: InstagramLabel, href: InstagramLink },
  { label: MediumLabel, href: MediumLink },
];

export default {
  SectionIds,
  NavLinks,
  Skills,
  ProjectKind,
  ProjectTypes,
  AboutSocials,
  ContactSocials,
};
