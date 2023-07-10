/* eslint-disable max-len */
import {
  Money,
  Bag,
  Connection,
  Market,
  Secure,
  Custom,
  Article,
  Groups,
  Help,
  Work,
  Cube,
  Contact,
} from "../assets/Icons";
import Weather from "../assets/Icons/Weather";
import Chart from "../assets/Icons/Chart";
import Track from "../assets/Icons/Track";
import presentationChartLine from "../assets/Icons/presentationChartLine";
import Chat from "../assets/Icons/Chat";
import Mail from "../assets/Icons/Mail";
import Calendar from "../assets/Icons/Calendar";

export const NavLinks = [
  {
    title: "Features",
    subcategories: [
      {
        title: "eagleAI",
        subtitle: "Fast AI search from tailored industry data",
        link: "/eagleAI",
        icon: Cube,
      },
      {
        title: "DocuMindAI",
        subtitle: "Decode docs with fast AI",
        link: "/docuMindAI",
        icon: Chart,
      },
      {
        title: "Global market data",
        subtitle: "Millions of data points, countless insights",
        link: "/data",
        icon: Track,
      },
    ],
  },
  {
    title: "Industries",
    subcategories: [
      {
        title: "🌎 VERRA Carbon Analytics",
        subtitle: "",
        link: "/verraCarbon",
      },
      { title: "🇺🇸 US Grain Markets", subtitle: "", link: "/grains" },
      {
        title: "🇺🇸 US Livestock Markets",
        subtitle: "",
        link: "/livestockus",
      },
      { title: "🇺🇸 US Ethanol Markets", subtitle: "", link: "/ethanolus" },
      { title: "🇺🇸 US Dairy Markets", subtitle: "", link: "/dairyus" },
      {
        title: "🇺🇸 US Horticulture Markets",
        subtitle: "",
        link: "/horticultureus",
      },
      {
        title: "🇦🇺 Australian Grain Farmer",
        subtitle: "",
        link: "/grainfarmer",
      },
      {
        title: "🇦🇺 Australian Livestock Farmer",
        subtitle: "",
        link: "/livestockfarmer",
      },
      {
        title: "🇦🇺 Australian Horticulture Farmer",
        subtitle: "",
        link: "/horticulturefarmer",
      },
      {
        title: "🇦🇺 Australian Wool Grower",
        subtitle: "",
        link: "/wool",
      },
      {
        title: "🇦🇺 Australian Cotton Farmer",
        subtitle: "",
        link: "/cotton",
      },
      {
        title: "🇦🇺 Australian Sugar Farmer",
        subtitle: "",
        link: "/sugar",
      },
      {
        title: "🇦🇺 Australian Fisheries",
        subtitle: "",
        link: "/fisheries",
        icon: "",
      },
      {
        title: "🇦🇺 Australian Wine Grower",
        subtitle: "",
        link: "/wine",
        externalLink: "",
      },
    ],
  },
  { title: "Pricing", url: "/pricing" },
  { title: "Affiliates", url: "https://affiliate.yarta.ai", target: "_blank" },
  {
    title: "Company",
    subcategories: [
      {
        title: "About",
        subtitle: "Learn more about our team",
        link: "/about",
        icon: Groups,
      },
      {
        title: "Careers",
        subtitle: "Come work with us",
        link: "/careers",
        icon: Work,
      },
      {
        title: "Blog",
        subtitle: "Read our latest updates",
        icon: Article,
        externalLink: "https://blog.yarta.io/",
      },
    ],
  },
  {
    title: "Resources",
    subcategories: [
      {
        title: "FAQ",
        subtitle: "Read our Frequently Asked Questions",
        link: "/help-center",
        icon: Help,
      },
      {
        title: "Market quotes board",
        subtitle: "Track global markets in real-time",
        link: "/market_quotes_board",
        icon: presentationChartLine,
      },
      {
        title: "Market chats",
        subtitle: "Free market intel chats",
        link: "/chat",
        icon: Chat,
      },
      {
        title: "Yarta daily",
        subtitle: "Subscribe to the daily market digest email",
        link: "/daily_email",
        icon: Mail,
      },
      {
        title: "Industry events",
        subtitle: "Upcoming industry conferences and events",
        link: "/events",
        icon: Calendar,
      },
    ],
  },
  {
    title: "Get in touch",
    url: "/contact",
  },
];
export const Content = {
  helpCenter: {
    Basics: [
      {
        title: "What is Yarta?",
        subtitle: [
          "Yarta is a physical commodity trading platform that enables companies to easily exchange agricultural commodities.",
          "For traders, that means a private, secure and simple platform that saves time and money.",
          "As a young company we have big ambitions and we are striving to be a trusted partner to help you grow. We are building out additional services in the coming months to support your trading; news and analytics, post-trade management, and financing.",
          "Whether you’re an end user, hedge fund or exporter - Yarta allows you to trade on your terms.",
        ],
      },
      {
        title: "What is the Yarta.ai platform?",
        subtitle: [
          "The Yarta.ai platform is an all-in-one solution that delivers live updates, comprehensive analysis, and vital information on global agricultural markets. With real-time data, advanced analytics, and a user-friendly interface, the platform enables users to track global agriculture market trends, identify opportunities, and make informed decisions.",
        ],
      },
      {
        title: "What types of data and analytics does Yarta.ai have?",
        subtitle: [
          "The Yarta.ai platform provides a wide range of data and analytics, including real-time market updates, AI analysis, weather data, supply and demand analysis, satellite analysis, vessel tracking analysis, and macroeconomic indicators. This comprehensive suite of tools and insights equips users with the information they need to navigate the complex world of global agricultural markets.",
        ],
      },
      {
        title:
          "Do you offer an affiliate program for me to share with my professional network?",
        subtitle: [
          "Yes, we do offer an affiliate program that allows you to share Yarta with your professional network and earn rewards for doing so. You can access our affiliate program at affiliate.yarta.ai. As an affiliate, you'll receive 20% of the revenue for each referral that subscribes to Yarta.ai, for their first 6 months of an active subscription. Join our affiliate program today and start earning while helping others discover the benefits of Yarta.",
        ],
      },
      {
        title: "How frequently is the data on Yarta.ai updated?",
        subtitle: [
          "Yarta.ai is committed to providing the most up-to-date information possible. Our platform updates data in real-time, ensuring you always have access to the latest market trends, news, and analysis.",
        ],
      },
      {
        title: "What kind of support does Yarta offer to its users?",
        subtitle: [
          "Yarta is dedicated to providing exceptional customer support to all users. Our support team is available via email, phone, and chat to answer any questions, address concerns, and guide you through the platform's features. We also offer a comprehensive knowledge base and tutorial videos to help you maximise your Yarta.ai experience.",
        ],
      },
    ],
    Pricing: [
      {
        title: "How much does a subscription cost?",
        subtitle: [
          "The Yarta.ai platform is available at an affordable price of $69 per month (USD). We also offer attractive discounts on annual subscriptions, making it even more cost-effective for long-term users. If you're interested in multiple subscriptions for your company, we provide tailored solutions and special pricing. Please reach out to our team at support@yarta.ai, and we'll be happy to assist you with your specific requirements.",
        ],
      },
      {
        title: "Do I have to enter credit card details on sign-up?",
        subtitle: [
          "No, you do not have to enter your credit card details when signing up for the free trial. We believe in providing a risk-free experience to our users, allowing you to explore the platform and its features without any obligation.",
        ],
      },
      {
        title: "How do I sign up after a trial?",
        subtitle: [
          "After your trial period ends, you can quickly sign up for a paid subscription by logging into your account and selecting a monthly or annual subscription under “Billing”. You will be prompted to enter your payment information and confirm your subscription choice. Once completed, you can continue to enjoy all the benefits and features of the Yarta.ai platform.",
        ],
      },
    ],

    contact: [
      "If you have any questions about our products or services, or you’d like help opening an account, please reach out.",
      "We’re around 24 hours a day from Monday 6am to Friday 5pm Sydney time.",
      "The fastest way to contact us is to reach out on chat in the bottom right hand side corner of this page.",
      "Phone: +61 3 9005 8586",
      "Get in touch with the team via email by filling out the form to the right.",
    ],
  },
  FaqQuestion: {
    Basics: [
      {
        title: "Who is Yarta?",
        subtitle: [
          "Yarta is a leading provider of real-time news, weather, and fundamental data related to global agricultural markets. Our mission is to empower professionals in the agri-market sector with actionable insights and tools to make informed decisions when it comes to global agriculture markets and agronomy.",
        ],
      },
      {
        title: "What is the Yarta.ai platform?",
        subtitle: [
          "The Yarta.ai platform is an all-in-one solution that delivers live updates, comprehensive analysis, and vital information on global agricultural markets. With real-time data, advanced analytics, and a user-friendly interface, the platform enables users to track global agriculture market trends, identify opportunities, and make informed decisions.",
        ],
      },
      {
        title: "Do I have to enter credit card details on sign-up?",
        subtitle: [
          "No, you do not have to enter your credit card details when signing up for the free trial. We believe in providing a risk-free experience to our users, allowing you to explore the platform and its features without any obligation.",
        ],
      },
      {
        title: "How do I sign up after a trial?",
        subtitle: [
          "After your trial period ends, you can quickly sign up for a paid subscription by logging into your account and selecting a monthly or annual subscription under “Billing”. You will be prompted to enter your payment information and confirm your subscription choice. Once completed, you can continue to enjoy all the benefits and features of the Yarta.ai platform.",
        ],
      },
      {
        title: "How much does a subscription cost?",
        subtitle: [
          "The Yarta.ai platform is available at an affordable price of $69 per month (USD). We also offer attractive discounts on annual subscriptions, making it even more cost-effective for long-term users. If you're interested in multiple subscriptions for your company, we provide tailored solutions and special pricing. Please reach out to our team at support@yarta.io, and we'll be happy to assist you with your specific requirements.",
        ],
      },
      {
        title: "What types of data and analytics does Yarta.ai have?",
        subtitle: [
          "The Yarta.ai platform provides a wide range of data and analytics, including real-time market updates, AI analysis, weather data, supply and demand analysis, satellite analysis, vessel tracking analysis, and macroeconomic indicators. This comprehensive suite of tools and insights equips users with the information they need to navigate the complex world of global agricultural markets.",
        ],
      },
      {
        title:
          "Do you offer an affiliate program for me to share with my professional network?",
        subtitle: [
          "Yes, we do offer an affiliate program that allows you to share Yarta with your professional network and earn rewards for doing so. You can access our affiliate program at affiliate.yarta.ai. As an affiliate, you'll receive 20% of the revenue for each referral that subscribes to Yarta.ai, for their first 6 months of an active subscription. Join our affiliate program today and start earning while helping others discover the benefits of Yarta.",
        ],
      },
      {
        title: "How frequently is the data on Yarta.ai updated?",
        subtitle: [
          "Yarta.ai is committed to providing the most up-to-date information possible. Our platform updates data in real-time, ensuring you always have access to the latest market trends, news, and analysis.",
        ],
      },
      {
        title: "What kind of support does Yarta offer to its users?",
        subtitle: [
          "Yarta is dedicated to providing exceptional customer support to all users. Our support team is available via email, phone, and chat to answer any questions, address concerns, and guide you through the platform's features. We also offer a comprehensive knowledge base and tutorial videos to help you maximise your Yarta.ai experience.",
        ],
      },
    ],
  },
  newHomeMission: {
    title: "Save time, money and your sanity.",
    title2: "Save money, your time and your sanity.",
    subtitle: "See the big picture and take action.",
    description: {
      text: "Access powerful real-time insights, turbocharge your analysis, and stay ahead of the competition with",
      link: " Yarta.ai",
      linkUrl: "/",
    },
    missions: [
      "No gimmicks.",
      "No rent-seekers.",
      "As a trusted partner, helping you grow on your terms.",
    ],
  },
  newHome: {
    tradeDirectly: {
      titleBeforeSpan: "One workspace to elevate your",
      titleSpan: "",
      subtitle: "Know what’s happening now and what might happen next.",
      subtitle2:
        "Yarta.ai lets you effortlessly monitor markets while receiving AI-based insights on risk management, farm business management, agronomy, and global carbon markets.",
      description: "",
    },
    tradeDirect: {
      heading: "Powerful AI built just for",
      subheading:
        "Empowering farmers and traders with a next gen AI Q&A answer tool built to serve you.",
      title: "Powerful data and analytics",
      subtitle:
        "Tap into growing list of fundamental and alternative data, proprietary and third-party research and analytics.",
    },
    tradeCash: {
      title: "Custom live news so you never miss a beat",
      subtitle:
        "Stream filtered real time news and analyse the impact of global news in over 100 languages across print, tv and web formats.",
    },
    tradeData: {
      heading: "Stay informed on",
      subheading:
        "Empowering farmers and traders with one central workspace to research global grain, softs, livestock and horticulture markets.",
    },
    agronomyData: {
      heading: "Unlock AI-powered ",
      knowldge: "knowledge fast",
      knowldge2: "insights fast",
      subheading:
        "One workspace to help you make smart and fast decisions on commodity prices, agronomy and farm business management.",
      subheading1:
        "One workspace to help you make smart and fast decisions on Australian wine production, global wine markets and farm business management.",
      subheading2:
        "One workspace to help you make smart and fast decisions on Australian sugar production, global sugar markets and farm business management.",
      subheading3:
        "One workspace to help you make smart and fast decisions on Australian horticulture crop production, markets and farm business management.",
      subheading4:
        "One workspace to help you make smart and fast decisions on Australian sheep production, wool markets and farm business management.",
      subheading5:
        "One workspace to help you make smart and fast decisions on Australian cotton production, global cotton markets and farm business management.",
      subheading6:
        "One workspace to help you make smart and fast decisions on Australian aquaculture production and other industry research.",
      subheading7:
        "One workspace to help you make smart and fast decisions on Australian horticulture crop production, markets and farm business management.",
      subheading8:
        "One workspace to help you make smart and fast decisions on international and U.S. grain market fundamentals, cash markets, news and much more.",
      subheading9:
        "One workspace to help you make smart and fast decisions on U.S. livestock markets, market trends, news and much more.",
      subheading10:
        "One workspace to help you make smart and fast marketing decisions related to U.S. horticulture from apples to onions and everything in between.",
      subheading11:
        "One workspace to help you make smart and fast decisions on U.S. ethanol markets, market trends, news and much more.",
      subheading12:
        "One workspace to help you make smart and fast decisions on international and U.S. dairy markets, market trends, news and much more.",
      subheading13: "Leave behind the endless search for project information.",
      subheading14:
        "One workspace to help you make smart and fast decisions on VERRA carbon projects.",
    },
    liveStock: {
      subheading:
        "One workspace to help you make smart and fast decisions on livestock markets, livestock production and farm business management.",
    },
    docuMindAi: {
      heading: "Rapid insights from",
      subheading: "Do away with Ctrl + F and the endless scrolling.",
      subheading2:
        "Enquiry and chat with a range of industry docs or even your own, to find exactly what you need, when you need it.",
    },
  },
  TradeMarket: {
    title: "by traders, for traders",
    desc1:
      "trading platform that reimagines how commodities can be traded, financed and hedged.",
    desc2:
      "physical agricultural commodities with low transaction fees, enhanced privacy, and access to the biggest players in the market.",
    desc2Span: "Buy and sell  ",
    desc1Span: "high-performance commodity  ",
    descBeforeSpan: "We’re building a  ",
    fundamental: {
      iconName: Money,
      title: "Low Fees",
      desc: "Review macroeconomic and commodity-related data points. Covers key global supply and demand data for over 20 commodities.",
      desc2:
        "Set up custom dashboards by search term, country, language, or topic to track real-time news. Never miss a market-moving headline again.",
      desc3:
        "We’ve done the hard work to bring global weather maps and live weather to one location. Covers precipitation, temperature, radars, soil moisture, vegetation info.",
      desc4:
        "Make smart decisions with our AI tools built on global agricultural industry proprietary datasets. Find what you need, when you need it.",
      desc5:
        "We track futures and esoteric cash markets so you can keep your finger on the pulse.",
      desc6:
        "Giving you the edge on your competition, our alt data tools such as vessel tracking, global news sentiment, and volume along with search metrics give you insight into what is really driving the market.",
    },
    card: [
      {
        iconName: Money,
        title: "Low Fees",
        desc: "Fees on Yarta Trade platform are cheaper than traditional brokerage providers with market intel added benefits.",
      },
      {
        iconName: Market,
        title: "24/7 Market",
        desc: "Seize market opportunities at any time, because you shouldn’t have to wait.",
      },
      {
        iconName: Custom,
        title: "Fully Customisable",
        desc: "Negotiate to secure the best price and flexible terms to help you achieve your trading goals.",
      },
      {
        iconName: Bag,
        title: "Streamline Workflow ",
        desc: "Turbo charge productivity by negotiating and executing in one central platform.",
      },
      {
        iconName: Connection,
        title: "Enhanced Execution ",
        desc: " Bespoke deal terms at size with the biggest counterparties in the market.",
      },
      {
        iconName: Secure,
        title: "Secure and Reliable ",
        desc: "Audited by security teams, trust and privacy are paramount to us.",
      },
    ],
  },
  ourMission: {
    title: "Our mission",
    description:
      "Empowering farmers and traders with a platform to trade, finance and hedge their global agricultural commodities.",
    missions: [
      "No gimmicks.",
      "No rent-seekers.",
      "As a trusted partner, helping you grow on your terms.",
    ],
  },
  blockplatform: {
    tradeDirectly: {
      titleBeforeSpan: "Trade physical agricultural commodities",
      titleSpan: "with ease",
      subtitle:
        "Yarta Trade is a platform providing traders of physical agricultural commodities with a streamlined, reliable, and enhanced trading experience.",
    },
    tradeDirect: {
      title: "The cure for FOMO - powerful data, news and analytics",
      subtitle: {
        text: "Understand what is really driving market moves.",
        text2:
          "Get the edge you’ve been searching for by tapping into our ever growing list of fundamental and alternative data, proprietary and third-party research, news and analytics.",
      },
    },
    tradeDays: {
      title: "Find what you need in seconds, not days",
      subtitle: {
        text: "Search for what you need in seconds across our range of sources.",
        text2:
          "Whether you're an Australian grain farmer looking for agronomy advice or a commodity trader looking for the latest production forecasts, we have it in one east-to-access location.",
      },
    },
    retriavals: {
      title: "Warp speed retrieval",
      subtitle: {
        text: "No longer will you have to scroll through 100 page PDFs to find what you need.",
        text2:
          "Simply chat with our DocuMindAI tool to retrieve important insights.",
      },
    },
    actinable: {
      title: "Actionable insights in seconds, not days ",
      title2: "Find what you need in seconds, not days",
      subtitle: {
        text: "Search for what you need in seconds.",
        text2:
          "Our AI, trained on unique Australian grains data, delivers quick, affordable, and valuable insights when you need them most.",
        text3:
          "Our AI, trained on unique Australian wine industry data, delivers quick, affordable, and valuable insights when you need them most.",
        text4:
          "Our AI, trained on unique Australian sugar industry data, delivers quick, affordable, and valuable insights when you need them most.",
        text5:
          "Our AI, trained on unique Australian horticulture data, delivers quick, affordable, and valuable insights when you need them most.",
        text6:
          "Our AI, trained on unique Australian wool industry data, delivers quick, affordable, and valuable insights when you need them most.",
        text7:
          "Our AI, trained on unique Australian cotton industry data, delivers quick, affordable, and valuable insights when you need them most.",
        text8:
          "Our AI, trained on unique Australian fisheries industry data, delivers quick, affordable, and valuable insights when you need them most.",
        text9:
          "No longer will you have to scroll through 100 page PDFs to find what you need",
        text10: "Simply chat with our AI tools to retrieve important insights.",
        text11:
          "Search for what you need in seconds across our huge range of sources.",
        text12:
          "Whether you’re a U.S. cattle rancher or global livestock trader looking for the latest market info, we have it in one easy to access location.",
        text13:
          "Whether you’re a grower of U.S. vegetables or end consumer looking for the latest market info, we have it in one easy to access location.",
        text14:
          "Whether you’re a U.S. ethanol trader or end user looking for the latest market info, we have it in one easy to access location.",
        text15:
          "Whether you’re a U.S. dairy producer or global end consumer looking for the latest market info, we have it in one easy to access location.",
        text16:
          "We make it easy to summarize projects or find key information about a VERRA project.",
        text17:
          "Our tools enhance your decision-making for key decisions related to the Australian fisheries and aquaculture sector.",
      },
    },
    livestockData: {
      subtitle: {
        text2:
          "Our AI, trained on unique Australian livestock data, delivers quick, affordable, and valuable insights when you need them most.",
      },
    },
    turboCharge: {
      title: "Powerful data and analytics",
      title2: "Turbocharge your results",
      subtitle: {
        text: "Tap into growing list of fundamental and alternative data, proprietary and third-party research and analytics to stay informed.",
        text2: "Looking for an edge to take your business to the next level?",
        text3:
          "EagleAI is trained on true big data from a range of sources to put powerful data and analytics in your hands to elevate your analysis.",
      },
    },
    tradeData: {
      title: "Powerful data and analytics",
      subtitle: {
        text: "Tap into growing list of fundamental and alternative data, proprietary and third-party research and analytics to stay informed.",
      },
    },
    diceData: {
      title: "Slice and dice it how you want",
      subtitle: {
        text: " Understand what is really driving your market.",
        text2:
          "We give you the edge on your competition with our customisable news streams, huge data repository and charts, and industry-based PDF reports.",
      },
    },
    tradeCash: {
      title: "Research at the speed of thought",
      subtitle: {
        text: "Outsource your research and trade like a pro using our AI based tools.",
        text2:
          "Leave the heavy lifting to us and leverage next gen AI to research, plan, strategise and improve your returns.",
      },
    },
    turboCharges: {
      title: "Turbocharge your business bottom-line",
      title2: "Turbocharge your results",
      title3: "Save time and money",
      subtitle: {
        text: "Seeking a boost for your business?",
        text2:
          "Our tools enhance your decision-making in commodity markets, crucial agronomic choices, and key farm management decisions.",
        text3:
          "Our tools enhance your decision-making in commodity markets, Australian wine production, and key farm management decisions.",
        text4:
          "Our tools enhance your decision-making in commodity markets, Australian horticulture production, and key farm management decisions.",
        text5:
          "Our tools enhance your decision-making in commodity markets, Australian sugarw production, and key farm management decisions.",
        text6:
          "Our tools enhance your decision-making in commodity markets, Australian wool production, and key farm management decisions.",
        text7:
          "Our tools enhance your decision-making in commodity markets, Australian wool production, and key farm management decisions.",
        text8:
          "Our tools enhance your decision-making in commodity markets, Australian cotton production, and key farm management decisions.",
        text9:
          "Outsource your research and trade like a pro using our AI based tools.",
        text10:
          "Leave the heavy lifting to us and leverage next gen AI to research, plan, strategize and improve your grain marketing.",
        text11: "Looking for an edge to take your business to the next level?",
        text12:
          "EagleAI is trained on true big data from a range of sources to put powerful data and analytics in your hands to elevate your analysis.",
      },
    },
    livestockCharges: {
      subtitle: {
        text2:
          "Our tools enhance your decision-making in commodity markets, livestock production, and key farm management decisions.",
      },
    },
    tailored: {
      title: "Tailored just for you",
      subtitle: {
        text: "We unlock the power of knowledge on bespoke agricultural industry data from around the globe.",
        text2: "Do away with Ctrl + F on large documents.",
        text3: "Ask, and you shall receive.",
      },
    },
    tradeplatform: {
      title: "Looking for an edge to take your business to the next level?",
      subtitle:
        "EagleAI is trained on true big data from a range of sources to put powerful data and analytics in your hands to elevate your analysis.",
    },
  },
  encrypted: {
    title: "by traders, for traders",
    desc1:
      "trading platform that reimagines how commodities can be traded, financed and hedged.",
    desc2:
      "physical agricultural commodities with low transaction fees, enhanced privacy, and access to the biggest players in the market.",
    desc2Span: "Buy and sell  ",
    desc1Span: "high-performance commodity  ",
    descBeforeSpan: "We’re building a  ",
    card: [
      {
        iconName: Money,
        title: "Fundamental Data",
        desc1:
          "Review macroeconomic and commodity-related data points. Covers key global supply and demand data for over 20 commodities.",
        desc2:
          "Review macroeconomic and commodity-related data points. Covers key global supply and demand data for over 20 commodities.",
        span: "",
      },
      {
        iconName: Custom,
        title: "Stream Live News",
        desc1:
          "Set up custom dashboards by search term, country, language, or topic to track real-time news. Never miss a market-moving headline again.",
        desc2:
          "Set up custom dashboards by search term, country, language, or topic to track real-time news. Never miss a market-moving headline again.",
        span: "",
      },
      {
        iconName: Weather,
        title: "Weather",
        desc1:
          "We’ve done the hard work to bring global weather maps and live weather to one location. Covers precipitation, temperature, radars, soil moisture, vegetation info.",
        desc2:
          "We’ve done the hard work to bring global weather maps and live weather to one location. Covers precipitation, temperature, radars, soil moisture, vegetation info.",
        span: "",
      },
      {
        iconName: Connection,
        title: "eagleAI and DocuMindAI",
        desc1:
          "Make smart decisions with our AI tools built on global proprietary agricultural industry datasets. Find what you need, when you need it.",
        desc2:
          "Make smart decisions with our AI tools built on global proprietary agricultural industry datasets. Find what you need, when you need it.",
        span: "",
      },
      {
        iconName: Bag,
        title: "Market Data",
        desc1:
          "We track futures and esoteric cash markets so you can keep your finger on the pulse.",
        desc2:
          "We track futures and esoteric cash markets so you can keep your finger on the pulse.",
        span: "",
      },
      {
        iconName: Market,
        title: "Alternative Data",
        desc1:
          "Giving you the edge on your competition, our alt data tools cover vessel tracking, satellite analytics and much more.",
        desc2:
          "Giving you the edge on your competition, our alt data tools such as vessel tracking, global news sentiment, and volume along with search metrics give you insight into what is really driving the market.",
        span: "",
      },
    ],
  },

  footer: {
    email: "hello@yarta.com",
    copy: "2022 Yarta.ai. All rights reserved.",
    title: "Keep in touch",
    subtitle: "Feel free to",
    subtitlespan: " reach out ",
    subtitle2: "Feel free to reach out if you have questions, feedback, or simply to have a chat",
    socials: [
      { title: "Twitter", href: "https://twitter.com/Yarta_ai" },
      { title: "Linkedin", href: "https://www.linkedin.com/company/yarta" },
    ],
  },
  footerLinks: {
    Company: [
      {
        title: "About",
        link: "/about",
        icon: Groups,
      },
      {
        title: "Careers",
        link: "/careers",
        icon: Work,
      },
    ],
    Platforms: [
      {
        title: "Yarta.ai",
        link: "/",
        icon: Groups,
      },
    ],
    Resources: [
      {
        title: "Industry Events",
        link: "/events",
        icon: Help,
      },
      {
        title: "Market Chats",
        link: "/chat",
        icon: Help,
      },
      {
        title: "Yarta Daily",
        link: "/daily_email",
        icon: Help,
      },
      {
        title: "FAQ",
        link: "/help-center",
        icon: Help,
      },
      {
        title: "Yarta Blog",
        link: "https://blog.yarta.io/",
        icon: Groups,
      },
    ],
    Contact: [
      {
        title: "Get in touch",
        subtitle: "",
        link: "/contact",
        icon: Groups,
      },
    ],
  },
  faq: {
    title: "FAQ",
  },
};
