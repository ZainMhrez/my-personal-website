export interface IProjects {
  id: number;
  title: string;
  code: string;
  live: string;
  technologies: string[];
}

export const projectsArr: IProjects[] = [
  {
    id: 1,
    title: "Simple Cryptocurrencies Website",
    code: "https://github.com/ZainMhrez/simple-cryptocurrencies-website",
    live: "https://zainmhrez.github.io/simple-cryptocurrencies-website/",
    technologies: [
      "Reactjs",
      "Typescript",
      "tailwindcss",
      "React Query",
      "React Router",
      "Framer Motion",
    ],
  },
  {
    id: 2,
    title: "React REST Countries API",
    code: "https://github.com/ZainMhrez/React-REST-Countries-API",
    live: "https://zainmhrez.github.io/React-REST-Countries-API/",
    technologies: [
      "Reactjs",
      "React Router",
      "Context API",
      "Sass/scss",
      "Axios",
      "Framer Motion",
    ],
  },
  {
    id: 3,
    title: "Time tracking dashboard",
    code: "https://github.com/ZainMhrez/react-time-tracking-dashboard",
    live: "https://zainmhrez.github.io/react-time-tracking-dashboard/",
    technologies: ["Reactjs", "Context API", "Sass/scss", "Axios"],
  },
  {
    id: 4,
    title: "Rock Paper Scissors Game",
    code: "https://github.com/ZainMhrez/Rock-Paper-Scissors-Game",
    live: "https://zainmhrez.github.io/Rock-Paper-Scissors-Game/",
    technologies: ["HTML5", "Sass/scss", "Javascript", "Flexbox", "Animation"],
  },
  {
    id: 5,
    title: "Todo App",
    code: "https://github.com/ZainMhrez/todo-app-frontend-mentor",
    live: "https://zainmhrez.github.io/todo-app-frontend-mentor/",
    technologies: [
      "HTML5",
      "Sass/scss",
      "Javascript",
      "Flexbox",
      "SortableJS",
      "Local storage",
    ],
  },
  {
    id: 6,
    title: "Calculator App",
    code: "https://github.com/ZainMhrez/Calculator-app-frontend-mentor",
    live: "https://zainmhrez.github.io/Calculator-app-frontend-mentor/",
    technologies: [
      "HTML5",
      "Sass/scss",
      "Flexbox",
      "Grid",
      "Javascript",
      "Local storage",
    ],
  },
];
