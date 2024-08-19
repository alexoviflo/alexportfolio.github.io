import { color } from "framer-motion";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    barnehage,
    coop,
    janas,   
    carrent,
    jobit,
    threejs,
    database,
    tskjorte,
    pacman,
    kauto,
    sjakk,
    sudoku,
    kotlin,
    snake,
    java,
    firebase,
    kotlins,
    csharp,
    microsoft,
    sql
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Om",
    },
    {
      id: "work",
      title: "Jobb",
    },
    
    {
      id: "contact",
      title: "Kontakt",
    },
  ];
  
   const services = [
    {
      title: "Web Utvikler",
      icon: web,
    },
    {
      title: "React Utvikler",
      icon: mobile,
    },
    {
      title: "Backend Utvikler",
      icon: backend,
    },
    {
      title: "Database Utvikler",
      icon: database,
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
      name: "java",
      icon: java,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "firebase",
      icon: firebase,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "kotlins",
      icon: kotlins,
    },
    {
      name: "csharp",
      icon: csharp,
    },
    {
      name: "microsoft",
      icon: microsoft,
    },
    {
      name: "sql",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "Butikkmedarbeider",
      company_name: "Coop Extra",
      icon: coop,
      iconBg: "#383E56",
      date: "Jan 2021 - Aug 2023",
      points: [
        "Betjene kasse, varepåfylling, yte service og ekspedere kunder.",
       " Sikret høy kundetilfredshet gjennom god kommunikasjon og effektiv problemløsning."
        
      ],
    },
    {
      title: "Barnehagemedarbeider",
      company_name: "Hundvåg barnehage",
      icon: barnehage,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Mar 2021",
      points: [
      "Passe på barna, og hjelpe ansatte med ulike oppgaver  "
      ],
    },
   
    {
      title: "Butikkmedarbeider",
      company_name: "Janas",
      icon: janas,
      iconBg: "#383E56",
      date: "Februar 2017 - September 2019",
      points: [
       "Janas er en bedrift som spesialiserer seg på røking og tilberedning av fisk og ulike sjødelikatesser. Jobben gikk ut på salg av fisk av mange ulike slag, kundebehandling og",
        "opprettholde høy kvalitet på varene."
      ],
    },
    
       
  ];
  
  const testimonials = [
    {
      testimonial:
        "Elsker denne nettsiden, enkelt å bruke og gjør jobben.",
      name: "",
      designation: " ",
      company: " ",
      image: " ",
    },
    {
      testimonial:
        " ",
      name: " ",
      designation: " ",
      company: " ",
      image: " ",
    },
    {
      testimonial:
        " ",
      name: " ",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "3D nettside",
      description:
        "3D-nettside som lar deg endre og forbedre merke og farge på din t-skjorte. Her kan også AI hjelpe deg med å lage en logo, som er koblet til DALL-E. Du sender en prompt til den, og den genererer en logo til deg på min nettside.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tskjorte,
      source_code_link: "https://github.com/alexoviflo/Website-for-editing-t-shirt/tree/main",
    },
    {
      name: "Pacman",
      description:
        "Pac-Man-spill i Java, med 3 ulike nivåer. Du har også 3 liv, og hvis du dør, tilbakestilles spillet. Spøkelsene har en algoritme som følger etter spilleren hvis du kommer nær nok.",
      tags: [
        {
          name: "JavaFX",
          color: "blue-text-gradient",
        },
      
      ],
      image: pacman,
      source_code_link: "https://github.com/alexoviflo/Pacman/tree/master",
    },
    {
      name: "Battle of kauto",
      description:
      'Et spill som tar for seg en hybrid av sjangrene strategi og battle spill. Min hovedoppgave i prosjektet var å jobbe med battle-logikken i spillet, der du skal angripe fiendene og de skal angripe deg. Jeg tok også ansvaret for å lage sprites og det visuelle for spillet.',
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
      ],
      image: kauto,
      source_code_link: "https://github.com/magnuslf1606/Bachelor-oppgave",
    },
    {
      name: "Sjakktrener",
      description:
      'Sjakktrener er en nettside som har som hovedmål å lære deg sjakkåpninger. Det er også muligheter for å teste seg selv mot en AI (datamaskin) med flere vanskelighetsgrader.',
      tags: [
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
        {
          name: "Firebase",
          color: "blue-text-gradient"
        }
      ],
      image: sjakk,
      source_code_link: "https://github.com/EvenR98/Gruppe11-sjakktrener?tab=readme-ov-file",
    },
    
    {
      name: "Strømpris app",
      description:
      'App hvor man kan sjekke strømprisen for de ulike regionene i Norge. Her kan du sammenligne prisene. Appen henter data fra et API og bruker dataene til å vise dem til brukeren.',
      tags: [
        {
          name: "Kotlin",
          color: "blue-text-gradient",
        }
      ],
      image: kotlin,
      source_code_link: "https://github.com/Zekima/StromprisApp",
    },
    {
      name: "Slange spill",
      description:
      'Spill hvor du skal spise epler for å bli større. Slange spill, her er målet å ikke gå utfor skjermen eller spise sin egen hale',
      tags: [
        {
          name: "JavaFX",
          color: "green-text-gradient",
        },
        {
          name: "SQLite",
          color: "pink-text-gradient",
        }
      ],
      image: snake,
      source_code_link: "https://github.com/alexoviflo/Snake.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };