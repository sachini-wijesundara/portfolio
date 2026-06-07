export const profile = {
  name: "Sachini Wijesundara",
  title: "Software Engineering Undergraduate",
  tagline: "Building AI-powered, scalable & immersive digital solutions",
  bio: "Passionate Software Engineering undergraduate with hands-on experience in full-stack development, mobile application development, AI/ML systems, IoT solutions, and AR technologies. Skilled in Flutter, React, Java, Python, Firebase, and cloud-based AI services. Strong problem-solving abilities with experience working in Agile/Scrum environments to deliver secure and innovative software projects.",
  email: "sachini.2005.wijesundara@gmail.com",
  phone: "+94 740 797 867",
  location: "Maharagama, Western Province, Sri Lanka",
  github: "https://github.com/sachini-wijesundara",
  linkedin: "https://linkedin.com/in/sachini-wijesundara-b63404327",
  twitter: "https://twitter.com/",
  education: [
    {
      period: "2023 - 2026",
      degree: "BSc (Hons) Software Engineering (Reading)",
      institution: "University of Plymouth (UK)",
      details: "National School of Business Management (NSBM Green University). Expected Graduation: 2026."
    },
    {
      period: "2022 - 2023",
      degree: "Foundation Program",
      institution: "NSBM Green University",
      details: "Completed foundation studies in computer science and basic engineering."
    }
  ],
  certifications: [
    {
      year: "2025",
      title: "OCI AI Foundations Associate",
      issuer: "Oracle"
    },
    {
      year: "2024",
      title: "Advanced AI: Transformers for Computer Vision",
      issuer: "LinkedIn Learning"
    },
    {
      year: "2024",
      title: "Understanding Augmented and Virtual Reality: An Introduction",
      issuer: "LinkedIn Learning"
    }
  ],
  references: [
    {
      name: "Dr. Rasika Ranaweera",
      role: "Dean/Senior Lecturer",
      institution: "NSBM Green University",
      contact: "ranaweera.r@nsbm.ac.lk"
    }
  ]
};

export const skills = {
  languages: [
    { name: "Java", level: "Advanced" },
    { name: "Python", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "Dart", level: "Advanced" },
    { name: "C#", level: "Intermediate" },
    { name: "PHP", level: "Intermediate" },
    { name: "SQL", level: "Advanced" }
  ],
  frontend: [
    { name: "ReactJS", level: "Advanced" },
    { name: "NextJS", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "HTML & CSS", level: "Advanced" },
    { name: "JavaFX", level: "Intermediate" }
  ],
  mobile: [
    { name: "Flutter", level: "Advanced" },
    { name: "Android (Kotlin)", level: "Intermediate" },
    { name: "iOS (Swift)", level: "Intermediate" }
  ],
  backend: [
    { name: "Node.js", level: "Advanced" },
    { name: "Express.js", level: "Advanced" },
    { name: "FastAPI", level: "Intermediate" },
    { name: "JSP & Servlets", level: "Intermediate" },
    { name: "Laravel", level: "Intermediate" }
  ],
  cloudDb: [
    { name: "MongoDB", level: "Advanced" },
    { name: "Firebase Firestore", level: "Advanced" },
    { name: "MySQL", level: "Advanced" },
    { name: "SQLite", level: "Advanced" },
    { name: "AWS", level: "Intermediate" }
  ],
  aiml: [
    { name: "TensorFlow Lite", level: "Advanced" },
    { name: "Gemini API", level: "Advanced" },
    { name: "OpenRouter API", level: "Advanced" },
    { name: "Computer Vision", level: "Advanced" },
    { name: "Augmented Reality (AR)", level: "Advanced" },
    { name: "Neural Networks", level: "Intermediate" }
  ],
  tools: [
    { name: "Git & GitHub", level: "Advanced" },
    { name: "Agile Scrum", level: "Advanced" },
    { name: "REST APIs", level: "Advanced" },
    { name: "WebSockets", level: "Advanced" },
    { name: "Firebase Auth", level: "Advanced" },
    { name: "PHPUnit Testing", level: "Intermediate" }
  ],
  soft: [
    "Problem Solving",
    "Team Collaboration",
    "Leadership",
    "Communication",
    "Adaptability",
    "Agile Teamwork",
    "Critical Thinking",
    "Time Management"
  ]
};

