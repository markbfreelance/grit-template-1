export type Registration = {
  slug: string;
  title: string;
  type: string;
  date: string;
  location: string;
  divisions: string[];
  spots: number;
  spotsLeft: number;
  price: string;
  image: string;
  description: string;
  includes: string[];
  deadline: string;
};

export const registrations: Registration[] = [
  {
    slug: "spring-classic",
    title: "GRIT SPRING CLASSIC",
    type: "Tournament",
    date: "April 12–14, 2026",
    location: "Performance City Sports Complex",
    divisions: ["8U", "10U", "12U", "14U"],
    spots: 32,
    spotsLeft: 8,
    price: "$250",
    image: "/placeholders/offer1.png",
    description:
      "Our flagship spring tournament. Teams compete across 4 age divisions in a 3-day round-robin and bracket format. All games played on turf fields with certified officials.",
    includes: [
      "3 guaranteed games",
      "Bracket play for top teams",
      "Tournament t-shirt per player",
      "Digital scoreboard & livestream",
    ],
    deadline: "March 28, 2026",
  },
  {
    slug: "elite-showcase",
    title: "ELITE SHOWCASE 2026",
    type: "Showcase",
    date: "May 3, 2026",
    location: "Grit Elite Training Facility",
    divisions: ["16U", "18U"],
    spots: 16,
    spotsLeft: 3,
    price: "$175",
    image: "/placeholders/offer2.jpg",
    description:
      "A college recruiting showcase for elite 16U and 18U athletes. College coaches will be in attendance evaluating players. Film and highlight packages available.",
    includes: [
      "Full day of games & drills",
      "College coach evaluation",
      "Highlight film package",
      "1-on-1 coach Q&A session",
    ],
    deadline: "April 18, 2026",
  },
  {
    slug: "summer-kickoff",
    title: "GRIT SUMMER KICKOFF",
    type: "Tournament",
    date: "June 21–22, 2026",
    location: "Riverside Athletic Park",
    divisions: ["8U", "10U", "12U", "14U", "16U"],
    spots: 40,
    spotsLeft: 22,
    price: "$200",
    image: "/placeholders/offer3.jpg",
    description:
      "Kick off summer the right way. A 2-day tournament open to 5 age divisions with prizes for top finishers. Concessions, vendor booths, and family activities on site.",
    includes: [
      "2 guaranteed pool games",
      "Single elimination bracket",
      "Awards ceremony",
      "Family activities & vendors",
    ],
    deadline: "June 7, 2026",
  },
];
