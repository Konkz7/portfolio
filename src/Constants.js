export const projects = [

    {
      "title": "BetSocial: Social Prediction Platform",
      "description": `My largest solo project, and now a released product. BetSocial is a social app where users create,
        share and join prediction-based challenges with friends, message each other in real time and settle outcomes
        together as a community. I built both halves: a Java 21 / Spring Boot backend secured with Spring Security, a
        PostgreSQL schema managed through Flyway migrations, real-time messaging over STOMP WebSockets, Firebase
        authentication and push notifications, moderation tools such as user blocking, content reports and an admin
        approval queue, and a React Native client written in TypeScript. Version 1.0 shipped in September 2026 as a signed
        Android APK, backed by a server I deployed with Docker Compose and Caddy, with backend tests running in CI.`,
      "technologies": ["Spring Boot","Java","React Native","TypeScript","PostgreSQL","Firebase"],
      "hasVideo": false,
      "src": "/images/betSocial-trailer.png",
      "projectLink": "https://github.com/Konkz7/BetSocial",
    },

    {
      "title": "KPMG Whistleblower App",
      "description": `My first piece of production work, so this project has a special place in my career. The app lets
        KPMG staff raise concerns anonymously, but originally it could only point them towards ways of contacting support
        staff. An internal client asked for something more direct: calling a helpdesk hotline from inside the app. I led
        the development of that voice-over-internet feature, building real-time calling with the Agora SDK, push
        notifications with OneSignal, a Go token server to issue call tokens, and a custom queue management system with
        load balancing and intelligent routing that cut response latency by 25%. It is now deployed across KPMG's internal
        tools for an app with 1,000+ active users.`,
      "technologies": ["Flutter","Dart","C#",".NET","Agora","Firebase"],
      "hasVideo": false,
      "src": "/images/whistleBlower-trailer.png",
      // The main app repo is private (client work), so visitors would hit a 404.
      // This public repo is the Agora token server built alongside it.
      "projectLink": "https://github.com/Konkz7/tokenServer",
    },

    {
      "title": "Odd One Out: Party Games",
      "description": `A mobile collection of five pass-the-phone party games for a room full of people and one phone, with
        no accounts and no internet needed. Each game puts a twist on social deduction: spot the player with a slightly
        different secret word, find the real trivia answer hidden among everyone's fakes, or work out who has secretly been
        told to argue the opposite side. Built in Unity 6 and C#, it has a game-mode framework that every game plugs into,
        a content pipeline that generates all the word pairs, trivia and clues from seed data, and EditMode and PlayMode
        test suites. It is fully offline by design and currently being prepared for Google Play and the App Store.`,
      "technologies": ["C#","Unity","Android"],
      "hasVideo": false,
      "src": "/images/oddOneOut-trailer.png",
      "projectLink": "https://github.com/Konkz7/Imposter",
    },

    {
      "title": "Chess Environment and Agent",
      "description": `A Java chess engine and playable chess application built to perform well on limited processing power.
        It implements the full rules of chess, including castling, en passant, promotion and draw by repetition, and offers
        two competing AI approaches: minimax with alpha-beta pruning, and Monte Carlo Tree Search. Positions are scored by a
        handcrafted evaluation function that weighs material, centre control, mobility, king safety, pawn structure and
        more, while move-ordering heuristics and multi-threaded move evaluation keep the search fast. A bot-vs-bot mode lets
        the agents play each other to tune the evaluation weights.`,
      "technologies": ["Java"],
      "hasVideo": true,
      "src": "/videos/CW2_DIA_VID.mp4",
      "projectLink": "https://github.com/Konkz7/Chess-Engine",
    },

    {
      "title": "2D-Platformer: Possessed",
      "description": `A 2D side-scrolling platformer built around one research question: what makes a game fun? The answer
        turned out to depend heavily on the vision and genre you aim for, so I committed to mine: intense tests of dexterity,
        and immersion through story. The story is set against the fight with climate change. Players use momentum-based
        movement, directional kicks and parries to battle corrupted enemies, then take on a climate-change demon in an aerial
        boss fight. I made the animations and graphics myself and scripted the behaviour of every asset in C#.`,
      "technologies": ["C#","Unity"],
      "hasVideo": true,
      "src": "/videos/game-trailer.mp4",
      "projectLink": "https://github.com/Konkz7/Unity-Possessed-Platformer",
    },

    {
      "title": "FlowState: Team Productivity App",
      "description": `A collaborative productivity app for people who plan in focus sessions rather than plain to-do lists,
        built by a team as a full-stack .NET 8 application: an ASP.NET Core REST API, a Blazor front end, and EF Core on
        SQL Server. I joined the team and delivered 13 reviewed and merged pull requests, ticket by ticket. They covered
        the task models and data layer, the dashboard and task list, the Eisenhower prioritisation matrix, and shared
        sessions with invites so people can bring others into a workspace.`,
      "technologies": ["C#",".NET"],
      "hasVideo": false,
      "src": "/images/flowstate-trailer.png",
      "projectLink": "https://github.com/Yosefgid/FlowState",
    },

    {
      "title": "Personal Health Passport",
      "description": `A privacy-first health record that uses local AI to turn unstructured clinical notes into structured
        medical information and patient-friendly summaries. It combines scispaCy entity extraction, UMLS linking and a
        locally run LLM, so sensitive data never leaves the machine. As a contributor on the team, I built the registration
        and login flow across the ASP.NET Core backend and Blazor front end, and fixed the MVC layer that handles the
        clinical entities the NLP pipeline extracts.`,
      "technologies": ["C#",".NET"],
      "hasVideo": false,
      "src": "/images/healthPassport-trailer.png",
      "projectLink": "https://github.com/michh18/personal-health-passport",
    },

    {
      "title": "Hyper-Heuristic Algorithms",
      "description": `A two-stage hyper-heuristic framework that dynamically selects and applies low-level heuristics (LLHs)
        to optimisation problems, encouraging exploration through random but controlled parameter resets. In Stage 1, LLHs
        are selected and applied, and each outcome is judged by an adaptive acceptance method. This stage ends after a set
        period without improvement. Stage 2 expands the LLH pool by combining every pair of heuristics, then a reduction
        step narrows it to a smaller, more effective set and assigns each one a selection probability.`,
      "technologies": ["Java"],
      "hasVideo": false,
      "src": "/images/heuristic-trailer.png",
      "projectLink": "https://github.com/Konkz7/Hyper-Heuristic-Algorithms",
    },

    {
      "title": "OpenGL Island Scene",
      "description": `Probably one of the hardest projects I have worked on to date. Despite the modest visuals, we were
        responsible for writing complex vertex and fragment shaders, which meant working out the maths behind where every
        vertex sits and how each fragment is coloured or textured. On top of that, we implemented lighting and shadow logic,
        and even wrote our own OBJ file parser to load models, which was very insightful.`,
      "technologies": ["C++","OpenGL"],
      "hasVideo": true,
      "src": "/videos/openGL-trailer.mp4",
      "projectLink": "https://github.com/Konkz7/OpenGL-IslandScene",
    },

    {
      "title": "Self Serving Password Manager",
      "description": `A quick personal challenge to keep my skills sharp and my mind lazy. It came from a problem I have all
        the time: far too many accounts and applications that need passwords. I often fell into unsafe habits, putting ease
        of access ahead of security, and sometimes forgot the password altogether. So I knew my next project had to be the
        solution. Funnily enough, it is not the nicest-looking app, but it does the job.`,
      "technologies": ["Android","Java"],
      "hasVideo": false,
      "src": "/images/password-trailer.png",
      "projectLink": "https://github.com/Konkz7/passwordApp",
    },
        {
      "title": "Freelance Development Website",
      "description": `A single-page marketing site for my freelance software development work. It's built to show a
        prospective client that an idea, a feature or an existing codebase can be turned into working software. It's
        made with React, TypeScript and Vite, styled with Tailwind CSS and shadcn/ui, and animated with Framer Motion. All
        of the page's copy is driven from separate data files, so updating content never means touching components. The
        site has a filterable work section and a validated enquiry form that sends submissions to a form provider, or opens
        a pre-filled email if none is set up. It deploys automatically to GitHub Pages on every push.`,
      "technologies": ["React","TypeScript","CSS","HTML"],
      "hasVideo": false,
      "src": "/images/freelance-trailer.png",
      "projectLink": "https://github.com/Konkz7/freelance",
    },

    {
      "title": "Portfolio Website",
      "description": `A project that serves to capture who I am as a software developer in a single web page, from my
        projects and experience to my cybersecurity work and certifications. Quite ironic.`,
      "technologies": ["React","JavaScript","CSS","HTML"],
      "hasVideo": false,
      "src": "/images/portfolio-trailer.png",
      "projectLink": "https://github.com/Konkz7/portfolio",
    },

];

