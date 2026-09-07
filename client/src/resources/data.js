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
import articleCodeReviewImage from "@assets/article-code-review.jpg";
import articleScalingSystemsImage from "@assets/article-scaling-systems.jpg";
import articleSecretStorageImage from "@assets/article-secret-storage.jpg";
import {
  ArticleCodeReviewDescription,
  ArticleCodeReviewLink,
  ArticleCodeReviewTag,
  ArticleCodeReviewTitle,
  ArticleScalingSystemsDescription,
  ArticleScalingSystemsLink,
  ArticleScalingSystemsTag,
  ArticleScalingSystemsTitle,
  ArticleSecretStorageDescription,
  ArticleSecretStorageLink,
  ArticleSecretStorageTag,
  ArticleSecretStorageTitle,
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

// Featured publications rendered by the article feed. The shape is provider
// agnostic: `imageLink`, `title`, and `link` are required, everything else is
// optional metadata that the card renders only when present. Swapping this
// array for a fetched feed (e.g. medium-rss-feed-parser) is the only change
// needed to make the feed live — see useArticles for the mapping seam.
//
// `imageLink` points at the bundled copies in client/src/assets/ rather than
// Medium's CDN, so these three cards don't depend on a third party being up
// (and don't leak the visitor's IP/user-agent to Medium on every page load).
// A future fetched feed will supply its own remote image URLs instead.
//
// `readTimeMinutes` is a manual estimate until a feed provides it.
export const FeaturedArticles = [
  {
    title: ArticleSecretStorageTitle,
    description: ArticleSecretStorageDescription,
    link: ArticleSecretStorageLink,
    imageLink: articleSecretStorageImage,
    tags: [ArticleSecretStorageTag],
    readTimeMinutes: 7,
  },
  {
    title: ArticleCodeReviewTitle,
    description: ArticleCodeReviewDescription,
    link: ArticleCodeReviewLink,
    imageLink: articleCodeReviewImage,
    tags: [ArticleCodeReviewTag],
    readTimeMinutes: 6,
  },
  {
    title: ArticleScalingSystemsTitle,
    description: ArticleScalingSystemsDescription,
    link: ArticleScalingSystemsLink,
    imageLink: articleScalingSystemsImage,
    tags: [ArticleScalingSystemsTag],
    readTimeMinutes: 6,
  },
];

// How many articles the feed shows at once (one row of cards on desktop).
export const FeaturedArticleLimit = 3;

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
