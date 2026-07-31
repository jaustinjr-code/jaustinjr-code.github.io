// Structured, presentation-agnostic content for the portfolio sections.
// Components consume these arrays so markup stays declarative and content is
// easy to edit in one place. Text lives in strings.js; colors in palette.js.

import CloudIcon from "@mui/icons-material/CloudOutlined";
import TerminalIcon from "@mui/icons-material/Terminal";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoardOutlined";
import StorageIcon from "@mui/icons-material/StorageOutlined";
import WatchIcon from "@mui/icons-material/WatchOutlined";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import BluetoothIcon from "@mui/icons-material/Bluetooth";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/SecurityOutlined";
import MailIcon from "@mui/icons-material/MailOutline";
import LinkIcon from "@mui/icons-material/Link";
import CodeIcon from "@mui/icons-material/Code";
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
  LinkedInHandleDisplay,
  LinkedInLabel,
  LinkedInLink,
  NavContactLabel,
  NavExperienceLabel,
  NavIntroLabel,
  NavProjectsLabel,
  NavSkillsLabel,
  NodeSyncDescription,
  NodeSyncOrderTag,
  NodeSyncTitle,
  NodeSyncWindowTitle,
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
    summary: TimelineGarminSummary,
    emphasis: "secondary",
    metric: {
      value: TimelineGarminMetricValue,
      label: TimelineGarminMetricLabel,
      detail: TimelineGarminMetricDetail,
      icons: [WatchIcon, PhoneAndroidIcon, BluetoothIcon],
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

// Featured project: the secondary module card.
export const NodeSyncProject = {
  windowTitle: NodeSyncWindowTitle,
  orderTag: NodeSyncOrderTag,
  title: NodeSyncTitle,
  description: NodeSyncDescription,
  icon: SecurityIcon,
  tags: ["RUST", "GRPC", "REDIS"],
};

// Language proficiencies (0-100 drives the bar width).
export const LanguageSkills = [
  { name: SkillJavaScriptName, level: SkillLevelExpert, proficiency: 95 },
  { name: SkillCSharpName, level: SkillLevelAdvanced, proficiency: 90 },
  { name: SkillKotlinName, level: SkillLevelAdvanced, proficiency: 85 },
  { name: SkillCppName, level: SkillLevelIntermediate, proficiency: 75 },
  { name: SkillJavaName, level: SkillLevelAdvanced, proficiency: 80 },
];

export const FrameworkSkills = FrameworkNames;

export const InfrastructureSkills = [
  { name: InfraAzureName, icon: CloudIcon },
  { name: InfraGitHubActionsName, icon: TerminalIcon },
  { name: InfraPipelinesName, icon: DeveloperBoardIcon },
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
    icon: LinkIcon,
  },
];

// Footer social links.
export const FooterLinks = [
  { label: LinkedInLabel, href: LinkedInLink, icon: LinkIcon },
  { label: GitHubLabel, href: GitHubLink, icon: CodeIcon },
  { label: EmailLabel, href: `mailto:${ContactEmailAddress}`, icon: MailIcon },
];
