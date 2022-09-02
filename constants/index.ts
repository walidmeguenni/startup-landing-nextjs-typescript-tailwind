import { CardSupportProps } from "./../packages/interfaces/index";
import paypal from "../public/assets/images/paypal.png";
import google from "../public/assets/images/google.png";
import dropbox from "../public/assets/images/dropbox.png";

import icon1 from "../public/assets/images/features/1.png";
import icon2 from "../public/assets/images/features/2.png";
import icon3 from "../public/assets/images/features/3.png";
import icon4 from "../public/assets/images/features/4.png";
import icon5 from "../public/assets/images/features/5.png";
import icon6 from "../public/assets/images/features/6.png";
import Email from "../public/assets/images/icons/1.png";
import Code from "../public/assets/images/icons/2.png";

import news1 from "../public/assets/images/blog/1.png";
import news2 from "../public/assets/images/blog/2.png";
import news3 from "../public/assets/images/blog/3.png";
import news4 from "../public/assets/images/blog/4.png";

export const NavbarListData = [
  {
    path: "#Home",
    label: "Home",
  },
  {
    path: "#Features",
    label: "Features",
  },
  {
    path: "#Pricing",
    label: "Pricing",
  },
  {
    path: "#Support",
    label: "Support",
  },
  {
    path: "#Blog",
    label: "Blog",
  },
  {
    path: "#Faq",
    label: "Faq",
  },
];

export const logos = [
  {
    name: "Paypal",
    src: paypal,
  },
  {
    name: "Google",
    src: google,
  },
  {
    name: "Dropbox",
    src: dropbox,
  },
];

