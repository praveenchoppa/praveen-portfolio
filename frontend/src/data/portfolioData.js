export const identity = {
  brand: "PRAVEEN",
  brandSuffix: "BACKEND",
  firstName: "Praveen",
  displayName: "Praveen Kumar",
  fullName: "Choppa Praveen Nooka Vinay Kumar",
  role: "Backend Engineer",
  nodeId: "PRAVEEN_CORE",
  status: "Open to Opportunities",
  focus: "Secure + Scalable Systems",
  primaryStack: "Java / Spring Boot",
  headlineLead: "Backend engineer,",
  headlineSecure: "secure systems",
  headlineMid: "today — architecting",
  headlineFuture: "distributed ones next.",
  tagline: "Building secure systems for a better tomorrow.",
  summary:
    "Backend-focused Computer Science student with hands-on experience in Java, Spring Boot, REST API development, and database-driven applications. Experienced in taking software features from requirements and architectural design through implementation, testing, debugging, and product integration. Strong foundation in backend engineering, API security, and database architecture, with growing interests in distributed systems, cloud computing, and scalable software architectures.",
};

export const education = {
  institution: "Indian Institute of Information Technology Kottayam",
  shortInstitution: "IIIT Kottayam",
  degreeShort: "B.Tech CSE",
  degree:
    "Bachelor of Technology in Computer Science and Engineering",
  dates: "Aug 2024 – Apr 2028",
  cgpa: "7.77",
};

export const contact = {
  email: "praveenkumarchoppa@gmail.com",
  phone: "+91-7396402261",
  location: "IIIT Kottayam",
  resumePath: "/resume.pdf",
};

export const links = {
  email: "mailto:praveenkumarchoppa@gmail.com",
  linkedin: "https://www.linkedin.com/in/praveen-n-v-k-choppa-9466b5346/",
  github: "https://github.com/praveenchoppa",
  leetcode: "https://leetcode.com/u/praveenchoppa/",
};

export const navigation = [
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "topology", label: "Systems Topology", href: "#topology" },
  { id: "stack", label: "Stack", href: "#stack" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const experience = {
  id: "lumenor",
  company: "Lumenor AI Tech Pvt Ltd",
  role: "Software Engineering Intern",
  dates: "Jun 2026 – Aug 2026",
  mode: "Remote",
  product: "LumenDesignX",
  scope:
    "3D rooftop solar design studio — core solar design workflows and engineering features, integrated with the broader product.",
  responsibilities: [
    "Designed and developed LumenDesignX, a 3D rooftop solar design studio, translating product requirements into an end-to-end engineering workflow.",
    "Took end-to-end ownership of feature development, including requirement analysis, technical and architectural decisions, implementation and iterative improvements.",
    "Designed and implemented core solar design workflows and engineering features, with emphasis on modular architecture, state management, data consistency, and integration with the broader product.",
    "Participated in product and technical discussions, collaborating with the engineering team throughout the SDLC to refine requirements, evaluate implementation approaches, and improve feature stability.",
  ],
  lifecycle: [
    { id: "research", label: "Research", detail: "Requirement analysis and product discussions" },
    { id: "design", label: "Design", detail: "Technical and architectural decisions" },
    { id: "implement", label: "Implement", detail: "Core solar design workflows" },
    { id: "test", label: "Test", detail: "Iterative improvements and stability" },
    { id: "evolve", label: "Evolve", detail: "Integration with the broader product" },
  ],
};

export const projects = [
  {
    id: "greenleaf",
    serviceId: "SERVICE 01",
    name: "GreenLeaf Nursery Management System",
    shortName: "GreenLeaf",
    accent: "green",
    github: "https://github.com/praveenchoppa/GreenLeaf-Nursery",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "Cloudinary",
    ],
    purpose:
      "A nursery management platform supporting public catalog browsing and secure administrative operations.",
    contributions: [
      "Implemented JWT-based authentication and role-based access control using Spring Security.",
      "Designed RESTful APIs using layered architecture, DTO patterns, Hibernate/JPA, and MySQL.",
      "Integrated Cloudinary for secure image upload and cloud-based media management.",
    ],
  },
  {
    id: "nexcart",
    serviceId: "SERVICE 02",
    name: "NexCart — Secure Product Management System",
    shortName: "NexCart",
    accent: "blue",
    github: "https://github.com/praveenchoppa/NexCart",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
    ],
    purpose:
      "A secure backend system for product and cart management with stateless authentication and role-based access.",
    contributions: [
      "Built a secure backend system implementing JWT-based authentication and role-based access control.",
      "Designed REST APIs with role-based authorization for protected resources.",
      "Implemented stateless authentication using JWT to support secure and scalable API access.",
      "Developed product and cart management APIs with validation, pagination, and sorting.",
    ],
  },
  {
    id: "roadwatch",
    serviceId: "SERVICE 03",
    name: "RoadWatch AI — Smart Mobility Infrastructure Monitoring System",
    shortName: "RoadWatch AI",
    accent: "orange",
    github: "https://github.com/RoadWatch-AI/RoadWatch",
    technologies: ["Python", "Flask", "PostgreSQL", "REST APIs"],
    purpose:
      "A smart road infrastructure monitoring platform covering complaints, projects, and maintenance workflows.",
    contributions: [
      "Contributed to the backend and database implementation of a smart road infrastructure monitoring platform.",
      "Designed and populated PostgreSQL data models for users, authorities, contractors, road projects, complaints, and maintenance records.",
      "Connected the Flask backend with PostgreSQL and supported REST API-based complaint and infrastructure management workflows.",
      "Configured and supported cloud deployment using Neon, Render, and Vercel for the application and database.",
    ],
  },
];