export const certifications = [
  {
    "title" : "Google Cybersecurity Professional Certificate",
    "src": "/images/google-cyber-image.jpg",
    "description" : `Completed Google's professional certificate on cybersecurity practices and their impact on
    organisations. Learned to identify common risks, threats and vulnerabilities, along with the techniques used to
    mitigate them, and to protect networks, devices, people and data from unauthorised access and cyberattacks using
    Security Information and Event Management (SIEM) tools. Gained hands-on experience with Python, Linux and SQL.`,
  },
  {
    "title" : "Qualys Vulnerability Management",
    "src": "/images/qualys-edit.jpg",
    "description" : `Completed training in identifying, assessing and managing security vulnerabilities across systems,
    covering vulnerability scanning, analysis, remediation workflows and risk-based prioritisation. Learned to use the
    Qualys TruRisk platform for security and compliance, from asset visibility and vulnerability detection to risk
    scoring and reducing exposure across an organisation. Configured and deployed Qualys sensors (virtual, cloud,
    network or endpoint) and learned how they collect security data and feed into the wider Qualys ecosystem.`,
  }

]

export const cyberSecurityProjects = [
  {
    title: "EDR Attack & Detection Lab",
    description: `Built a controlled attack-and-detect lab that mirrors a real SOC workflow. I compromised a Windows 11
endpoint with a Sliver C2 payload from an Ubuntu attacker host, then investigated the activity in LimaCharlie through
process, network and file-hash telemetry. To finish, I wrote custom detection and response rules to catch the threat
if it returned.`,
    image: "/images/edr.png",
    github: "https://github.com/Konkz7/CyberSecurityLabs/blob/main/SoyouwanttobeaSOCanalyst.pdf"
  },
  {
    title: "Wireshark Network Forensics",
    description: `End-to-end packet capture and network investigation: captured live traffic, filtered and inspected TCP,
DNS and TLS sessions for anomalies, and documented the findings in a formal technical report.`,
    image: "/images/wireshark.png",
    github: "https://github.com/Konkz7/CyberSecurityLabs/blob/main/wiresharkDemoLab.pdf"
  },
  {
    title: "Metasploit Penetration Testing",
    description: `Conducted a full exploitation cycle using the Metasploit Framework, from target enumeration, module
selection and payload configuration through exploit execution and post-exploitation, to demonstrate a real-world
penetration testing methodology.`,
    image: "/images/metasploit.png",
    github: "https://github.com/Konkz7/CyberSecurityLabs/blob/main/metasploitDemoLab.pdf"
  },
  {
    title: "Hack The Box – Introductory Penetration Testing",
    description: `Worked through the Hack The Box Starting Point track and wrote up eight machines: Meow, Fawn, Dancing,
Redeemer, Appointment, Sequel, Crocodile and Responder. Each one took enumeration, service scanning, vulnerability
discovery and exploitation of misconfigured or exposed services on Linux and Windows hosts.`,
    image: "/images/htb.png",
    github: "https://github.com/Konkz7/CyberSecurityLabs/tree/main/htbPenTesting"
  }
];