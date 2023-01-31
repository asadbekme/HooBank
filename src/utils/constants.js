import {
  send,
  shield,
  star
} from "../assets";

export const navigationLinks = [{
    id: 'home',
    title: 'Home'
  },
  {
    id: 'features',
    title: 'Features'
  },
  {
    id: 'product',
    title: 'Product'
  },
  {
    id: 'clients',
    title: 'Clients'
  },
  {
    id: 'partners',
    title: 'Partners'
  }
];

export const stats = [{
    id: "stats-1",
    title: "User Active",
    value: "4500+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "320+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$245M+",
  },
];

export const features = [{
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content: "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content: "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content: "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];