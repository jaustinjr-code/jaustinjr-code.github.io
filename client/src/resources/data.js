// Structured, presentation-agnostic content for the portfolio sections.
// Components consume these arrays so markup stays declarative and content is
// easy to edit in one place. Text lives in strings.js; colors in palette.js.

import ComputerIcon from "@mui/icons-material/ComputerOutlined";
import CloudIcon from "@mui/icons-material/CloudOutlined";
import TerminalIcon from "@mui/icons-material/Terminal";
import TrendIcon from "@mui/icons-material/TrendingUpOutlined";
import StorageIcon from "@mui/icons-material/StorageOutlined";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import WifiIcon from "@mui/icons-material/WifiOutlined";
import PinIcon from "@mui/icons-material/PinDropOutlined";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/SecurityOutlined";
import MailIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import CodeIcon from "@mui/icons-material/Code";
import generatedArticles from "./articles.json";
import {
  ContactEmailAddress,
  ContactEmailChannelLabel,
  ContactLinkedInChannelLabel,
  EmailLabel,
  FrameworkNames,
  GitHubLabel,
  GitHubLink,
  InfraAzureName,
  InfraDatabasesName,
  InfraGitHubActionsName,
  InfraPipelinesName,
  InstagramLabel,
  InstagramLink,
  LinkedInHandleDisplay,
  LinkedInLabel,
  LinkedInLink,
  NavContactLabel,
  NavExperienceLabel,
  NavIntroLabel,
  NavProjectsLabel,
  NavSkillsLabel,
  ProjectStatCoverageLabel,
  ProjectStatCoverageValue,
  ProjectStatDownloadsLabel,
  ProjectStatDownloadsValue,
  ProjectStatLanguageLabel,
  ProjectStatLanguageValue,
  ProjectStatLicenseLabel,
  ProjectStatLicenseValue,
  SkillCSharpName,
  SkillCppName,
  SkillJavaName,
  SkillJavaScriptName,
  SkillKotlinName,
  SkillSqlName,
  SkillLevelAdvanced,
  SkillLevelExpert,
  SkillLevelIntermediate,
  TimelineCountyMetricAfter,
  TimelineCountyMetricBefore,
  TimelineCountyMetricDetail,
  TimelineCountyPeriod,
  TimelineCountySummary,
  TimelineCountyTitle,
  TimelineGarminMetricDetail,
  TimelineGarminMetricLabel,
  TimelineGarminMetricValue,
  TimelineGarminPeriod,
  TimelineGarminSummary,
  TimelineGarminTitle,
} from "./strings.js";

// Anchor ids for each section — the hash router path segment and the DOM id
// the page scrolls to are the same value.
export const SectionIds = {
  intro: "intro",
  experience: "experience",
  projects: "projects",
  skills: "skills",
  contact: "contact",
};

// DOM id of the hero headline (the large "name title"). The NavBar watches it
// to reveal itself only after the name scrolls out of view, iOS-style.
export const HeroHeadingElementId = "hero-heading";

// Primary nav links, in page order.
export const NavLinks = [
  { label: NavIntroLabel, sectionId: SectionIds.intro },
  { label: NavExperienceLabel, sectionId: SectionIds.experience },
  { label: NavProjectsLabel, sectionId: SectionIds.projects },
  { label: NavSkillsLabel, sectionId: SectionIds.skills },
  { label: NavContactLabel, sectionId: SectionIds.contact },
];

// Professional timeline, newest first. `emphasis: "primary"` renders the entry
// with the glowing dynamic-accent treatment; "secondary" uses the teal accent.
export const TimelineEntries = [
  {
    period: TimelineCountyPeriod,
    title: TimelineCountyTitle,
    platformIcons: [ComputerIcon, CloudIcon, StorageIcon],
    summary: TimelineCountySummary,
    emphasis: "primary",
    metric: {
      before: TimelineCountyMetricBefore,
      after: TimelineCountyMetricAfter,
      detail: TimelineCountyMetricDetail,
      icon: SpeedIcon,
    },
  },
  {
    period: TimelineGarminPeriod,
    title: TimelineGarminTitle,
    platformIcons: [PhoneAndroidIcon, BluetoothIcon, WifiIcon, PinIcon],
    summary: TimelineGarminSummary,
    emphasis: "secondary",
    metric: {
      value: TimelineGarminMetricValue,
      label: TimelineGarminMetricLabel,
      detail: TimelineGarminMetricDetail,
    },
  },
];

// Featured project: the primary terminal-window card.
export const MediumParserStats = [
  { label: ProjectStatDownloadsLabel, value: ProjectStatDownloadsValue },
  { label: ProjectStatLanguageLabel, value: ProjectStatLanguageValue },
  { label: ProjectStatCoverageLabel, value: ProjectStatCoverageValue },
  { label: ProjectStatLicenseLabel, value: ProjectStatLicenseValue },
];

// How many articles the feed shows at once (one row of cards on desktop).
export const FeaturedArticleLimit = 3;

// What the feed renders, straight from the file the Update Latest Articles
// workflow regenerates and proposes in a pull request. The field names are
// already the ones useArticles reads, so nothing maps them in between. Until
// that first pull request merges the list is empty and the feed renders
// nothing at all.
export const LatestArticles = generatedArticles.articles;

// Language proficiencies (0-100 drives the bar width).
export const LanguageSkills = [
  { name: SkillJavaScriptName, level: SkillLevelExpert, proficiency: 95 },
  { name: SkillCSharpName, level: SkillLevelAdvanced, proficiency: 90 },
  { name: SkillKotlinName, level: SkillLevelAdvanced, proficiency: 85 },
  { name: SkillJavaName, level: SkillLevelIntermediate, proficiency: 75 },
  { name: SkillSqlName, level: SkillLevelIntermediate, proficiency: 75 },
  { name: SkillCppName, level: SkillLevelIntermediate, proficiency: 70 },
];

export const FrameworkSkills = FrameworkNames;

export const InfrastructureSkills = [
  { name: InfraAzureName, icon: CloudIcon },
  { name: InfraGitHubActionsName, icon: TerminalIcon },
  { name: InfraPipelinesName, icon: TrendIcon },
  { name: InfraDatabasesName, icon: StorageIcon },
];

// Contact channels rendered as round-icon rows in the contact section.
export const ContactChannels = [
  {
    label: ContactEmailChannelLabel,
    display: ContactEmailAddress,
    href: `mailto:${ContactEmailAddress}`,
    icon: MailIcon,
  },
  {
    label: ContactLinkedInChannelLabel,
    display: LinkedInHandleDisplay,
    href: LinkedInLink,
    icon: LinkedInIcon,
  },
];

// Footer social links.
export const FooterLinks = [
  { label: LinkedInLabel, href: LinkedInLink, icon: LinkedInIcon },
  { label: InstagramLabel, href: InstagramLink, icon: InstagramIcon },
  { label: GitHubLabel, href: GitHubLink, icon: GitHubIcon },
  { label: EmailLabel, href: `mailto:${ContactEmailAddress}`, icon: MailIcon },
];
