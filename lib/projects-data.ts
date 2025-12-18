export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  challenge?: string
  solution?: string
  image: string
  detailImage: string 
  technologies: string[]
  liveUrl?: string
  githubUrl: string
  featured: boolean
  category: "fullstack" | "ai" | "mobile" | "data" | "frontend" 
  keyFeatures?: string[]
}

export const projects: Project[] = [
  {
    id: "autolib",
    title: "AutoLib",
    tagline: "RFID-Enabled Smart Library Management System",
    description:
      "AutoLib is a modern digital library solution designed to automate the borrowing process using RFID (Radio Frequency Identification) technology. The platform bridges the gap between digital management and physical access, offering a seamless experience for library members with 24/7 availability through smart locker integration.",
    challenge:
      "Traditional library systems require manual checkout processes during business hours, creating queues and limiting accessibility. Users face delays in borrowing and returning books, while library staff spend significant time on repetitive administrative tasks.",
    solution:
      "AutoLib modernizes library operations by eliminating queues and paperwork through RFID-enabled smart lockers. Users browse and reserve books online, then scan their RFID card at a smart locker to pick up or return items instantly. The system provides secure, contactless access 24/7, combining web application convenience with automated physical fulfillment.",
    image: "/autolib1.png",
    detailImage: "/autolib5.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "RFID Integration", "IoT"],
    liveUrl: "https://auto-lib-cyan.vercel.app/",
    githubUrl: "https://github.com/HartantoLs/AutoLib",
    featured: true,
    category: "fullstack",
    keyFeatures: [
      "RFID-based secure authentication and access control",
      "24/7 automated smart locker system for self-service",
      "Real-time book availability and reservation management",
      "Digital loan tracking with automatic due date notifications",
      "Searchable catalog with advanced filtering options",
      "User dashboard for managing loans and reservations",
    ],
  },
  {
    id: "fairsea",
    title: "FAIR-SEA",
    tagline: "Fairness Assessment in AI for Southeast Asia",
    description:
      "FAIR-SEA is a comprehensive framework and interactive dashboard designed to evaluate socio-cultural bias in Large Language Models (LLMs). Focusing on the Southeast Asian context, specifically Singapore, FAIR-SEA automates the detection of racial, gender, and national stereotypes that Western-centric models often overlook, using rigorous statistical analysis.",
    challenge:
      "Most Large Language Models are trained on Western-centric data, leading to a representation gap where Southeast Asian cultures are often stereotyped or misrepresented. Existing global benchmarks fail to capture regional nuances, and manual bias assessment is difficult to scale across different identity dimensions.",
    solution:
      "FAIR-SEA transforms manual bias assessment into a scalable, data-driven process through an automated Python pipeline. The framework uses curated prompts reflecting local contexts (employment, hiring, family dynamics) to systematically test models. It provides quantifiable bias scores using Jensen-Shannon Divergence, Chi-square tests, ANOVA, and sentiment analysis, visualized through an interactive Streamlit dashboard showing intersectional bias patterns.",
    image: "/fairsea4.png",
    detailImage: "/fairsea3.png",
    technologies: ["Python", "Streamlit", "Pandas", "Statistical Analysis", "NLP", "Data Visualization"],
    liveUrl: "https://fairsea.streamlit.app/",
    githubUrl: "https://github.com/FairSea/fairsea",
    featured: true,
    category: "ai",
    keyFeatures: [
      "Automated LLM bias testing pipeline for Southeast Asian contexts",
      "Localized evaluation across Chinese, Malay, Indian, gender, and nationality dimensions",
      "Advanced statistical metrics: JSD, Chi-square, ANOVA, sentiment analysis",
      "Interactive Streamlit dashboard with real-time visualization",
      "Intersectional bias analysis with heatmaps and pattern detection",
      "Reproducible testing framework with comprehensive logging",
    ],
  },
  {
    id: "cooking-oil-management",
    title: "Cooking Oil Stock Management System",
    tagline: "Automated Inventory Verification for PT Tunas Baru Lampung Tbk",
    description:
      "A standalone web application designed to automate stock verification and resolve discrepancies between physical inventory and system records. Built during an internship at PT Tunas Baru Lampung Tbk, this system replaces manual processes with detailed transaction tracking and warehouse origin identification, significantly reducing audit time for the accounting division.",
    challenge:
      "The existing legacy system only stored transaction totals without granular details such as warehouse origin. This made it difficult to trace the source of discrepancies between physical stock counts and delivery notes (surat jalan), resulting in time-consuming manual audits and potential inventory inaccuracies.",
    solution:
      "Developed using the Waterfall methodology, the new system provides automated data verification with comprehensive transaction logging. Each record includes detailed metadata enabling the accounting team to easily trace and resolve stock gaps. The system integrates seamlessly with existing workflows while maintaining data independence through a separate database architecture.",
    image: "/oil1.png",
    detailImage: "/oil_2.png",
    technologies: ["PHP", "CodeIgniter", "Bootstrap", "MySQL", "JavaScript"],
    githubUrl: "https://github.com/HartantoLs/pmg_kemas",
    featured: true,
    category: "fullstack",
    keyFeatures: [
      "Automated stock verification against delivery notes (surat jalan)",
      "Detailed transaction logging with warehouse origin tracking",
      "Discrepancy detection and resolution workflow",
      "Real-time inventory status monitoring",
      "Report generation for accounting audits",
      "Independent database architecture for data integrity",
    ],
  },
  {
    id: "sandwich",
    title: "Sandwich",
    tagline: "Family Finance Management Application",
    description:
      "Sandwich is a robust desktop solution for personal and family finance management, providing a centralized platform to monitor financial flows from daily spending to long-term liabilities. Built with JavaFX and Java 21, the application prioritizes user privacy through a local-first architecture, ensuring sensitive financial data never leaves the user's machine.",
    challenge:
      "Families struggle to maintain comprehensive oversight of their financial health across multiple categories: daily expenses, various income sources, recurring bills, and installment payments. Existing solutions often require cloud storage, raising privacy concerns for sensitive financial data.",
    solution:
      "Sandwich provides an all-in-one desktop application with local SQLite storage for complete data privacy. The intuitive JavaFX interface allows users to log expenses, categorize income sources, automate recurring payment tracking, and monitor loan installment progress. Built with Gradle and rigorously tested with JUnit 5 and Mockito, the application ensures reliability for critical financial data management.",
    image: "/sandwich.png",
    detailImage: "/sandwich2.png",
    technologies: ["Java 21", "JavaFX 17", "SQLite", "JDBC", "Gradle", "JUnit 5", "Mockito"],
    githubUrl: "https://github.com/kasflaf/IF2050-2025-K2G-Sandwich",
    featured: false,
    category: "fullstack",
    keyFeatures: [
      "Comprehensive expense and income tracking with categorization",
      "Recurring payment automation for bills and subscriptions",
      "Installment management with payment history and due date tracking",
      "Local-first architecture with SQLite for complete data privacy",
      "Intuitive JavaFX interface for seamless user experience",
      "Robust testing with JUnit 5 and Mockito for reliability",
    ],
  },
  {
    id: "foodfix",
    title: "FoodFix",
    tagline: "Real-Time Meal Nutritional Analysis",
    description:
      "FoodFix is a web-based prototype designed to assist users in making healthier dietary decisions through personalized food recommendations. The core feature leverages AI (Google Gemini API) to estimate the nutritional content of a meal in real-time simply by entering a food name and portion size, providing instant insights into calories, protein, carbs, and fats without requiring deep nutritional knowledge.",
    challenge:
      "People struggle to make health-conscious dietary decisions without deep nutritional knowledge or the ability to quickly assess meal composition. Manual nutrition tracking is tedious and often inaccurate, while existing solutions require extensive food databases or barcode scanning.",
    solution:
      "FoodFix simplifies nutrition tracking through AI-powered instant analysis. Users simply input a food name and portion size, and the system uses Google Gemini API to estimate nutritional content (calories, protein, carbs, fats) in real-time. The clean Next.js interface with Tailwind CSS and shadcn/ui components provides an intuitive experience, empowering users to make health-conscious decisions effortlessly.",
    image: "/foodfix.png",
    detailImage: "/foodfix.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React", "shadcn/ui", "Google Gemini API"],
    liveUrl: "https://foodfix-prototype.vercel.app/",
    githubUrl: "https://github.com/louisferdyo/prototype-foodfix",
    featured: false,
    category: "frontend",
    keyFeatures: [
      "AI-powered instant nutritional analysis using Google Gemini API",
      "Simple input: food name and portion size for immediate results",
      "Comprehensive breakdown: calories, protein, carbs, and fats",
      "Personalized food recommendations for healthier choices",
      "Clean, intuitive interface built with Next.js and shadcn/ui",
      "Real-time analysis without manual database lookups",
    ],
  },
  {
    id: "virtual-tpb",
    title: "Virtual TPB: Gamified Learning Platform",
    tagline: "Mastering TPB Physics & Math through Interactive Simulations",
    description:
      "Virtual TPB is an educational platform designed to assist first-year students (TPB) at Institut Teknologi Bandung (ITB) in mastering foundational subjects like Physics and Calculus. Unlike traditional learning, it combines video materials with interactive mini-games—such as a GLB (Uniform Linear Motion) car simulation—to visualize abstract concepts.",
    challenge:
      "First-year students often struggle to visualize abstract concepts in Basic Physics and Calculus. Traditional static learning methods can make topics like Kinematics difficult to grasp intuitively, leading to lower engagement and retention during the crucial TPB phase.",
    solution:
      "We developed a gamified e-learning solution that bridges theory and practice. The platform offers curated educational videos alongside interactive simulations. For example, to teach Linear Motion (GLB), students engage with a car simulation game where they control variables like velocity and time to observe real-time displacement, making the physics tangible.",
    image: "/virtualtpb.png",
    detailImage: "/virtualtpb.png",
    technologies: ["Gamification", "Bootstrap", "Interactive Simulation", "Web/Mobile Development", "Vercel", "React Native"],
    liveUrl: "https://virtual-tpb-puce.vercel.app/",
    githubUrl: "https://github.com/Hartanto08/VirtualTPB",
    featured: false,
    category: "mobile",
    keyFeatures: [
      "Interactive Physics simulations (e.g., GLB Car Movement Game)",
      "Comprehensive video tutorials for Calculus and Physics",
      "Gamified learning experience to increase student engagement",
      "Visual representation of abstract mathematical concepts",
      "Tailored specifically for the ITB TPB curriculum",
    ],
  },
  {
    id: "genetic-algorithm",
    title: "Diagonal Magic Cube Solver",
    tagline: "Local Search Algorithms for AI Problem Solving",
    description:
      "An advanced AI project implementing multiple local search algorithms (Steepest Ascent, Stochastic, Random Restart, Sideways Move, Genetic Algorithm, and Simulated Annealing) to solve the complex diagonal magic cube puzzle. The system finds optimal arrangements of numbers 1 to n³ where all rows, columns, pillars, and diagonals sum to a magic number.",
    challenge:
      "Solving diagonal magic cubes is computationally expensive with massive search spaces. Traditional brute-force methods are impractical for larger cubes (n ≥ 5), requiring intelligent search strategies that balance exploration and exploitation while avoiding local optima.",
    solution:
      "Developed a comprehensive Python framework implementing six different local search algorithms, each with unique optimization strategies. The system uses matplotlib for performance visualization and plotly for 3D cube representation, allowing comparative analysis of algorithm efficiency. This modular approach enables experimentation with different search strategies and parameter tuning.",
    image: "/dai1.png",
    detailImage: "/dai1s.png",
    technologies: ["Python", "Genetic Algorithm", "Simulated Annealing", "Matplotlib", "Plotly", "NumPy"],
    githubUrl: "https://github.com/louisferdyo/Tubes-DAI-K-46",
    featured: false,
    category: "ai",
    keyFeatures: [
      "Six local search algorithms: Steepest Ascent, Stochastic, Random Restart, Sideways Move, GA, SA",
      "3D interactive cube visualization using Plotly",
      "Performance metrics and convergence analysis with Matplotlib",
      "Configurable parameters for algorithm tuning and experimentation",
      "Comparative analysis framework for algorithm evaluation",
      "Scalable solution for various cube sizes (n × n × n)",
    ],
  },
  {
    id: "knn-cnn",
    title: "Machine Learning Algorithms Implementation",
    tagline: "KNN & Gaussian Naive Bayes from Scratch",
    description:
      "A comprehensive machine learning project implementing K-Nearest Neighbor and Gaussian Naive Bayes algorithms from scratch, alongside scikit-learn implementations for performance comparison. The system includes advanced data preprocessing, feature engineering, and comprehensive model evaluation with multiple distance metrics for KNN (Euclidean, Manhattan, Minkowski).",
    challenge:
      "Understanding the mathematical foundations of ML algorithms and their practical implementation requires deep knowledge of probability, statistics, and distance metrics. Comparing custom implementations with established libraries helps validate understanding and identify optimization opportunities.",
    solution:
      "Built complete scratch implementations of KNN (with three distance metrics) and Gaussian Naive Bayes, alongside scikit-learn equivalents. The system includes robust data preprocessing pipeline handling missing values, imbalanced data, categorical encoding, and feature scaling. Models can be saved/loaded using pickle format, and comprehensive evaluation uses Accuracy, Precision, Recall, and F1-Score metrics.",
    image: "/dai2.png",
    detailImage: "/dai2z.png",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "Machine Learning", "Data Preprocessing"],
    githubUrl: "https://github.com/farrrahhh/Tubes2-AI",
    featured: false,
    category: "ai",
    keyFeatures: [
      "KNN from scratch with three distance metrics (Euclidean, Manhattan, Minkowski)",
      "Gaussian Naive Bayes implementation using probability distributions",
      "Comprehensive data preprocessing: missing values, encoding, scaling, feature engineering",
      "Model persistence with pickle for save/load functionality",
      "Side-by-side comparison of scratch vs scikit-learn implementations",
      "Detailed evaluation: Accuracy, Precision, Recall, F1-Score metrics",
    ],
  },
  {
    id: "bacterial-resistance",
    title: "Bacterial Evolution & Resistance Simulation",
    tagline: "Interactive Real-Time Evolutionary Modeling",
    description:
      "A web-based interactive simulation demonstrating bacterial evolution and antibiotic resistance through real-time agent-based modeling. Users act as 'nature,' adjusting antibiotic dosage to observe how selective pressure drives population-level genetic changes. The simulation visualizes abstract evolutionary concepts including natural selection, genetic mutation, and the metabolic trade-offs of antibiotic resistance.",
    challenge:
      "Evolutionary concepts like antibiotic resistance and natural selection are abstract and difficult to grasp through traditional learning. Students struggle to understand how random mutations combined with environmental pressure lead to population-wide adaptation, and the serious risks of antibiotic overuse remain invisible.",
    solution:
      "Created an interactive Streamlit application modeling bacterial life cycles with realistic biological rules. Bacteria agents possess genetic traits (resistance level, reproduction speed, max age) that mutate during reproduction. The system implements selective pressure where low-resistance bacteria die under antibiotic exposure, while survivors reproduce with mutations. Real-time Plotly visualizations show spatial distribution and resistance trends across generations, with biological trade-offs ensuring high resistance correlates with slower reproduction.",
    image: "/bakteri1.png",
    detailImage: "/bakteri2.png",
    technologies: ["Python", "Streamlit", "NumPy", "Pandas", "Plotly", "Agent-Based Modeling"],
    liveUrl: "https://simulasi-resistansi-bakteri.streamlit.app/",
    githubUrl: "https://github.com/HartantoLs",
    featured: false,
    category: "ai",
    keyFeatures: [
      "Real-time agent-based simulation with tick-based evolutionary modeling",
      "Genetic trait system: resistance level, reproduction speed, maximum age",
      "Mutation algorithm with inheritance and random genetic variations",
      "Biological trade-off implementation: high resistance = slower reproduction",
      "Interactive controls for adjusting antibiotic dosage and mutation strength",
      "Dynamic Plotly visualizations: spatial scatter plots and resistance time-series",
    ],
  },
  {
    id: "michael-vs-lalapan",
    title: "Michael vs. Lalapan",
    tagline: "Java-Based CLI Strategy Game",
    description:
      "A CLI-based strategy game developed in Java, inspired by Plants vs. Zombies. Players defend their home using plants with unique abilities against waves of zombie attacks. The game demonstrates strong Object-Oriented Programming (OOP) principles and Abstract Data Types (ADT) including Lists, Queues, and Maps for structured game mechanics and dynamic interactions.",
    challenge:
      "Creating an engaging CLI game requires careful design of game mechanics, turn-based logic, and state management without graphical interfaces. Balancing gameplay while demonstrating advanced programming concepts like OOP and ADT structures presents a unique educational challenge.",
    solution:
      "Implemented a turn-based strategy game using pure Java with core libraries. The system uses OOP principles for plant and zombie entities, each with unique abilities and behaviors. Game mechanics leverage ADTs: Lists for entity management, Queues for spawn ordering, and Maps for grid-based positioning. The CLI interface provides clear visual feedback of game state, making complex interactions intuitive despite text-only constraints.",
    image: "/mvl1.png",
    detailImage: "/mvl6.png",
    technologies: ["Java", "OOP", "Data Structures", "ADT", "CLI Design"],
    githubUrl: "https://github.com/gunturoktavianto/Tubes1-IF2212-OOP",
    featured: false,
    category: "ai",
    keyFeatures: [
      "Turn-based strategy gameplay inspired by Plants vs. Zombies",
      "Plant defense system with unique abilities (shooters, blockers, support)",
      "Wave-based zombie attacks with increasing difficulty",
      "OOP implementation: inheritance, polymorphism, encapsulation",
      "ADT usage: Lists, Queues, and Maps for game state management",
      "ASCII art visualization and clear CLI feedback",
    ],
  },
  {
    id: "wayangwave",
    title: "WayangWave",
    tagline: "Spotify-Inspired Music Streaming Application",
    description:
      "WayangWave is a desktop music streaming application inspired by Spotify, built using JavaFX. The platform provides a modern interface for music discovery, playlist management, and audio playback. It demonstrates advanced desktop UI design patterns, state management, and media handling capabilities with local music library support.",
    challenge:
      "Creating a feature-rich music streaming application requires handling complex state management for playback controls, playlist synchronization, and user preferences. Designing an intuitive desktop interface that rivals modern streaming services while maintaining performance with large music libraries presents significant technical challenges.",
    solution:
      "Developed using JavaFX with a clean MVC architecture for separation of concerns. The application implements a custom media player with playlist queue management, shuffle/repeat modes, and progress tracking. Local file system integration enables music library scanning and metadata extraction. The UI features smooth transitions, responsive layouts, and visual feedback for all user interactions.",
    image: "/music-streaming-app-interface-with-playlist-and-p.jpg",
    detailImage: "/music-streaming-app-interface-with-playlist-and-p-detail.jpg",
    technologies: ["Java", "JavaFX", "MVC Architecture", "Media APIs", "UI/UX Design"],
    githubUrl: "https://github.com/HartantoLs/IF2212-OOP-Wayang-Wave",
    featured: false,
    category: "mobile",
    keyFeatures: [
      "Modern Spotify-inspired user interface with dark mode",
      "Music library management with local file system integration",
      "Custom audio player with playback controls (play, pause, seek, volume)",
      "Playlist creation, editing, and queue management",
      "Shuffle and repeat playback modes",
      "Metadata extraction and display for song information",
    ],
  },
  {
    id: "siap-utbk",
    title: "SiapUTBK - Learning Management System",
    tagline: "Comprehensive UTBK Exam Preparation Platform",
    description:
      "SiapUTBK is a comprehensive Learning Management System (LMS) designed to help high school students prepare for Indonesia's university entrance exam (UTBK). The platform provides structured learning materials, practice exams with timed simulations, progress tracking, and personalized performance analytics to help students identify weak areas and improve their scores.",
    challenge:
      "Students preparing for UTBK exams struggle with fragmented resources, lack of structured study plans, and difficulty tracking progress across multiple subjects. Traditional study methods don't provide real-time feedback or adaptive learning paths, leading to inefficient preparation and anxiety about exam readiness.",
    solution:
      "Built a full-featured LMS using Next.js with comprehensive exam simulation capabilities. The platform offers subject-specific modules (Mathematics, Science, Social Studies, Indonesian, English) with video lessons, practice questions, and full-length mock exams with real UTBK timing constraints. Advanced analytics track performance trends, identify knowledge gaps, and generate personalized study recommendations using data visualization with Chart.js.",
    image: "/siaputbk5.png",
    detailImage: "/siaputbk2.png",
    technologies: ["Codeigniter", "PHP", "Tailwind CSS", "PostgreSQL", "XAMPP", "Authentication"],
    githubUrl: "https://github.com/HartantoLs/SiapUTBK",
    featured: false,
    category: "fullstack",
    keyFeatures: [
      "Comprehensive learning modules for all UTBK subjects",
      "Full-length practice exams with realistic UTBK timing and format",
      "Progress tracking dashboard with performance analytics",
      "Personalized study recommendations based on weak areas",
      "Video lessons, practice questions, and explanation solutions",
      "Real-time scoring and detailed answer explanations",
    ],
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projects
  return projects.filter((p) => p.category === category)
}
