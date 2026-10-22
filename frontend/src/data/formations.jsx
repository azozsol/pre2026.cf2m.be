import {
  CodeIcon,
  DatabaseIcon,
  FigmaIcon,
  GitBranchIcon,
  GlobeIcon,
  LayersIcon,
  MessageSquareIcon,
  MonitorIcon,
  PaintbrushIcon,
  PanelsTopLeftIcon,
  PenToolIcon,
  ServerIcon,
  ShieldIcon,
  SmartphoneIcon,
  TerminalIcon,
} from "lucide-react";

export const accents = {
  "web-developer": {
    primary: "#016baf",
    gradient: "from-[#016baf] to-[#0284c7]",
    bg: "bg-[#016baf]",
    text: "text-[#016baf]",
    hoverBg: "hover:bg-[#015893]",
    ring: "border-[#016baf]",
  },
  "digital-designer": {
    primary: "#059669",
    gradient: "from-[#059669] to-[#10b981]",
    bg: "bg-[#059669]",
    text: "text-[#059669]",
    hoverBg: "hover:bg-[#047857]",
    ring: "border-[#059669]",
  },
  "tech-pc-reseaux": {
    primary: "#6366f1",
    gradient: "from-[#6366f1] to-[#818cf8]",
    bg: "bg-[#6366f1]",
    text: "text-[#6366f1]",
    hoverBg: "hover:bg-[#4f46e5]",
    ring: "border-[#6366f1]",
  },
  "animateur-digital": {
    primary: "#f43f5e",
    gradient: "from-[#f43f5e] to-[#fb7185]",
    bg: "bg-[#f43f5e]",
    text: "text-[#f43f5e]",
    hoverBg: "hover:bg-[#e11d48]",
    ring: "border-[#f43f5e]",
  },
  "cheques-tic": {
    primary: "#8b5cf6",
    gradient: "from-[#8b5cf6] to-[#a78bfa]",
    bg: "bg-[#8b5cf6]",
    text: "text-[#8b5cf6]",
    hoverBg: "hover:bg-[#7c3aed]",
    ring: "border-[#8b5cf6]",
  },
  "aventure-digitale": {
    primary: "#0ea5e9",
    gradient: "from-[#0ea5e9] to-[#38bdf8]",
    bg: "bg-[#0ea5e9]",
    text: "text-[#0ea5e9]",
    hoverBg: "hover:bg-[#0284c7]",
    ring: "border-[#0ea5e9]",
  },
};

