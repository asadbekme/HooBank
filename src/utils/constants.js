import {
  send,
  shield,
  star,
  people01,
  people02,
  people03
} from "../assets";

export const navigationLinks = [
  {
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
    id: 'feedbacks',
    title: 'Feedbacks'
  },
  {
    id: 'clients',
    title: 'Clients'
  },
];

export const stats = [
  {
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

export const features = [
  {
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

export const feedbacks = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];