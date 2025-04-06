const data = {
  name: "Carlos Vidal Puigcerver",
  address: "Callosa d'en Sarrià, Alicante, Spain",
  email: "carlosvidalpuigcerver@gmail.com", 
  avatar:"/images/carlos.png", 
  aboutMe:
    "I'm Carlos Vidal, a passionate IT professional with over 13 years of experience as a computer science teacher at RCInformática. I'm responsible, hardworking, polite, and good at dealing with people. I love learning and improving every day in the world of technology. Currently, I'm studying a Higher Technician Degree in Web Application Development and a Full Stack Master's program.",

    educations : [
      {
        degree: "Higher Technician in Administration and Finance",
        university: "Almadrava Official Institute",
        location: "Benidorm, Spain",
        graduationYear: 2003,
        image: "/images/finanzas.jpg"
      },
      {
        degree: "Higher Technician in Web Application Development (DAW)",
        university: "Prometeo by The Power",
        location: "Madrid, Spain",
        graduationYear: "Ongoing since 2024",
        image: "/images/thepower.png"
      },
      {
        degree: "Full Stack Web Development Master's Program",
        university: "Prometeo by The Power",
        location: "Madrid, Spain",
        graduationYear: "Ongoing since 2024",
        image: "/images/fullstack.png"
      },
      {
        degree: "CorelDraw Design Course",
        university: "RCInformática",
        location: "Callosa d'en Sarrià, Spain",
        graduationYear: 2015,
        image: "/images/corel.png"
      },
      {
        degree: "Applied Accounting for Business",
        university: "RCInformática",
        location: "Callosa d'en Sarrià, Spain",
        graduationYear: 2020,
        image: "/images/contabilidad.jpeg"
      },
      {
        degree: "Microsoft Word Course",
        university: "RCInformática",
        location: "Callosa d'en Sarrià, Spain",
        graduationYear: 2019,
        image: "/images/word.jpg"
      },
      {
        degree: "Microsoft Excel Course",
        university: "RCInformática",
        location: "Callosa d'en Sarrià, Spain",
        graduationYear: 2022,
        image: "/images/excel.jpg"
      },
    ],

  workExperience: [
    {
      position: "Computer Science Teacher and administration in a business environment.",
      company: "RCInformática",
      startDate: "2012",
      endDate: "04/04/2025",
      description:
        "For over a decade, I have been teaching computer skills to students of various levels, covering digital literacy, office software, and programming. I also provide guidance on using technological tools in professional environments.",
    },
  ],

  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "GitHub",
    "Office Tools",
    "Networks",
    "Databases",
    "ICT Teaching",
    "Vite",
    "Systems",
  ],

  projects: [
    {
      title: "Flexbox project",
      description: "In this project i learned to use flexbox",
      image:"/images/flexbox-project.png",
      tech: ["HTML5", "CSS3"],
      github: "https://github.com/Cvidal84/entrega_flexbox in CSS",
      link: "https://entrega-flexbox.netlify.app",
    },
    {
      title: "Grid project",
      description: "In this project i learned to use grid in CSS",
      image:"/images/grid-project.png",
      tech: ["HTML5", "CSS3"],
      github: "https://github.com/Cvidal84/entrega_grid",
      link: "https://entrega-grid-thepower.netlify.app",
    },
    {
      title: "Project 1",
      description: "This was my first project using flexbox and grid together",
      image:"/images/first-project.png",
      tech: ["HTML5", "CSS3"],
      github: "https://github.com/Cvidal84/Entrega--Proyecto1",
      link: "https://prometeoproyecto1fullstack.netlify.app",
    },
    {
      title: "Dom: Dinamic galery",
      description: "In this project i learned to use Dom and create a dinamic galery",
      image:"/images/dom-dinamic-galery.png",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Cvidal84/Practica_Dom_Galeria_dinamica",
      link: "https://practicadomgaleriadinamica.netlify.app",
    },
    {
      title: "Project 2 - Portfolio",
      description: "In this project, I have grouped all the projects so far and have tried to use all the knowledge I have up to date.",
      image:"/images/portfolio.png",
      tech: ["HTML5", "CSS3", "JavaScript", "DOM", "Vite"],
      github: "https://github.com/Cvidal84/Proyecto2_portfolio",
      link: "https://portfolio-carlos-vidal.netlify.app/",
    },
    {
      title: "Project 3 - Asynchronous Web ",
      description: "In this project, I fetch photos from the Unsplash API.",
      image:"/images/web-asincrona.png",
      tech: ["HTML5", "CSS3", "JavaScript", "DOM", "Vite"],
      github: "https://github.com/Cvidal84/Proyecto_Web_Asincrono",
      link: "https://proyectowebasincrono.netlify.app",
    },
  ],
};

export default data;