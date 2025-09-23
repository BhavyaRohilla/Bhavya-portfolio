import logos from "./logos";

type ProjectName = "devGram" | "dogmash" | "covid19" | "connect4" | "getItDone";
// | "urlShortener"
// | "thisWebsite"
// | "theMealHub"
// | "pokemon"
// | "jokes";

export type StackType = { label: string; logo: string; invert?: boolean };

export type ProjectType = {
  title: string;
  description: string[];
  images: {
    webm?: string;
    mp4?: string;
    main?: { link: string; height: number; width: number };
    poster?: string;
    vidHeight?: number;
    vidWidth?: number;
  };
  links: { github?: string; live: string };
  stack: StackType[];
  special?: { text: string; link: string };
};

type Projects = {
  [K in ProjectName]: ProjectType;
};

const projects: Projects = {
  devGram: {
    title: "Expense Tracker Ai",
    description: [
      "A modern **expense tracking app** built with **Next.js**, **Prisma**, and **PostgreSQL**.",
      "Users can **record** daily expenses, **categorize** them, and get **AI-powered insights** into their spending habits.",
      "Includes **secure authentication**, **responsive UI**, and real-time **data management**.",
    ],

    images: {
      main: {
        link: "/project/devGram/poster.png",
        width: 1182,
        height: 732,
      },
    },
    stack: [
      // logos.trpc,
      logos.nextjs,
      logos.react,
      // logos.mongodb,
      // logos.graphql,
      logos.typescript,
      // logos.nodejs,
      logos.reactQuery,
      // logos.materialui,
    ],
    links: {
      live: "https://expense-tracker-ai-ten.vercel.app/",
      github: "https://github.com/BhavyaRohilla/Expense-Tracker-AI",
    },
  },

  dogmash: {
    title: "DevTinder",
    description: [
      "**Create**, **like**, and **comment** on posts in a social media-like environment, DevTinder is inspired by popular social networking platforms.",
      "This is a **full-stack** project built using **React.js** for frontend, **Node.js** with **Express.js** for backend, and **MongoDB** as the database. Users can securely register, login, and interact with posts.",
      "The project includes an **Admin panel** to manage posts and moderate content, ensuring a safe platform for users.",
      "All interactions are stored in **MongoDB**, and authentication is handled using **JWT tokens**.",
      "The UI is fully **responsive**, styled using **Tailwind CSS**, and optimized for both desktop and mobile users.",
    ],

    images: {
      main: {
        link: "/project/dogmash/dogmash.png",
        width: 1182,
        height: 732,
      },
    },
    stack: [
      logos.nodejs,
      logos.expressjs,
      // logos.s3,
      logos.mongodb,
      logos.react,
      logos.ejs,
    ],
    links: {
      github: "https://github.com/BhavyaRohilla/DevConnect",
      live: "",
    },
  },
  covid19: {
    title: "The Wild Oasis",
    description: [
      "**Full-stack cabin booking platform** built using **Next.js**, **Supabase**, and **Tailwind CSS**.",
      "Users can browse detailed **cabin listings** with images, descriptions, and availability, and make seamless **bookings** with real-time updates.",
      "The app features **user authentication** with **Google OAuth** via **NextAuth.js**, ensuring secure login and personalized user experiences.",
      "An **admin panel** allows admins to manage bookings and moderate content efficiently.",
      "The application includes **responsive UI** optimized for both desktop and mobile devices, and a **date picker** for selecting booking dates using **react-day-picker**.",
    ],

    images: {
      main: {
        link: "/project/covid-19/poster.png",
        width: 1182,
        height: 732,
      },
    },
    stack: [logos.nextjs, logos.react, logos.typescript, logos.vercel],
    links: {
      github: "https://github.com/BhavyaRohilla/The-Wild-Oasis-Client",
      live: "https://the-wild-oasis-client-orpin.vercel.app/",
    },
  },
  connect4: {
    title: "Fast React Pizza Company",
    description: [
      "**Full-stack pizza ordering app** built with **React**, **React Router**, and **useReducer** for state management.",
      "Users can **browse pizzas**, **customize toppings**, **add to cart**, and **place orders** seamlessly with a responsive UI.",
      "The application includes **cart management** using **useReducer**, ensuring predictable and maintainable state updates.",
      "Orders and menu data are handled through **local JSON or API**, simulating a real-world pizza ordering workflow.",
      "The UI is **fully responsive**, styled with **CSS modules** and modern design principles for desktop and mobile devices.",
    ],

    stack: [logos.react, logos.javascript, logos.redux],
    links: {
      github: "https://github.com/BhavyaRohilla/fast-react-pizza-co",
      live: "https://fast-react-pizza-company-aa.netlify.app/",
    },
    images: {
      main: {
        link: "/project/connect-4/poster.png",
        width: 1182,
        height: 732,
      },
    },
  },
  getItDone: {
    title: "WorldWise",
    description: [
      "A travel companion app built as part of **Jonas Schmedtmann's React course.**",
      "The app allows users to **mark places on a world map** that they have visited or plan to visit.",
      "Users can **add notes** and **dates** for each location, making it a personal travel diary.",
      "Built with **React** and styled for a clean and intuitive user experience.",
      "Deployed on **Netlify** for seamless access from anywhere.",
    ],
    links: {
      github: "https://github.com/BhavyaRohilla/WorldWise",
      live: "https://tourworldwise.netlify.app/",
    },
    stack: [logos.react, logos.javascript, logos.redux],
    images: {
      main: {
        link: "/project/get-it-done/main.png",
        width: 1182,
        height: 732,
      },
    },
  },
  // urlShortener: {
  //   title: "URL shortener",
  //   description: [
  //     "My very first **fullstack Typescript** web application.",
  //     "As the title suggests, the app can be used to shorten urls that can be shared with anyone on the internet.",
  //     "A **QR code** is also generated when submitting a URL that can be scanned to redirect to the original URL.",
  //     "The frontend is built using **React** with **Material-UI** for styling.",
  //     "The backend is build with **Node.js** with **Express.js** framework along with **MongoDB** database to store the URLs.",
  //   ],
  //   images: {
  //     main: {
  //       link: "/project/url-short/main.png",
  //       width: 964,
  //       height: 751,
  //     },
  //   },
  //   links: {
  //     github: "https://github.com/BhavyaCodes/url-shortener-ts-backend",
  //     live: "https://short-url-three.vercel.app/",
  //   },
  //   stack: [
  //     logos.typescript,
  //     logos.react,
  //     logos.expressjs,
  //     logos.materialui,
  //     logos.mongodb,
  //     logos.nodejs,
  //   ],
  // },
  // thisWebsite: {
  //   title: "This website",
  //   description: [
  //     "My portfolio website build with **React** using **Next.js** framework.",
  //     "The source code is writtin in **100% TypeScript** and the project is easy to maintain with the **type safety** provided by Typescript. The source code is very **moduler** allowing easy **debugging.**",
  //     "Styling is done using **Material-UI**, the website comes with two **themes, dark and light.**",
  //     "Animations are done using two libraries, **react-spring** for the bouncy logo animations, and **framer-motion** for page transitions.",
  //     "**next/image** which is a new Next.js 10 feature is being used to automatically resize images according to display and also **prevent html elements shifting** from slow loading images.",
  //     "This description is typed as **markdown** in source code, the Project component takes in props for links, icons, title, images, etc; nothing is hard coded.",
  //   ],
  //   links: {
  //     live: "https://bhavya.dev",
  //     github: "https://github.com/BhavyaCodes/portfolio",
  //   },
  //   stack: [
  //     logos.typescript,
  //     logos.nextjs,
  //     logos.react,
  //     logos.materialui,
  //     logos.reactSpring,
  //     logos.framerMotion,
  //   ],
  //   images: {
  //     main: {
  //       link: "/project/portfolio/main.png",
  //       width: 859,
  //       height: 509,
  //     },
  //   },
  // },
  // theMealHub: {
  //   title: "The Meal Hub",
  //   description: [
  //     "A simple recipe application made for a **live workshop** I conducted on my friend's **[discord server](https://discord.gg/vtbc5EktTm)**.",
  //     "Goal of the workshop was to make a small recipe app using **[TheMealDB api](https://www.themealdb.com/)** and learn about React hooks, **useState, useEffect, useRef** and **react-router-dom** for routing.",
  //     "Note - styling was not done during the workshop, as the focus was more on React concepts.",
  //   ],
  //   links: {
  //     live: "https://recipe-material-ui-juggernaut9.vercel.app/",
  //     github: "https://github.com/BhavyaCodes/recipe-material-ui",
  //   },
  //   stack: [logos.react, logos.materialui],
  //   images: {
  //     main: {
  //       link: "/project/the-meal-hub/main.png",
  //       height: 841,
  //       width: 1195,
  //     },
  //   },
  // },
  // pokemon: {
  //   special: {
  //     text: "hacktoberfest - 55 pull requests",
  //     link: "https://github.com/BhavyaCodes/pokemon/pulls?q=is%3Apr+is%3Aclosed",
  //   },
  //   title: "Pokemon",
  //   description: [
  //     "I started this projects for beginners in **open source** to help them make their first **pull request** on Github for **Hacktoberfest.**",
  //     "I learned a lot about **merge conflits,** **github issues,** and **maitaining open source project** while also helping lots of people make their contribution count for Hacktoberfest.",
  //     "The project received about **55 pull requests in total!!**",
  //   ],
  //   links: {
  //     live: "https://pokemon-hacktoberfest.vercel.app/",
  //     github: "https://github.com/BhavyaCodes/pokemon",
  //   },
  //   stack: [logos.github, logos.git, logos.react, logos.bootstrap],
  //   images: {
  //     main: {
  //       link: "/project/pokemon/main.png",
  //       height: 936,
  //       width: 1020,
  //     },
  //   },
  // },
  // jokes: {
  //   title: "Lit Jokes",
  //   description: [
  //     "Jokes app build using **React** and styled using **Material-UI.**",
  //     "The app uses **[Sv443's JokeAPI](https://v2.jokeapi.dev/)** to fetch jokes.",
  //     "features of the app are **filtering** jokes by category, **searching** jokes, **Blacklisting** controversial/inappropriate jokes.",
  //     "Users can also **favorite a joke**, after which they may view it on the **[favorites page](https://jokes-hooks.vercel.app/favorites)** by navigating to it thought the navbar.",
  //     "There are also two ways to **share jokes**, either copy the link that will take you to the webpage for that joke, or copy the joke directly to computer's **clipboard.**",
  //   ],
  //   links: {
  //     live: "https://jokes-hooks.vercel.app/",
  //     github: "https://github.com/BhavyaCodes/Jokes-v2",
  //   },
  //   stack: [logos.react, logos.materialui],
  //   images: {
  //     main: {
  //       link: "/project/jokes/main.png",
  //       width: 1273,
  //       height: 873,
  //     },
  //   },
  // },
};

export default projects;