export const formationsData = {
  "web-developer": {
    title: "Web",
    accentWord: "Developer",
    subtitle:
      "Maîtrisez le développement web, du front-end au back-end. Créez des applications complètes et décrochez un emploi dans le secteur tech.",
    duration: "12 mois",
    selectionDate: "Sept. 2026",
    places: "12 stagiaires",
    location: "St-Gilles, BXL",
    totalHours: "~1200h",
    stageHours: "152h",
    schedule: "Lundi → vendredi, 9h – 17h",
    isOpen: false,
    phases: [
      {
        num: "01",
        title: "Fondamentaux du web",
        duration: "8 semaines",
        skills: [
          "HTML5 sémantique & accessibilité",
          "CSS3 moderne (Flexbox, Grid, animations)",
          "JavaScript ES6+ (logique, DOM, événements)",
          "Responsive design & Mobile-first",
          "Git & contrôle de version",
        ],
      },
      {
        num: "02",
        title: "Front-end avancé",
        duration: "8 semaines",
        skills: [
          "React.js (composants, hooks, state management)",
          "TypeScript & typage statique",
          "Tailwind CSS & librairies UI",
          "API REST & requêtes asynchrones",
          "Tests unitaires avec Jest",
        ],
      },
      {
        num: "03",
        title: "Back-end & bases de données",
        duration: "8 semaines",
        skills: [
          "Node.js & Express.js",
          "Bases de données SQL (PostgreSQL)",
          "Conception d'API RESTful",
          "Authentification & sécurité",
          "Déploiement (Vercel, Railway)",
        ],
      },
      {
        num: "04",
        title: "Projet final & stage",
        duration: "16 semaines",
        skills: [
          "Projet fullstack en équipe",
          "Méthodologie Agile / Scrum",
          "Stage de 152h en entreprise",
          "Préparation CV et entretiens",
          "Suivi par le job coach",
        ],
      },
    ],
    techSkills: [
      {
        icon: <GlobeIcon className="w-5 h-5" />,
        name: "HTML / CSS",
      },
      {
        icon: <CodeIcon className="w-5 h-5" />,
        name: "JavaScript",
      },
      {
        icon: <LayersIcon className="w-5 h-5" />,
        name: "React.js",
      },
      {
        icon: <DatabaseIcon className="w-5 h-5" />,
        name: "Node.js",
      },
      {
        icon: <DatabaseIcon className="w-5 h-5" />,
        name: "SQL / PostgreSQL",
      },
      {
        icon: <GitBranchIcon className="w-5 h-5" />,
        name: "Git & GitHub",
      },
      {
        icon: <SmartphoneIcon className="w-5 h-5" />,
        name: "Responsive Design",
      },
      {
        icon: <GlobeIcon className="w-5 h-5" />,
        name: "API REST",
      },
    ],
    softSkills: [
      "Résolution de problèmes complexes",
      "Esprit d'équipe & collaboration",
      "Autonomie & gestion du temps",
      "Communication technique",
      "Veille technologique",
      "Adaptabilité & curiosité",
    ],
    jobs: [
      {
        title: "Développeur·euse Front-end",
        salary: "2 400 – 3 200 €/mois",
        tag: "Très demandé",
      },
      {
        title: "Développeur·euse Back-end",
        salary: "2 600 – 3 500 €/mois",
        tag: "En croissance",
      },
      {
        title: "Développeur·euse Fullstack",
        salary: "2 800 – 4 000 €/mois",
        tag: "Top profil",
      },
      {
        title: "Développeur·euse WordPress",
        salary: "2 000 – 2 800 €/mois",
        tag: "Accessible",
      },
    ],
    insertionRate: "82%",
    testimonial: {
      quote:
        "Je travaillais en caisse depuis 8 ans. Aujourd'hui, j'ai mon CDD chez une agence web bruxelloise.",
      name: "Amira, 31 ans",
      role: "Développeuse front-end · Diplômée 2024",
    },
    conditions: [
      "Être inscrit·e comme demandeur·euse d'emploi (Actiris)",
      "Résider en Région de Bruxelles-Capitale",
      "Avoir minimum 18 ans",
      "Comprendre le français (niveau A2 minimum)",
      "Aucun diplôme ou expérience informatique requis",
      "Motivation et envie d'apprendre un nouveau métier",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1630442923896-244dd3717b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMGxhcHRvcCUyMGZ1bGxzY3JlZW58ZW58MXx8fHwxNzczNzgyNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  "digital-designer": {
    title: "Digital",
    accentWord: "Designer",
    subtitle:
      "Apprenez à concevoir des interfaces, des identités visuelles et des supports de communication digitaux professionnels.",
    duration: "13 mois",
    selectionDate: "Oct. 2026",
    places: "12 stagiaires",
    location: "St-Gilles, BXL",
    totalHours: "~1300h",
    stageHours: "152h",
    schedule: "Lundi → vendredi, 9h – 17h",
    isOpen: false,
    phases: [
      {
        num: "01",
        title: "Fondamentaux du design",
        duration: "8 semaines",
        skills: [
          "Théorie des couleurs & typographie",
          "Composition & mise en page",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Culture visuelle & références",
        ],
      },
      {
        num: "02",
        title: "Identité visuelle & print",
        duration: "8 semaines",
        skills: [
          "Création de logos & chartes graphiques",
          "Adobe InDesign & mise en page",
          "Branding & storytelling visuel",
          "Supports de communication",
          "Photographie & retouche",
        ],
      },
      {
        num: "03",
        title: "Design d'interfaces (UI/UX)",
        duration: "10 semaines",
        skills: [
          "Figma (composants, prototypage)",
          "UX Design & parcours utilisateur",
          "Wireframing & maquettes",
          "Design responsive",
          "Design systems & accessibilité",
        ],
      },
      {
        num: "04",
        title: "Projet final & stage",
        duration: "16 semaines",
        skills: [
          "Projet de design en équipe",
          "Portfolio professionnel",
          "Stage de 152h en entreprise",
          "Préparation CV et entretiens",
          "Suivi par le job coach",
        ],
      },
    ],
    techSkills: [
      {
        icon: <FigmaIcon className="w-5 h-5" />,
        name: "Figma",
      },
      {
        icon: <PenToolIcon className="w-5 h-5" />,
        name: "Adobe CC",
      },
      {
        icon: <PaintbrushIcon className="w-5 h-5" />,
        name: "Illustrator",
      },
      {
        icon: <PanelsTopLeftIcon className="w-5 h-5" />,
        name: "InDesign",
      },
      {
        icon: <GlobeIcon className="w-5 h-5" />,
        name: "HTML / CSS",
      },
      {
        icon: <SmartphoneIcon className="w-5 h-5" />,
        name: "UI/UX Design",
      },
      {
        icon: <LayersIcon className="w-5 h-5" />,
        name: "Design Systems",
      },
      {
        icon: <GlobeIcon className="w-5 h-5" />,
        name: "WordPress",
      },
    ],
    softSkills: [
      "Créativité & sensibilité visuelle",
      "Communication graphique",
      "Esprit d'équipe & collaboration",
      "Gestion de projet créatif",
      "Écoute du client / Brief",
      "Veille design & tendances",
    ],
    jobs: [
      {
        title: "Graphic Designer",
        salary: "2 200 – 3 000 €/mois",
        tag: "Très demandé",
      },
      {
        title: "UI Designer",
        salary: "2 600 – 3 500 €/mois",
        tag: "En croissance",
      },
      {
        title: "UX/UI Designer",
        salary: "2 800 – 3 800 €/mois",
        tag: "Top profil",
      },
      {
        title: "Web Designer",
        salary: "2 200 – 2 800 €/mois",
        tag: "Accessible",
      },
    ],
    insertionRate: "78%",
    testimonial: {
      quote:
        "Je n'aurais jamais pensé pouvoir créer des sites web et des logos professionnels. Le CF2M m'a donné confiance en mes capacités.",
      name: "Sofia, 28 ans",
      role: "UI Designer · Diplômée 2024",
    },
    conditions: [
      "Être inscrit·e comme demandeur·euse d'emploi (Actiris)",
      "Résider en Région de Bruxelles-Capitale",
      "Avoir minimum 18 ans",
      "Comprendre le français (niveau A2 minimum)",
      "Aucun diplôme ou expérience requis",
      "Sensibilité visuelle et motivation",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwY3JlYXRpdmUlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzczNzU4NzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  "tech-pc-reseaux": {
    title: "Tech PC",
    accentWord: "& Réseaux",
    subtitle:
      "Formez-vous à l'installation, la configuration et la maintenance des parcs informatiques et des infrastructures réseaux.",
    duration: "9 mois",
    selectionDate: "Mai 2026",
    places: "12 stagiaires",
    location: "St-Gilles, BXL",
    totalHours: "~900h",
    stageHours: "152h",
    schedule: "Lundi → vendredi, 9h – 17h",
    isOpen: false,
    phases: [
      {
        num: "01",
        title: "Hardware & systèmes",
        duration: "8 semaines",
        skills: [
          "Architecture PC & composants",
          "Montage & dépannage matériel",
          "Windows 10/11 administration",
          "Linux (Ubuntu, lignes de commande)",
          "Diagnostic & résolution de pannes",
        ],
      },
      {
        num: "02",
        title: "Réseaux & infrastructure",
        duration: "8 semaines",
        skills: [
          "Modèle OSI & TCP/IP",
          "Configuration de switches & routeurs",
          "DHCP, DNS, Active Directory",
          "Câblage & fibre optique",
          "Wi-Fi & réseaux sans fil",
        ],
      },
      {
        num: "03",
        title: "Sécurité & virtualisation",
        duration: "8 semaines",
        skills: [
          "Cybersécurité & bonnes pratiques",
          "Pare-feu & VPN",
          "Virtualisation (VMware, Hyper-V)",
          "Cloud computing (Azure bases)",
          "Scripting PowerShell",
        ],
      },
      {
        num: "04",
        title: "Certification & stage",
        duration: "12 semaines",
        skills: [
          "Préparation CompTIA A+",
          "Stage de 152h en entreprise",
          "Projet infrastructure réseau",
          "Préparation CV et entretiens",
          "Suivi par le job coach",
        ],
      },
    ],
    techSkills: [
      {
        icon: <MonitorIcon className="w-5 h-5" />,
        name: "Windows",
      },
      {
        icon: <TerminalIcon className="w-5 h-5" />,
        name: "Linux",
      },
      {
        icon: <GlobeIcon className="w-5 h-5" />,
        name: "Réseaux TCP/IP",
      },
      {
        icon: <ServerIcon className="w-5 h-5" />,
        name: "Serveurs",
      },
      {
        icon: <ShieldIcon className="w-5 h-5" />,
        name: "Cybersécurité",
      },
      {
        icon: <DatabaseIcon className="w-5 h-5" />,
        name: "Active Directory",
      },
      {
        icon: <GlobeIcon className="w-5 h-5" />,
        name: "Cloud Azure",
      },
      {
        icon: <CodeIcon className="w-5 h-5" />,
        name: "PowerShell",
      },
    ],
    softSkills: [
      "Diagnostic & résolution de problèmes",
      "Rigueur & méthodologie",
      "Communication avec les utilisateurs",
      "Gestion de priorités",
      "Documentation technique",
      "Veille technologique",
    ],
    jobs: [
      {
        title: "Technicien·ne helpdesk",
        salary: "2 000 – 2 600 €/mois",
        tag: "Très demandé",
      },
      {
        title: "Technicien·ne réseau",
        salary: "2 200 – 2 800 €/mois",
        tag: "En croissance",
      },
      {
        title: "Administrateur·trice système",
        salary: "2 600 – 3 500 €/mois",
        tag: "Top profil",
      },
      {
        title: "Support IT",
        salary: "1 900 – 2 400 €/mois",
        tag: "Accessible",
      },
    ],
    insertionRate: "80%",
    testimonial: {
      quote:
        "J'ai toujours été passionné par les ordinateurs. Le CF2M m'a permis de transformer cette passion en métier concret.",
      name: "Youssef, 27 ans",
      role: "Technicien réseau · Diplômé 2024",
    },
    conditions: [
      "Être inscrit·e comme demandeur·euse d'emploi (Actiris)",
      "Résider en Région de Bruxelles-Capitale",
      "Avoir minimum 18 ans",
      "Comprendre le français (niveau A2 minimum)",
      "Aucun diplôme ou expérience requis",
      "Intérêt pour le matériel informatique",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1629837093109-11325d6e7afd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwbmV0d29ya2luZyUyMGhhcmR3YXJlfGVufDF8fHx8MTc3Mzc1ODc1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  "animateur-digital": {
    title: "Animateur",
    accentWord: "Digital",
    subtitle:
      "Devenez le lien entre le numérique et les publics éloignés du digital. Accompagnez, formez et créez du contenu accessible.",
    duration: "10 mois",
    selectionDate: "Avril 2026",
    places: "12 stagiaires",
    location: "St-Gilles, BXL",
    totalHours: "~1000h",
    stageHours: "152h",
    schedule: "Lundi → vendredi, 9h – 17h",
    isOpen: true,
    phases: [
      {
        num: "01",
        title: "Culture numérique & outils",
        duration: "6 semaines",
        skills: [
          "Environnement numérique (OS, navigateurs, cloud)",
          "Suite bureautique avancée",
          "Outils collaboratifs (Google, Microsoft 365)",
          "Sécurité en ligne & RGPD",
          "Recherche & vérification d'information",
        ],
      },
      {
        num: "02",
        title: "Communication & création",
        duration: "8 semaines",
        skills: [
          "Réseaux sociaux & community management",
          "Création de contenu (Canva, vidéo)",
          "WordPress & création de sites vitrines",
          "Newsletter & email marketing",
          "Accessibilité numérique",
        ],
      },
      {
        num: "03",
        title: "Animation & pédagogie",
        duration: "8 semaines",
        skills: [
          "Techniques d'animation de groupe",
          "Pédagogie adaptée aux publics",
          "Conception d'ateliers numériques",
          "Gestion de projet d'inclusion numérique",
          "Évaluation des compétences",
        ],
      },
      {
        num: "04",
        title: "Projet & stage",
        duration: "16 semaines",
        skills: [
          "Projet d'animation en conditions réelles",
          "Stage de 152h en structure d'accueil",
          "Portfolio de réalisations",
          "Préparation CV et entretiens",
          "Suivi par le job coach",
        ],
      },
    ],
    techSkills: [
      {
        icon: <MessageSquareIcon className="w-5 h-5" />,
        name: "Réseaux sociaux",
      },
      {
        icon: <PaintbrushIcon className="w-5 h-5" />,
        name: "Canva",
      },
      {
        icon: <GlobeIcon className="w-5 h-5" />,
        name: "WordPress",
      },
      {
        icon: <PanelsTopLeftIcon className="w-5 h-5" />,
        name: "Suite Office",
      },
      {
        icon: <MonitorIcon className="w-5 h-5" />,
        name: "Google Workspace",
      },
      {
        icon: <SmartphoneIcon className="w-5 h-5" />,
        name: "Outils mobiles",
      },
      {
        icon: <GlobeIcon className="w-5 h-5" />,
        name: "Email marketing",
      },
      {
        icon: <PenToolIcon className="w-5 h-5" />,
        name: "Création vidéo",
      },
    ],
    softSkills: [
      "Pédagogie & patience",
      "Empathie & écoute active",
      "Animation de groupe",
      "Adaptabilité aux publics",
      "Créativité & vulgarisation",
      "Gestion de projet",
    ],
    jobs: [
      {
        title: "Animateur·trice multimédia",
        salary: "2 000 – 2 600 €/mois",
        tag: "Très demandé",
      },
      {
        title: "Médiateur·trice numérique",
        salary: "2 100 – 2 800 €/mois",
        tag: "En croissance",
      },
      {
        title: "Community Manager",
        salary: "2 200 – 3 000 €/mois",
        tag: "Polyvalent",
      },
      {
        title: "Chargé·e d'inclusion numérique",
        salary: "2 200 – 2 800 €/mois",
        tag: "Impact social",
      },
    ],
    insertionRate: "75%",
    testimonial: {
      quote:
        "J'ai découvert que j'adorais transmettre. Aider les gens à se sentir à l'aise avec le numérique, c'est un métier qui a du sens.",
      name: "Fatima, 34 ans",
      role: "Médiatrice numérique · Diplômée 2024",
    },
    conditions: [
      "Être inscrit·e comme demandeur·euse d'emploi (Actiris)",
      "Résider en Région de Bruxelles-Capitale",
      "Avoir minimum 18 ans",
      "Comprendre le français (niveau A2 minimum)",
      "Aucun diplôme requis",
      "Goût pour la communication et le contact humain",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1583468991267-3f068b607ae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGluZyUyMGRpZ2l0YWwlMjBsaXRlcmFjeSUyMGRpdmVyc2V8ZW58MXx8fHwxNzczNzU4NzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  "cheques-tic": {
    title: "Chèques",
    accentWord: "TIC",
    subtitle:
      "Des modules courts de quelques jours pour acquérir des compétences numériques ciblées : bureautique, retouche photo, réseaux sociaux, référencement web et plus encore.",
    duration: "1 à 10 jours / module",
    selectionDate: "En continu",
    places: "12 stagiaires / module",
    location: "St-Gilles, BXL",
    totalHours: "8 à 40h / module",
    stageHours: "0h",
    schedule: "Modules indépendants, en journée",
    isOpen: true,
    phases: [
      {
        num: "01",
        title: "Initiation informatique & Internet",
        duration: "2 à 5 jours",
        skills: [
          "Prise en main de l'ordinateur (Windows)",
          "Gestion de fichiers et dossiers",
          "Naviguer sur Internet en sécurité",
          "Créer et utiliser une boîte email",
          "Démarches administratives en ligne",
        ],
      },
      {
        num: "02",
        title: "Bureautique (Word, Excel, PowerPoint)",
        duration: "3 à 5 jours",
        skills: [
          "Traitement de texte avec Word",
          "Tableur avec Excel (formules, tableaux)",
          "Présentations avec PowerPoint",
          "Google Workspace (Docs, Sheets, Slides)",
          "Outils collaboratifs en ligne",
        ],
      },
      {
        num: "03",
        title: "Photoshop & retouche d'image",
        duration: "3 à 5 jours",
        skills: [
          "Interface et outils de base de Photoshop",
          "Recadrage, retouche et correction couleur",
          "Travail avec les calques",
          "Détourage et montage simple",
          "Exporter pour le web et l'impression",
        ],
      },
      {
        num: "04",
        title: "Réseaux sociaux & présence en ligne",
        duration: "2 à 3 jours",
        skills: [
          "Créer et gérer une page Facebook / Instagram",
          "Bases de la communication en ligne",
          "Créer du contenu visuel avec Canva",
          "LinkedIn : profil et networking",
          "Usages responsables et vie privée",
        ],
      },
      {
        num: "05",
        title: "SEO, SEA & visibilité web",
        duration: "2 à 3 jours",
        skills: [
          "Comprendre le référencement naturel (SEO)",
          "Mots-clés et optimisation de contenu",
          "Introduction à Google Ads (SEA)",
          "Google Analytics : lire les statistiques",
          "Stratégie de visibilité pour un petit budget",
        ],
      },
      {
        num: "06",
        title: "Sécurité numérique & smartphones",
        duration: "1 à 2 jours",
        skills: [
          "Protéger ses mots de passe et données",
          "Reconnaître le phishing et les arnaques",
          "Utiliser son smartphone efficacement",
          "Applications utiles au quotidien",
          "Paramètres de confidentialité",
        ],
      },
    ],
    techSkills: [
      {
        icon: <MonitorIcon className="w-5 h-5" />,
        name: "Windows",
      },
      {
        icon: <GlobeIcon className="w-5 h-5" />,
        name: "Internet & email",
      },
      {
        icon: <PanelsTopLeftIcon className="w-5 h-5" />,
        name: "Word / Excel",
      },
      {
        icon: <PenToolIcon className="w-5 h-5" />,
        name: "Photoshop",
      },
      {
        icon: <SmartphoneIcon className="w-5 h-5" />,
        name: "Réseaux sociaux",
      },
      {
        icon: <GlobeIcon className="w-5 h-5" />,
        name: "SEO & SEA",
      },
      {
        icon: <ShieldIcon className="w-5 h-5" />,
        name: "Sécurité en ligne",
      },
    ],
    softSkills: [
      "Autonomie numérique",
      "Confiance en soi",
      "Organisation personnelle",
      "Esprit critique face à l'info",
      "Communication digitale",
      "Adaptabilité",
    ],
    jobs: [
      {
        title: "Toute fonction nécessitant des bases IT",
        salary: "Tremplin vers l'emploi",
        tag: "Polyvalent",
      },
      {
        title: "Poursuite en formation qualifiante",
        salary: "Accès aux formations longues",
        tag: "Passerelle",
      },
      {
        title: "Employé·e administratif·ve",
        salary: "1 800 – 2 200 €/mois",
        tag: "Accessible",
      },
    ],
    insertionRate: "—",
    testimonial: {
      quote:
        "Avant, j'avais peur d'allumer un ordinateur. Maintenant je fais mes démarches en ligne et j'aide même mes voisins !",
      name: "Marie-Claire, 52 ans",
      role: "Stagiaire Chèques TIC · 2024",
    },
    conditions: [
      "Être inscrit·e comme demandeur·euse d'emploi (Actiris)",
      "Résider en Région de Bruxelles-Capitale",
      "Avoir minimum 18 ans",
      "Comprendre le français (niveau A2 minimum)",
      "Aucun prérequis informatique",
      "Inscriptions en continu, pas de session fixe",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1560719887-fe3105fa1e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya3Nob3AlMjBjb2xvcmZ1bCUyMHN0aWNreSUyMG5vdGVzJTIwZGVza3xlbnwxfHx8fDE3NzM3ODQ1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  "aventure-digitale": {
    title: "Aventure",
    accentWord: "Digitale",
    subtitle:
      "Un parcours de découverte de 6 semaines pour explorer les métiers du numérique et trouver la formation qui vous correspond.",
    duration: "6 semaines",
    selectionDate: "En continu",
    places: "15 stagiaires",
    location: "St-Gilles, BXL",
    totalHours: "~180h",
    stageHours: "0h",
    schedule: "Lundi → vendredi, 9h – 16h",
    isOpen: true,
    phases: [
      {
        num: "01",
        title: "Découverte du développement web",
        duration: "2 semaines",
        skills: [
          "Introduction à HTML & CSS",
          "Premières lignes de JavaScript",
          "Créer une page web simple",
          "Comprendre le métier de développeur·euse",
          "Mini-projet : votre première page",
        ],
      },
      {
        num: "02",
        title: "Découverte du design numérique",
        duration: "2 semaines",
        skills: [
          "Les bases de la composition visuelle",
          "Initiation à Canva & Figma",
          "Créer une affiche et un logo simple",
          "Comprendre le métier de designer",
          "Mini-projet : une identité visuelle",
        ],
      },
      {
        num: "03",
        title: "Découverte du hardware & réseaux",
        duration: "2 semaines",
        skills: [
          "Ouvrir un PC et comprendre ses composants",
          "Bases du réseau (câbles, Wi-Fi, IP)",
          "Initiation à la ligne de commande",
          "Comprendre les métiers de l'infrastructure",
          "Orientation : choisir sa formation qualifiante",
        ],
      },
    ],
    techSkills: [
      {
        icon: <CodeIcon className="w-5 h-5" />,
        name: "HTML / CSS / JS",
      },
      {
        icon: <PaintbrushIcon className="w-5 h-5" />,
        name: "Canva & Figma",
      },
      {
        icon: <ServerIcon className="w-5 h-5" />,
        name: "Hardware PC",
      },
      {
        icon: <GlobeIcon className="w-5 h-5" />,
        name: "Réseaux",
      },
      {
        icon: <TerminalIcon className="w-5 h-5" />,
        name: "Ligne de commande",
      },
      {
        icon: <LayersIcon className="w-5 h-5" />,
        name: "Design visuel",
      },
    ],
    softSkills: [
      "Curiosité & ouverture",
      "Travail en équipe",
      "Découverte de soi",
      "Prise de décision",
      "Gestion du temps",
      "Communication",
    ],
    jobs: [
      {
        title: "Accès à Web Developer",
        salary: "Suite logique si passion code",
        tag: "Passerelle",
      },
      {
        title: "Accès à Digital Designer",
        salary: "Suite logique si passion design",
        tag: "Passerelle",
      },
      {
        title: "Accès à Tech PC & Réseaux",
        salary: "Suite logique si passion hardware",
        tag: "Passerelle",
      },
    ],
    insertionRate: "—",
    testimonial: {
      quote:
        "Je ne savais pas du tout quoi faire dans le numérique. L'Aventure Digitale m'a permis de tester les trois domaines et j'ai choisi Web Developer sans hésiter.",
      name: "Karim, 24 ans",
      role: "Stagiaire Aventure Digitale → Web Dev 2025",
    },
    conditions: [
      "Être inscrit·e comme demandeur·euse d'emploi (Actiris)",
      "Résider en Région de Bruxelles-Capitale",
      "Avoir minimum 18 ans",
      "Comprendre le français (niveau A2 minimum)",
      "Aucun prérequis informatique",
      "Inscriptions en continu, entrées régulières",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1682063631532-b865521538fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZXhwbG9yYXRpb24lMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzM3NTg3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
};

export const otherFormations = [
  {
    slug: "web-developer",
    title: "Web Developer",
    desc: "Codez des applications web complètes.",
    color: "bg-[#016baf]/10 text-[#016baf]",
    icon: "💻",
  },
  {
    slug: "digital-designer",
    title: "Digital Designer",
    desc: "Créez des visuels et identités pour le web.",
    color: "bg-[#059669]/10 text-[#059669]",
    icon: "🎨",
  },
  {
    slug: "tech-pc-reseaux",
    title: "Tech PC & Réseaux",
    desc: "Installez et dépannez systèmes et réseaux.",
    color: "bg-[#6366f1]/10 text-[#6366f1]",
    icon: "🖥️",
  },
  {
    slug: "animateur-digital",
    title: "Animateur Digital",
    desc: "Accompagnez les publics dans le numérique.",
    color: "bg-[#f43f5e]/10 text-[#f43f5e]",
    icon: "📱",
  },
  {
    slug: "cheques-tic",
    title: "Chèques TIC",
    desc: "Renforcez vos bases numériques.",
    color: "bg-[#8b5cf6]/10 text-[#8b5cf6]",
    icon: "✅",
  },
  {
    slug: "aventure-digitale",
    title: "Aventure Digitale",
    desc: "Explorez les métiers du numérique.",
    color: "bg-[#0ea5e9]/10 text-[#0ea5e9]",
    icon: "🚀",
  },
];

export const heroTabs = [
  {
    label: "Hardware & Réseaux",
    color: "#6366f1",
    bgColor: "#eef2ff",
  },
  {
    label: "Design",
    color: "#059669",
    bgColor: "#ecfdf5",
  },
  {
    label: "Web Dev",
    color: "#016baf",
    bgColor: "#eff6ff",
  },
];

export const getCtaLabel = (e) =>
  e ? "Prochaine étape : séance d'info" : "Être prévenu·e";
