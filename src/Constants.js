

export const projects = [
    
    {
      "title": "Chess Environment and Agent",
      "description": `This project presents a custom-built chess AI developed to operate effectively under limited processing power. 
          At its core, it leverages a handcrafted evaluation function to assess board states. The AI evaluates each position and determines optimal moves using the
          minimax algorithm enhanced with alpha-beta pruning to reduce the search space while performance bottlenecks are addressed with move sorting heuristics and threading to 
          parallelize computation. `,
      "technologies": ["Java"],
      "hasVideo": true,
      "src": "/CW2_DIA_VID.mp4",
      "projectLink": "https://github.com/Konkz7/Chess-Engine",
    },

    {
      "title": "2D-Platformer: Possessed",
      "description": `A 2d side scrolling platformer which was developed with a main research topic in mind.
        What makes a game fun? For this project , I delved into many different factors that contributes to a games'
        success and it wasnt a simple task, it often varied depending on what type of vision / genre you aimed for.
        I expressed my vision through pure, intense tests of dexterity and immersion through story and self made 
        animations/graphics while controlling the behaviour of every asset with C# scripts.`,
      "technologies": ["C#","Unity"],
      "hasVideo": true,
      "src": "/game-trailer.mp4",
      "projectLink": "https://github.com/Konkz7/Unity-Possessed-Platformer",
    },

    {
      "title": "KPMG Whistblower App",
      "description": `As my first contribution to the public, this project has a special place in my career. This app
       was originally just a way to offer options to report / contact to KPMG support staff however an internal client
       requested that this wasnt as helpful as having the app call a helpdesk hotline through the app and essentially 
       implement a voice over the internet function. As a result, I was in charge of the development and soon it will be ready
       to be released as a permanent addition.`,
      "technologies": ["Flutter","C#",".NET","Agora","Firebase"],
      "hasVideo": false,
      "src": "/images/whistleBlower-trailer.png",
      "projectLink": "https://github.com/Konkz7/KPMG-Whistleblower-App",
    },

    {
      "title": "Hyper-Heuristic Algorithms",
      "description": `In this project, a two-stage hyper-heuristic framework was implemented to dynamically 
      select and apply low-level heuristics (LLHs) for optimization while promoting exploration with random
      (and appropriate) parameter resets. In Stage 1, LLHs were selected and applied with outcomes evaluated using an adaptive acceptance 
      method. This stage terminated after a set duration without improvement. Stage 2 expanded the LLH 
      pool by combining every pair , followed by a reduction step to refine and assign probabilities to a 
      smaller, more effective set of heuristics.`,
      "technologies": ["Java"],
      "hasVideo": false,
      "src": "/images/heuristic-trailer.png",
      "projectLink": "https://github.com/Konkz7/Hyper-Heuristic-Algorithms",
    },

    {
      "title": "Social Media Platfom : BetSocial",
      "description": `This is an ongoing individual project that I pursue for two reasons. Firstly, I fimrly 
      believe in its success because of its distinct composition. Secondly, I used the development of the project as an 
      opportunity to learn about every detail and consideration that goes into the enterprisal software engineering
      process and the full-stack experience. Initially, I was overwhelmed but I charged on and made complex additions
      and manipulated intricate features such as websockets and security filters.`,
      "technologies": ["Spring Boot","React Native","PostgreSQL","TypeScript","Java","Firebase"],
      "hasVideo": false,
      "src": "/images/betSocial-trailer.png",
      "projectLink": "https://github.com/Konkz7/BetSocial",
    },

    {
      "title": "OpenGl Island Scene",
      "description": `Probably one of the hardest projects I have worked on to date. Despite the lackluster visuals,
        we were responsible for developing complex vertex and fragment shader files. This involves creating the math
        that describes where each triangle fractal / fragment is and how its coloured or textured. Furthermore, 
        even more intricacy was used to implement light and shadow logic. We even found ourselves making our own obj file
        parser which was very insightful.`,
      "technologies": ["C++","OpenGL"],
      "hasVideo": true,
      "src": "/openGL-trailer.mp4",
      "projectLink": "https://github.com/Konkz7/OpenGL-IslandScene",
    },

    {
      "title": "Self Serving Password Manager",
      "description": `A quick and personal challenge I gave myself to keep my skills sharpened and my mind lazy.
      This came from a problem I often have, I have way too many accounts and applications that I need and have needed
      passwords for. Since I'm not all knowing, I often practice unsafe password standards, prioritising ease of access over
      security and even then, I sometimes forget the password I made all together. So I knew my next project had to be
      the solution. Funnily enough, its not a nice looking one but it does the job.`,
      "technologies": ["Android", "Java"],
      "hasVideo": false,
      "src": "/images/password-trailer.png",
      "projectLink": "https://github.com/Konkz7/passwordApp",
    },

    {
      "title": "Portfolio Website",
      "description": `A project that serves to encapsulate myself and who I am as a software developer in a web
        page. Quite ironic.`,
      "technologies": ["React","JavaScript","CSS","HTML"],
      "hasVideo": false,
      "src": "/images/portfolio-trailer.png",
      "projectLink": "https://github.com/Konkz7/portfolio",
    },


];