export const featuresData = [
  {
    id: 1,
    icon: icon1,
    path: "#!",
    title: "Email Subscription",
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 2,
    icon: icon2,
    path: "#!",
    title: "Bolt Performance",
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 3,
    icon: icon3,
    path: "#!",
    title: "Secure Transaction",
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 4,
    icon: icon4,
    path: "#!",
    title: "Multiple Options",
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 5,
    icon: icon5,
    path: "#!",
    title: "Customer Support",
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
  {
    id: 6,
    icon: icon6,
    path: "#!",
    title: "Integrated with Shopify",
    description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  },
];
export const catagoryFeatures = [
  "Full Access Library",
  "Multiple user",
  "Refund Policy",
  "Google Analytics",
  "24/7 support",
];

export const ListSupport = [
  "Medical and vision",
  "Life insurance",
  "HSAs and FSAs",
  "Commuter benefits",
];

export const PricingData = [
  {
    id: 1,
    title: "Starter Pack",
    amount: 18.99,
    is_recommended: false,
    library_access: true,
    multiple_user: true,
    refund_policy: false,
    google_analytics: false,
    support: false,
    trial_period: 15,
  },
  {
    id: 2,
    title: "Premium Pack",
    amount: 23.99,
    is_recommended: true,
    library_access: true,
    multiple_user: true,
    refund_policy: true,
    google_analytics: false,
    support: false,
    trial_period: 30,
  },
  {
    id: 3,
    title: "Custom Pack",
    amount: 29.99,
    is_recommended: false,
    library_access: true,
    multiple_user: true,
    refund_policy: true,
    google_analytics: true,
    support: false,
    trial_period: 30,
  },
  {
    id: 4,
    title: "Ultimate Pack",
    amount: 35.99,
    is_recommended: false,
    library_access: true,
    multiple_user: true,
    refund_policy: true,
    google_analytics: true,
    support: true,
    trial_period: 45,
  },
];

export const supportCardData = [
  {
    id: 1,
    image: Email,
    title: "Email client support",
    description:
      "Ultimate access to all credit popular exercises and assessments materials",
  },
  {
    id: 2,
    image: Code,
    title: "Live ticket support",
    description:
      "Total assessment corrections with live support tickets download access system",
  },
];


export const BlogData = [
  {
    id: 1,
    image: news1,
    title: "Introducing our newest team with great experience",
    desc: "Brian Halligan knows that you need more than a great product to have a great brand.",
    link: "#",
    extit: true,
  },
  {
    id: 2,
    image: news2,
    title:
      "New banking application has  developed and we expecting good feedback",
    desc: "",
    link: "#",
    extit: true,
  },{
    id: 3,
    image: news4,
    title: "Develop you design experience with figma features.",
    desc: "",
    link: "",
    extit: false,
  },
  {
    id: 4,
    image: news3,
    title: "Ui/UX industry are doing great job in previous year history",
    desc: "",
    link: "",
    extit: false,
  },
  
];

export const FaqData = [
  {
    id: 1,
    title: "01. Which domain should I purchase?",
    contents: "Get your website tests delivered at the home collect a sample. Simply contact us and we'll move your hosting account from any other provider,regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments."
  },
  {
    id: 2,
    title: "02. What are some tips when choosing a name?",
    contents: "We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments."
      
    
  },
  {
    id: 3,
    title: "03. What if I need help choosing the right domain?",
    contents: " Create a hub for cross-functional work that also works with all. Simply contact us and we'll move your hosting account from any other provider,regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments."
    
  },
  {
    id: 4,
    title: "04. Can I upgrade or downgrade my web hosting subscription system?",
    contents: "The pricing made me a little hesitant at first but I have been. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments."
    
  },
  {
    id: 5,
    title: "05. Learn from community on Brandwagon",
    contents: "Stop your viewers from getting distracted. Publish videos to. Simply contact us and we'll move your hosting account from any other provider,regardless of the control panel. If at anytime your website is down for more than 0.1% result with proper investigation experiments."
    
  },
];

export const menuItems = [
  {
    id: 1,
    title: "Company",
    items: [
      {
        path: "#!",
        label: "About",
      },
      {
        path: "#!",
        label: "Affiliate",
      },
      {
        path: "#!",
        label: "Careers & Culture    ",
      },
      {
        path: "#!",
        label: "Blog",
      },
      {
        path: "#!",
        label: "Press",
      },
    ],
  },
  {
    id: 2,
    title: "About Us",
    items: [
      {
        path: "#!",
        label: "Support Center",
      },
      {
        path: "#!",
        label: "Customer Support",
      },
      {
        path: "#!",
        label: "About Us",
      },
      {
        path: "#!",
        label: "Copyright",
      },
      {
        path: "#!",
        label: "Popular Campaign",
      },
    ],
  },
  {
    id: 3,
    title: "Our Information",
    items: [
      {
        path: "#!",
        label: "Return Policy ",
      },
      {
        path: "#!",
        label: "Privacy Policy",
      },
      {
        path: "#!",
        label: "Terms & Conditions",
      },
      {
        path: "#!",
        label: "Site Map",
      },
      {
        path: "#!",
        label: "Store Hours",
      },
    ],
  },
  {
    id: 4,
    title: "My Account",
    items: [
      {
        path: "#!",
        label: "Press inquiries",
      },
      {
        path: "#!",
        label: "Social media ",
      },
      {
        path: "#!",
        label: "directories",
      },
      {
        path: "#!",
        label: "Images & B-roll",
      },
      {
        path: "#!",
        label: "Permissions",
      },
    ],
  },
  {
    id: 5,
    title: "Policy",
    items: [
      {
        path: "#!",
        label: "Application security",
      },
      {
        path: "#!",
        label: "Software principles",
      },
      {
        path: "#!",
        label: "Unwanted software policy",
      },
      {
        path: "#!",
        label: "Responsible supply chain",
      },
    ],
  },
];

export const footerNav = [
  {
    path: "#!",
    label: "Home",
  },
  {
    path: "#!",
    label: "Advertise",
  },
  {
    path: "#!",
    label: "Supports",
  },
  {
    path: "#!",
    label: "Marketing",
  },
  {
    path: "#!",
    label: "FAQ",
  },
];