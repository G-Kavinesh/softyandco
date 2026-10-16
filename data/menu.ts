export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuCategory {
  title: string;
  tagline: string;
  bg: string;
  ink: string;
  titleColor: string;
  taglineColor: string;
  pillBg: string;
  pillInk: string;
  shadowColor: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    title: "Classic Cones",
    tagline: "Good times guaranteed",
    bg: "#FFF4E2",
    ink: "#4A1530",
    titleColor: "#F6A11E",
    taglineColor: "#E0263C",
    pillBg: "#4A1530",
    pillInk: "#FFF4E2",
    shadowColor: "#4A1530",
    items: [
      { name: "Vanilla Cone", price: "Rs. 200" },
      { name: "Chocolate Cone", price: "Rs. 250" },
      { name: "Dark Chocolate Dipped Cone", price: "Rs. 450" },
    ],
  },
  {
    title: "Sundaes",
    tagline: "All the classics",
    bg: "#E0263C",
    ink: "#FFF4E2",
    titleColor: "#FFF4E2",
    taglineColor: "#F6A11E",
    pillBg: "#4A1530",
    pillInk: "#FFF4E2",
    shadowColor: "#4A1530",
    items: [
      { name: "Strawberry", price: "Rs. 400" },
      { name: "Nutella", price: "Rs. 750" },
      { name: "Hot Choco Fudge", price: "Rs. 500" },
      { name: "Hot Caramelo", price: "Rs. 525" },
    ],
  },
  {
    title: "Sundaes",
    tagline: "Premium flavours",
    bg: "#4A1530",
    ink: "#FFF4E2",
    titleColor: "#FFF4E2",
    taglineColor: "#F08A6C",
    pillBg: "#F08A6C",
    pillInk: "#2A0A18",
    shadowColor: "#E0263C",
    items: [
      { name: "Strawberry Cookies & Cream", price: "Rs. 750" },
      { name: "Pani Kaju Caramelo", price: "Rs. 600" },
      { name: "Choc & Loaded", price: "Rs. 650" },
      { name: "Mango Coconut", price: "Rs. 650" },
      { name: "Milo Fudge", price: "Rs. 750" },
    ],
  },
  {
    title: "Blasts",
    tagline: "Maxxed out",
    bg: "#FFF4E2",
    ink: "#4A1530",
    titleColor: "#F6A11E",
    taglineColor: "#E0263C",
    pillBg: "#4A1530",
    pillInk: "#FFF4E2",
    shadowColor: "#4A1530",
    items: [
      { name: "Strawberry Cheesecake", price: "Rs. 1100" },
      { name: "Cookies & Cream", price: "Rs. 500" },
      { name: "Brownie Caramelo", price: "Rs. 650" },
      { name: "Tiramisu", price: "Rs. 900" },
      { name: "Milo", price: "Rs. 750" },
      { name: "Coconut", price: "Rs. 750" },
      { name: "Choco", price: "Rs. 750" },
    ],
  },
  {
    title: "Milkshakes",
    tagline: "Let's shake it up!",
    bg: "#F6A11E",
    ink: "#4A1530",
    titleColor: "#FFF4E2",
    taglineColor: "#4A1530",
    pillBg: "#4A1530",
    pillInk: "#FFF4E2",
    shadowColor: "#4A1530",
    items: [
      { name: "Vanilla Shake", price: "Rs. 700" },
      { name: "Strawberry Shake", price: "Rs. 700" },
      { name: "Chocolate Shake", price: "Rs. 800" },
      { name: "Cookies & Cream Shake", price: "Rs. 850" },
      { name: "Milo Shake", price: "Rs. 780" },
      { name: "Coffee Shake", price: "Rs. 700" },
    ],
  },
  {
    title: "Floats",
    tagline: "All that fizz",
    bg: "#4CC3EA",
    ink: "#4A1530",
    titleColor: "#FFF4E2",
    taglineColor: "#4A1530",
    pillBg: "#4A1530",
    pillInk: "#FFF4E2",
    shadowColor: "#4A1530",
    items: [
      { name: "Coke Float", price: "Rs. 450" },
      { name: "Fanta Float", price: "Rs. 450" },
      { name: "Sprite Float", price: "Rs. 450" },
    ],
  },
  {
    title: "Toppings",
    tagline: "Add to anything",
    bg: "#F7B8D2",
    ink: "#4A1530",
    titleColor: "#FFF4E2",
    taglineColor: "#4A1530",
    pillBg: "#4A1530",
    pillInk: "#FFF4E2",
    shadowColor: "#4A1530",
    items: [
      { name: "Rainbow Sprinkles", price: "+Rs. 75" },
      { name: "Chocolate Sprinkles", price: "+Rs. 75" },
      { name: "Crushed Cashews", price: "+Rs. 100" },
      { name: "Cookie Crumbs", price: "+Rs. 75" },
      { name: "Pani Kaju", price: "+Rs. 75" },
    ],
  },
];
