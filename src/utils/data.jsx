//PROJECT ASSETS
import AirPulse from "assets/projects/air_pulse_img.webp";
import Momentum from "assets/projects/momentum_image.webp";
import Democratic_India from "assets/projects/democratic_india_img.webp";
import Loom from "assets/projects/loom_image.webp";
import Trails from "assets/projects/trails_image.webp";

//ToolImages
import Chatgpt from "assets/tools/chatgpt.svg";
import Claude from "assets/tools/claude.svg";
import Lovable from "assets/tools/lovable.svg";

//-------------------------------------------------------------------------------
export const descriptionData = [
  {
    id: 1,
    text: "I’m a Full Stack Developer with 3 years of experience, specializing in React and the MERN stack. I build scalable applications with reliable code grounded in clarity, consistency, and problem-solving.",
  },
  {
    id: 2,
    text: "I’ve worked across diverse projects involving dynamic interfaces, data visualization, and real-time communication, delivering features that are performant, maintainable, and production-ready.",
  },
  {
    id: 3,
    text: "I stay current with modern technologies and continuously sharpen my skills, ensuring every product I build meets high standards of functionality and scalability.",
  },
];

export const projectData = [
  {
    id: 1,
    project_name: "Air Pulse",
    subtitle: "Weather App",
    tech_used: ["React", "Material UI", "Openweather Api", "Redux", "Recharts"],
    card_desc: "Enter a location and get current weather and air quality.",
    description: "",
    overview:
      "Air Pulse provides users with up-to-date weather information for any city they search. Users can view the current weather conditions, including temperature, humidity, and wind speed, along with the Air Quality Index (AQI) to understand the environmental quality.",
    // icon: <Droplet />,
    image: AirPulse,
    github: "https://github.com/manbac13/air_pulse",
    live: "https://airpulse.vercel.app/",
  },
  {
    id: 2,
    project_name: "Democratic India",
    subtitle: "Dashborad App",
    tech_used: [
      "React",
      "Node.js",
      "Express.js",
      "Material UI",
      "Redux",
      "Recharts",
    ],
    description: "",
    card_desc: "Get to know Indian Democracy in a better way.",
    overview:
      "The Democratic India App is an informative platform that offers comprehensive data about the Indian Parliament and its Members of Parliament (MPs). Users can explore detailed information about MPs, their constituencies, and their political affiliations. The app features dynamic dashboards with interactive charts that showcase the state-wise distribution of parliamentary seats, demographic insights, and population statistics.",
    // icon: <Droplet />,
    image: Democratic_India,
    github: "https://github.com/manbac13/democratic_india_frontend",
    live: "https://democraticindia.vercel.app/",
  },
  {
    id: 3,
    project_name: "Momentum",
    subtitle: "Task Planner",
    tech_used: ["React", "Material UI", "Ant D", "Redux", "Recharts"],
    card_desc: "Gather momentum by completing daily targets on time.",
    description: "",
    overview:
      "The Momentum App is a productivity tool designed for seamless task management through an intuitive drag-and-drop interface. Users can create, edit, and delete tasks, organizing them into customizable states or categories. With its smooth drag-and-drop functionality, users can easily transfer tasks across different states, such as To Do, In Progress, and Completed.",
    // icon: <Droplet />,
    image: Momentum,
    github: "https://github.com/manbac13/momentum",
    live: "https://momentum-theta.vercel.app/",
  },
  {
    id: 4,
    project_name: "Loom",
    subtitle: "A Movie Exploration App",
    tech_used: [
      "React",
      "Axios",
      "Redux Toolkit",
      "React Router",
      "Material UI",
    ],
    card_desc: "Discover movies, cast details, and more with ease.",
    description: "",
    overview:
      "Loom is an engaging movie exploration application powered by the TMDB API. It enables users to search for movies, view detailed information about their cast, and organize their cinematic discoveries. The app features a sleek and responsive interface designed with Material UI, efficient state management through Redux Toolkit, and robust API integration using Axios for a seamless user experience.",
    // icon: <Droplet />,
    image: Loom,
    github: "https://github.com/manbac13/loom",
    live: "https://loom-six.vercel.app/",
  },
  {
    id: 5,
    project_name: "Trails",
    subtitle: "Interactive Map",
    tech_used: ["React", "React-Leaflet", "Material UI"],
    card_desc: "Discover UNESCO World Heritage sites.",
    description: "",
    overview:
      "Trails is an interactive mapping application that highlights UNESCO World Heritage sites worldwide. Built with React-Leaflet for dynamic maps, users can explore locations and view detailed information about each site. The application combines Material UI for a sleek and responsive design with React for seamless rendering, offering a visually rich and informative user experience. Trails serves as a gateway to cultural exploration through technology.",
    // icon: <Droplet />,
    image: Trails, // Replace with the appropriate variable for your image
    github: "https://github.com/manbac13/trails", // Replace with the actual GitHub link
    live: "https://trails-rouge.vercel.app/", // Replace with the actual live link
  },
];

export const experincesData = [
  {
    id: 1,
    timePeriod: "2024 - Present",
    comapany: "Chisel Solutions",
    role: "Full Stack Developer",
  },
  {
    id: 2,
    timePeriod: "2022 - 2024",
    comapany: "Servicepack.ai",
    role: "Junior Developer",
  },
];

export const toolData = {
  design: [
    {
      id: 2,
      tool_name: "Tailwind CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      background: "#141414",
      path: "https://tailwindcss.com/",
    },
    {
      id: 1,
      tool_name: "Material UI",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
      background: "transparent",
      path: "https://mui.com/",
    },

    {
      id: 3,
      tool_name: "Ant D",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/antdesign/antdesign-original.svg",
      background: "transparent",
      path: "https://ant.design/",
    },
  ],
  development: [
    {
      id: 1,
      tool_name: "ReactJS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      background: "#141414",
      path: "https://react.dev/",
    },
    {
      id: 2,
      tool_name: "NodeJS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      background: "transparent",
      path: "https://nodejs.org/en",
    },
    {
      id: 3,
      tool_name: "Javascript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      background: "transparent",
      path: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
  ],
  platforms: [
    {
      id: 1,
      tool_name: "Github",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      background: "#fff",
      path: "https://github.com/",
    },
    {
      id: 2,
      tool_name: "Vercel",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
      background: "#fff",
      path: "https://vercel.com/",
    },
    {
      id: 3,
      tool_name: "Netlify",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
      background: "transparent",
      path: "https://www.netlify.com/",
    },
  ],
  ai: [
    {
      id: 1,
      tool_name: "ChatGPT",
      image: Chatgpt,
      background: "#fff",
      path: "https://chatgpt.com/",
    },
    {
      id: 2,
      tool_name: "Claude",
      image: Claude,
      background: "transparent",
      path: "https://chatgpt.com/",
    },
    {
      id: 3,
      tool_name: "Lovable",
      image: Lovable,
      background: "transparent",
      path: "https://lovable.dev/",
    },
  ],
};
