import { 
    FaJava, 
  } from "react-icons/fa";
  
  import { IoLogoJavascript } from "react-icons/io5";
  import { BiLogoTypescript } from "react-icons/bi";
  import { BiLogoSpringBoot } from "react-icons/bi";
  import { FaFlutter } from "react-icons/fa6";
  import { SiDart } from "react-icons/si";
  import { FaAndroid } from "react-icons/fa";
  import { FaUnity } from "react-icons/fa";
  import { FaReact } from "react-icons/fa";
  import { TbBrandReactNative } from "react-icons/tb";
  import { SiOpengl } from "react-icons/si";
  import { BiLogoPostgresql } from "react-icons/bi";
  import { BiLogoCPlusPlus } from "react-icons/bi";
  import { FaCss3Alt } from "react-icons/fa";
  import { FaHtml5 } from "react-icons/fa";
  import { TbBrandCSharp } from "react-icons/tb";
  import { SiDotnet } from "react-icons/si";
  import { SiAgora } from "react-icons/si";
  import { IoLogoFirebase } from "react-icons/io5";

  // Mapping
const iconMap = {
    "Java": FaJava,
    "JavaScript": IoLogoJavascript,
    "TypeScript": BiLogoTypescript,
    "Spring Boot": BiLogoSpringBoot,
    "Flutter": FaFlutter,
    "Dart": SiDart,
    "Android": FaAndroid,
    "Unity": FaUnity,
    "React": FaReact,
    "React Native": TbBrandReactNative,
    "OpenGL": SiOpengl,
    "PostgreSQL": BiLogoPostgresql,
    "C++": BiLogoCPlusPlus,
    "C#": TbBrandCSharp,
    "CSS": FaCss3Alt,
    "HTML": FaHtml5,
    ".NET": SiDotnet,
    "Agora":SiAgora,
    "Firebase": IoLogoFirebase,
  };
  
  const TechIcon = ({ name, color}) => {
    const IconComponent = iconMap[name];
  
    if (!IconComponent) return <span style={{ fontSize: "5rem" }}>❓</span>; // fallback
  
    return <IconComponent size={"100%"} title={name} color = {color} />;
  };
  
  
  
  export default TechIcon;