export const stackLayers = [
  {
    id: "languages",
    layer: "LAYER 01",
    title: "Languages & Core",
    items: ["Java", "SQL", "Python"],
  },
  {
    id: "backend",
    layer: "LAYER 02",
    title: "Backend Frameworks & Security",
    items: [
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "JWT Authentication",
      "Hibernate/JPA",
      "Flask",
    ],
  },
  {
    id: "database",
    layer: "LAYER 03",
    title: "Database & Persistence",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    id: "principles",
    layer: "LAYER 04",
    title: "Engineering Principles",
    items: [
      "REST API Design",
      "Layered Architecture",
      "Object-Oriented Design",
      "Authentication & Authorization",
      "SDLC",
    ],
  },
  {
    id: "tools",
    layer: "LAYER 05",
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Maven",
      "Postman",
      "Thunder Client",
      "Cloudinary",
    ],
  },
];

export const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
];

export const problemSolving = {
  label: "LeetCode",
  detail:
    "Solved 150+ Data Structures & Algorithms problems covering Arrays, Strings, Hashing, Two Pointers, Sliding Window, Binary Search, Linked Lists, Trees, and Graphs.",
};

export const pipeline = [
  {
    id: "understand",
    number: "01",
    title: "Understand",
    description:
      "Analyze product requirements and map them into a clear engineering workflow before writing code.",
  },
  {
    id: "architect",
    number: "02",
    title: "Architect",
    description:
      "Make technical and architectural decisions around modular structure, data consistency, and integration.",
  },
  {
    id: "build",
    number: "03",
    title: "Build",
    description:
      "Implement backend services, APIs, and persistence layers with ownership from design through delivery.",
  },
  {
    id: "verify",
    number: "04",
    title: "Verify",
    description:
      "Test, debug, and refine features so they integrate cleanly with the broader product.",
  },
  {
    id: "evolve",
    number: "05",
    title: "Evolve",
    description:
      "Iterate on architecture and implementation, improving stability after each cycle of feedback.",
  },
];

export const futureDirection = {
  title: "Distributed Systems",
  status: "Future Direction",
  summary:
    "Growing interest in distributed systems, cloud computing, and scalable software architectures — a direction I am building toward, not a claim of professional expertise.",
};

export const topologyNodes = [
  {
    id: "praveen",
    label: "PRAVEEN",
    sublabel: "Backend Engineer",
    kind: "identity",
    connects: ["lumenor", "greenleaf", "nexcart", "roadwatch", "stack", "distributed"],
  },
  {
    id: "lumenor",
    label: "LUMENOR AI TECH",
    sublabel: "Production Experience",
    kind: "experience",
    connects: ["praveen"],
  },
  {
    id: "greenleaf",
    label: "GREENLEAF",
    sublabel: "Service 01",
    kind: "project",
    connects: ["praveen", "stack"],
  },
  {
    id: "nexcart",
    label: "NEXCART",
    sublabel: "Service 02",
    kind: "project",
    connects: ["praveen", "stack"],
  },
  {
    id: "roadwatch",
    label: "ROADWATCH AI",
    sublabel: "Service 03",
    kind: "project",
    connects: ["praveen", "stack"],
  },
  {
    id: "stack",
    label: "TECH STACK",
    sublabel: "Core Technologies",
    kind: "stack",
    connects: ["praveen", "greenleaf", "nexcart", "roadwatch"],
  },
  {
    id: "distributed",
    label: "DISTRIBUTED SYSTEMS",
    sublabel: "Future Direction",
    kind: "future",
    connects: ["praveen"],
  },
];

export const assistantQuestions = [
  {
    id: "build",
    question: "What does Praveen build?",
    endpoint: "GET /api/v1/portfolio/identity",
  },
  {
    id: "internship",
    question: "Tell me about his internship.",
    endpoint: "GET /api/v1/portfolio/experience",
  },
  {
    id: "projects",
    question: "Show me his projects.",
    endpoint: "GET /api/v1/portfolio/projects",
  },
  {
    id: "stack",
    question: "What technologies does he use?",
    endpoint: "GET /api/v1/portfolio/stack",
  },
  {
    id: "direction",
    question: "Why distributed systems?",
    endpoint: "GET /api/v1/portfolio/direction",
  },
  {
    id: "contact",
    question: "How can I contact him?",
    endpoint: "GET /api/v1/portfolio/contact",
  },
  {
    id: "resume",
    question: "Show me the resume.",
    endpoint: "GET /api/v1/portfolio/resume",
  },
];