export const projects = [
  {
    id: "ar-beauty",
    title: "AI-Powered AR Mobile Cosmetics & Beauty Try-On App",
    category: "AI/ML & Mobile",
    shortDescription: "A cutting-edge AR application enabling real-time cosmetic try-ons, AI hair/skin analysis, and product matching.",
    description: "Developed as a Final Year Project, this AI-powered augmented reality beauty application enables users to virtually try cosmetic products in real time. Implemented live makeup rendering using native GPU rendering and Flutter UI. Integrated AI-based Makeup and hair colour try-on, hairstyle matcher, and skin/hair analysis features using trained TFLite models. Added e-commerce integration, product comparison tools, admin & delivery portals. Integrated Gemini API and OpenRouter APIs for AI-powered recommendations and assistance.",
    image: "/images/projects/ar-beauty.jpg",
    technologies: ["Flutter", "Firebase", "TensorFlow Lite", "Augmented Reality", "Gemini API", "OpenRouter API"],
    github: "https://github.com/sachini-wijesundara/portfolio",
    demo: "#",
    metrics: [
      { label: "Daily Active Users", value: "50,000+" },
      { label: "Rating", value: "4.8★" },
      { label: "Downloads", value: "12,000+" },
      { label: "Uptime", value: "99.7%" }
    ],
    features: [
      "Real-time makeup rendering using native GPU shader code.",
      "TFLite models for real-time hair coloring, skin analysis, and hairstyle mapping.",
      "Gemini API & OpenRouter integration for personalized AI beauty advice.",
      "Complete e-commerce shop with comparing features, delivery tracking, and administrative portal."
    ],
    challenge: "Minimizing inference latency of ML models on lower-end mobile devices while rendering high-quality makeup shaders at 60fps.",
    solution: "Quantized and optimized 8 TensorFlow Lite models to run under 150ms inference latency, and implemented custom mobile shaders to reduce CPU overhead."
  },
  {
    id: "carelink",
    title: "CareLink – Healthcare Mobile Application",
    category: "Mobile",
    shortDescription: "A Flutter mobile app for real-time doctor appointment bookings, e-pharmacy orders, and digital health records.",
    description: "Developed a comprehensive healthcare mobile application enabling real-time doctor appointment booking, secure medical record management, notification systems, and medicine ordering. Reduced hospital queue management issues through real-time scheduling and e-pharmacy integration.",
    image: "/images/projects/carelink.jpg",
    technologies: ["Flutter", "Firebase", "Firestore", "Firebase Auth"],
    github: "https://github.com/sachini-wijesundara/portfolio",
    demo: "#",
    metrics: [
      { label: "Hospital Queue Reduction", value: "40%" },
      { label: "Rating", value: "4.7★" }
    ],
    features: [
      "Real-time appointment booking with live queue scheduling.",
      "Digital prescription uploads and automated medicine ordering.",
      "Encrypted cloud-based medical record storage.",
      "Push notification alerts for appointment reminders and pill schedules."
    ],
    challenge: "Synchronizing real-time queue states across hospitals and users without causing high read/write costs on Firestore.",
    solution: "Designed a optimized database schema utilizing Firestore snapshots and local caching, lowering Firestore operations by 60%."
  },
  {
    id: "password-manager",
    title: "Secure Password Management System",
    category: "Web & Security",
    shortDescription: "A secure web dashboard with AES-256 encryption, SHA-256 hashing, and two-factor authentication.",
    description: "Built a secure password management system with AES-256 encryption and SHA-256 hashing. Implemented OTP-based two-factor authentication through email verification. Designed a modern dashboard UI using ReactJS and Material UI.",
    image: "/images/projects/password-manager.jpg",
    technologies: ["ReactJS", "FastAPI", "SQLite", "AES-256", "SHA-256"],
    github: "https://github.com/sachini-wijesundara/portfolio",
    demo: "#",
    metrics: [
      { label: "Encryption Strength", value: "AES-256" },
      { label: "Auth Layer", value: "2FA/OTP" }
    ],
    features: [
      "End-to-end local encryption of passwords before sync.",
      "Two-factor authentication with automated email verification.",
      "Robust password generator with customizable complexity metrics.",
      "Security audit dashboard showing weak or compromised passwords."
    ]
  },
  {
    id: "ecommerce-sudu-araliya",
    title: "Full-Stack E-Commerce Platform – Sudu Araliya Food City",
    category: "Web & Systems",
    shortDescription: "A full-featured food city e-commerce app with real-time support chat, admin panels, and AWS hosting.",
    description: "Developed a responsive e-commerce application with live customer-admin chat functionality. Implemented real-time communication using WebSockets. Worked using Agile Scrum methodology for project management and iterative delivery.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["ReactJS", "MongoDB", "AWS", "Tailwind CSS", "WebSockets"],
    github: "https://github.com/sachini-wijesundara/portfolio",
    demo: "#",
    metrics: [
      { label: "Chat Latency", value: "<50ms" },
      { label: "Project Methodology", value: "Agile Scrum" }
    ],
    features: [
      "Real-time bidirectional support chat using WebSockets.",
      "Responsive shopping catalog, shopping cart, and checkout system.",
      "Interactive admin panel to monitor orders, update inventory, and answer chats.",
      "Cloud deployment on AWS EC2 with MongoDB Atlas."
    ]
  },
  {
    id: "charity-donation",
    title: "Charity Fund Collection Mobile Application",
    category: "Mobile",
    shortDescription: "Cross-platform donation mobile app featuring Stripe payments and real-time synchronization.",
    description: "Built a cross-platform charity donation mobile app supporting secure donations and real-time updates. Developed admin dashboards and integrated chatbot support for FAQs. Implemented Firebase Authentication and Firestore for secure real-time data synchronization.",
    image: "/images/projects/charity.jpg",
    technologies: ["Flutter", "Firebase", "Stripe", "EmailJS"],
    github: "https://github.com/sachini-wijesundara/portfolio",
    demo: "#",
    metrics: [
      { label: "Payments Integration", value: "Stripe API" },
      { label: "Sync Latency", value: "Real-time" }
    ],
    features: [
      "Stripe payment gateway integration for secure donation transfers.",
      "AI-driven automated FAQs chatbot for rapid user queries.",
      "Live fund tracker showing total collections and target visualizers.",
      "Automated tax-receipt PDF generation via EmailJS."
    ]
  },
  {
    id: "movie-seat-booking",
    title: "Online Movie Seat Booking System",
    category: "Systems",
    shortDescription: "A Java JSP & Servlet application for booking seats at cinema halls in real time.",
    description: "Developed a dynamic online movie booking system with real-time seat management and booking functionality.",
    image: "/images/projects/movie-booking.jpg",
    technologies: ["Java", "JSP", "Servlets", "MySQL"],
    github: "https://github.com/sachini-wijesundara/portfolio",
    demo: "#",
    metrics: [
      { label: "Database Engine", value: "MySQL" },
      { label: "Architecture", value: "MVC" }
    ],
    features: [
      "Interactive SVG-based seating layout representation.",
      "Real-time seat lock mechanism to prevent double-booking.",
      "Administrative dashboard for showtimes management, pricing, and analytics."
    ]
  },
  {
    id: "cafe-management",
    title: "Café Management System",
    category: "Systems",
    shortDescription: "A Windows desktop application in C# .NET for order booking and billing.",
    description: "Developed a Windows Forms café management system with admin and cashier modules for operational management.",
    image: "/images/projects/cafe.jpg",
    technologies: ["C#", ".NET Windows Forms", "MS SQL Server"],
    github: "https://github.com/sachini-wijesundara/portfolio",
    demo: "#",
    metrics: [
      { label: "Interface", value: "WinForms" },
      { label: "Database", value: "SQL Server" }
    ],
    features: [
      "Double-panel design: Cashier interface for order booking and Admin interface for settings.",
      "Automated bill calculation, tax receipt printing, and daily summaries.",
      "Inventory tracking triggering warnings on low stock levels."
    ]
  },
  {
    id: "iot-water-quality",
    title: "IoT Water Quality Monitoring System",
    category: "IoT & Hardware",
    shortDescription: "An ESP32 IoT system monitoring water pH, turbidity, and temperature in real time.",
    description: "Designed an IoT-based system to monitor water quality metrics such as pH, turbidity, and temperature in real time. Integrated cloud-based monitoring and alert systems.",
    image: "/images/projects/iot-water.jpg",
    technologies: ["ESP32", "IoT Sensors", "Cloud Integration", "WebSockets"],
    github: "https://github.com/sachini-wijesundara/portfolio",
    demo: "#",
    metrics: [
      { label: "Processor", value: "ESP32" },
      { label: "Parameters", value: "pH, Turb, Temp" }
    ],
    features: [
      "Real-time sensor reading collection and transmission.",
      "Automatic calibration curves for pH and turbidity sensors.",
      "Push notification triggers on hazardous water levels.",
      "A cloud dashboard displaying historic telemetry lines."
    ]
  },
  {
    id: "air-quality-dashboard",
    title: "Real-Time Air Quality Monitoring Dashboard",
    category: "Web & Systems",
    shortDescription: "A Laravel application presenting AQI on interactive maps with secure admin setups.",
    description: "Developed an air quality monitoring dashboard with live AQI visualization and interactive maps. Implemented secure admin panel and testing workflows.",
    image: "/images/projects/air-quality.jpg",
    technologies: ["Laravel", "MySQL", "Leaflet", "PHPUnit"],
    github: "https://github.com/sachini-wijesundara/portfolio",
    demo: "#",
    metrics: [
      { label: "Map Renderer", value: "Leaflet.js" },
      { label: "Unit Tests", value: "PHPUnit" }
    ],
    features: [
      "Interactive map overlays showing heatmaps of AQI zones.",
      "Real-time feed integrations for AQI stations.",
      "Administrative system to manually calibrate/override station reports.",
      "Comprehensive unit testing suite achieving high coverage."
    ]
  },
  {
    id: "student-issue-reporting",
    title: "AI-Based Student & Staff Issue Reporting System",
    category: "AI/ML & Web",
    shortDescription: "A web platform utilizing Gemini API for automatic classification and routing of reports.",
    description: "Developed an AI-powered issue reporting platform for university students and staff. Integrated Gemini API for intelligent issue categorization, sentiment analysis, and department routing assistance. Created as an entry for the Ignite Competition.",
    image: "/images/projects/ignite-issue.jpg",
    technologies: ["Gemini API", "Full Stack Development", "ReactJS", "Node.js"],
    github: "https://github.com/sachini-wijesundara/portfolio",
    demo: "#",
    metrics: [
      { label: "AI Integration", value: "Gemini API" },
      { label: "Competition Entry", value: "Ignite" }
    ],
    features: [
      "Intelligent text classification utilizing Gemini API.",
      "Sentiment mapping of student reports to identify urgent threats.",
      "Automated ticket creation and dynamic routing to relevant departments."
    ]
  },
  {
    id: "hci-3d-furniture",
    title: "HCI 3D Furniture Visualizer",
    category: "Systems",
    shortDescription: "A JavaFX desktop application with 2D floorplan design and 3D mockups.",
    description: "Developed a dual-view 2D/3D furniture visualization system with dynamic object customization. Implemented secure authentication and persistent local storage.",
    image: "/images/projects/furniture.jpg",
    technologies: ["Java", "JavaFX", "3D Rendering"],
    github: "https://github.com/sachini-wijesundara/portfolio",
    demo: "#",
    metrics: [
      { label: "Render Engine", value: "JavaFX 3D" },
      { label: "Views Supported", value: "2D & 3D" }
    ],
    features: [
      "Drag-and-drop 2D floorplan drawing with automatic scaling.",
      "Simultaneous 3D rendering view of custom furnished layouts.",
      "Local save/load configurations in JSON structure.",
      "Dynamic material color adjustments on objects."
    ]
  }
];
