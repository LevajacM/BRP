import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];
export const pageIcons = [
  {
    id: 1,
    href: "https://www.twitter.com",
    classI: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    classI: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.twitter.com",
    classI: "fab fa-squarespace",
  },
];
export const servicesData = [
  {
    id: 1,
    title: "saving money",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.`,
    icon: "fa-solid fa-wallet",
  },
  {
    id: 2,
    title: "endless hiking",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores.`,
    icon: "fa-solid fa-tree",
  },
  {
    id: 3,
    title: "amazing comfort",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioressss.`,
    icon: "fa-solid fa-socks",
  },
];
export const toursData = [
  {
    id: 1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    days: "6",
    price: "2100",
    pic: tour1,
  },
  {
    id: 2,
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    days: "11",
    price: "1400",
    pic: tour2,
  },
  {
    id: 3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    days: "8",
    price: "5000",
    pic: tour3,
  },
  {
    id: 4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "kenya",
    days: "20",
    price: "3300",
    pic: tour4,
  },
];
