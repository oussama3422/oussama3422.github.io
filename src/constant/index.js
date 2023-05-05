import {
    mobile,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,   
    creaskale,
    flutter,
    dart,
    currentWork,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Flutter Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Dart",
      icon: dart,
    },
  ];
  
  const experiences = [
    {
      title: "Flutter Developer",
      company_name: "Creaskale",
      icon: creaskale,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing mobile applications using Flutter.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-mobile compatibility.",
      ],
    },
  ];
  
 
  
  const projects = [
    {
      name: "Social Media App",
      description:
        "social media app allow to user to do challenges,by posting videos and more...",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
      ],
      image: currentWork,
      source_code_link: "https://github.com/",
    },
  
  ];
  
  export { services, technologies, experiences, projects };