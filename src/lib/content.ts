export const APPLY_URL = "https://forms.gle/BmnmzSfuVydG7CoWA";
export const SLACK_URL =
  "https://join.slack.com/t/keploy/shared_invite/zt-357qqm9b5-PbZRVu3Yt2rJIa6ofrwWNg";
export const SITE_URL = "https://devrel.keploy.io";

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#program", label: "Program" },
  { href: "#community", label: "Community" },
  { href: "#faq", label: "FAQ" },
  { href: "/tutorial", label: "Tutorial" },
] as const;

export const stats = [
  { value: "6", label: "Cohorts" },
  { value: "5000", label: "Applications" },
  { value: "330", label: "DevRels" },
  { value: "15", label: "Onboarded" },
] as const;

export const pillars = [
  {
    title: "Learn",
    body: "Learn the day-to-day tasks of a DevRel: product walkthroughs, community support, and how Keploy records API traffic into tests.",
  },
  {
    title: "Make content",
    body: "Write and ship technical content. This is the second most important task of being a DevRel, after talking to developers.",
  },
  {
    title: "Grow with the community",
    body: "If a DevRel person is an actor, the community is their stage. You practice that by showing up in Slack, GitHub, and public writing.",
  },
] as const;

export const benefits = [
  "Learning new skills around APIs and end-to-end testing.",
  "Personal brand development through public writing and talks.",
  "Establishing a voice for yourself and taking ownership of work.",
  "Building relations with developers in the Keploy community.",
  "Engagement with broader developer communities and their culture.",
] as const;

export const faqs = [
  {
    question: "When and where can I share thoughts about the program?",
    answer:
      "You can share feedback whenever you want. Send a private message on Slack.",
  },
  {
    question: "How long are the cohorts?",
    answer:
      "The program is usually a month long, with weekly learning and tasks made to build DevRel skills.",
  },
  {
    question: "What if I need to leave the program?",
    answer:
      "Connect with your program buddy. They will start the offboarding process. The team understands that schedules change.",
  },
] as const;

export const testimonials = [
  {
    name: "Sanskriti Harmukh",
    role: "GitHub Campus Expert",
    image: "/testimonials/sanskriti.jpg",
    quote:
      "If you are looking to step into DevRel and want to learn how it works in an open source organization, Keploy's DevRel Cohort is a space built for that.",
  },
  {
    name: "Animesh Pathak",
    role: "Gold MLSA",
    image: "/testimonials/animesh.jpg",
    quote:
      "My experience of DevRel Cohort 1.0 stayed with me. I improved my skills, and the virtual atmosphere was uplifting. I enjoyed the work with this team.",
  },
  {
    name: "Jyotirmoy Roy",
    role: "IRLamigo",
    image: "/testimonials/roy.jpg",
    quote:
      "Participating as a mentee enriched my knowledge of the DevRel role in an open source company. The program helped me communicate with diverse stakeholders and understand accountability. Mentors gave constant support and concrete feedback.",
  },
  {
    name: "Diganta Kr Banik",
    role: "Web Developer",
    image: "/testimonials/diganta.jpg",
    quote:
      "DevRel was new to me. I learned a lot during the contribution period. If you want to understand the roles and responsibilities of a DevRel, this program is a direct way to do that.",
  },
  {
    name: "Shashwat Gupta",
    role: "Backend Developer",
    image: "/testimonials/shashwat.jpg",
    quote:
      "Immersed in developer relations within open source, I learned effective communication and the role DevRel plays. Mentorship and collaborative peers made the month useful.",
  },
  {
    name: "Barkatul Mujauddin",
    role: "Founder, HackForCode",
    image: "/testimonials/barkatul.jpg",
    quote:
      "Being a mentee taught me the role and responsibilities of a DevRel in an open source organization, and how to communicate with different stakeholders. Mentors were supportive and gave useful feedback.",
  },
] as const;
