const image = {
  image1: "/assets/image/01.jpg",
  image2: "/assets/image/02.jpg",
  image3: "/assets/image/07.jpg",
  image4: "/assets/image/04.jpg",
  image5: "/assets/image/05.jpg",
  image6: "/assets/image/06.jpg",
  lifestyle: "/assets/image/lifestyle.jpg",
  running: "/assets/image/running.jpg",
};
export const icons = {
  icon1: "/assets/icon/png01.png",
  icon2: "/assets/icon/png02.png",
  logo: "/assets/icon/logo.png",
  cart: "/assets/icon/cart.png",
  person: "./assets/icon/person.png",
};

export const footerMenu = {
  mainMenu: [
    "GIFT CARDS",
    "PROMOTIONS",
    "FIND A STORE",
    "SIGN UP FOR EMAIL",
    "BECOME A MEMBER",
    "NIKE JOURNAL",
    "SEND US FEEDBACK",
  ],
  getHelp: [
    "Order Status",
    "Shipping and Delivery",
    "Shipping and Delivery",
    "Returns",
    "Payment Options",
    "Gift Card Balance",
    "Contact Us",
  ],
  adoutNike: ["News", "Careers", "Investors", "Purpose", "Sustainability"],
  subMenu: [
    "Guides",
    "Terms of Sale",
    "Terms of Sale",
    "Nike Privacy Policy",
    "Your Privacy Choices",
  ],
};

export const categories = [
  {
    id: 1,
    message: "Greatness is not born, its is made.",
    img: image.lifestyle,
    title: "LIFE STYLE",
    cat: "lifestyle",
  },
  {
    id: 2,
    message: "All you have to do is pick up your feet.",
    img: image.running,
    title: "RUNNING",
    cat: "running",
  },
];
const SampleImages = [
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-GjGXSP.png",
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00375837-849f-4f17-ba24-d201d27be49b/air-force-1-07-shoes-GjGXSP.png",
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3cc96f43-47b6-43cb-951d-d8f73bb2f912/air-force-1-07-shoes-GjGXSP.png",
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33533fe2-1157-4001-896e-1803b30659c8/air-force-1-07-shoes-GjGXSP.png",
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a300da-2e16-4483-ba64-9815cf0598ac/air-force-1-07-shoes-GjGXSP.png",
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82aa97ed-98bf-4b6f-9d0b-31a9f907077b/air-force-1-07-shoes-GjGXSP.png",
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/120a31b0-efa7-41c7-9a84-87b1e56ab9c3/air-force-1-07-shoes-GjGXSP.png",
  "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1c1e5f55-99c2-4522-b398-2352e01ba566/air-force-1-07-shoes-GjGXSP.png",
];

export const Mockproducts = [
  {
    _id: "61a336eff7dd8d63c1c39094",
    title: "Nike Air Force 1 '07",
    desc: "Taking inspiration from the human body and '90s track aesthetics, the Air Max 95 mixes unbelievable comfort with fast-paced style. The wavy side panels add natural flow to any outfit while visible Nike Air in the heel and forefoot delivers performance comfort.",
    img: SampleImages,
    categories: "jordan",
    gender: "men",
    price: 60,
    existedSize: [5, 6.5, 7, 7.5, 8, 8.5, 9, 10],
  },
  {
    _id: "889",
    title: "Nike Air Max 95",
    desc: "Taking inspiration from the human body and '90s track aesthetics, the Air Max 95 mixes unbelievable comfort with fast-paced style. The wavy side panels add natural flow to any outfit while visible Nike Air in the heel and forefoot delivers performance comfort.",
    img: SampleImages,
    categories: "running",
    gender: "men",
    price: 90,
    existedSize: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 11, 12],
  },
  {
    _id: "7785",
    title: "Nike Air Max 95",
    desc: "Taking inspiration from the human body and '90s track aesthetics, the Air Max 95 mixes unbelievable comfort with fast-paced style. The wavy side panels add natural flow to any outfit while visible Nike Air in the heel and forefoot delivers performance comfort.",
    img: SampleImages,
    categories: "lifestyle",
    gender: "women",
    price: 80,
    existedSize: [5, 5.5, 7, 7.5, 8, 8.5, 9, 10, 10.5, 11, 11.5, 12],
  },
];
