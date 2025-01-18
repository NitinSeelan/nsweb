'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image"; 
import styles from "../globals.css"; // Global styles import
import MyLink from "../components/MyLink"; 
import Link from "next/link"; // Import Link from Next.js for client-side navigation

// Sample data for modules
const modulesData = [
  // Module 0: Introduction
  { id: 1, title: "0.1 Join GC", description: "Join Google Classroom to stay updated on the course.", status: "Not Started", link: "/modules/join-gc" },
  { id: 2, title: "0.2 Info Form", description: "Fill out the course information form.", status: "Not Started", link: "/modules/info-form" },
  { id: 3, title: "0.3 Succeeding in this Course", description: "Learn strategies for success in this course.", status: "Not Started", link: "/modules/course-success" },
  { id: 4, title: "0.4 [quiz] Unit 0", description: "Test your understanding of Unit 0.", status: "Not Started", link: "/modules/unit-0-quiz" },

  // Module 1: How a Computer Works?
  { id: 5, title: "1.1 Early Computing", description: "Explore the history of early computing machines.", status: "Not Started", link: "/modules/early-computing" },
  { id: 6, title: "1.2 Electronic Computing", description: "Learn about the evolution of electronic computers.", status: "Not Started", link: "/modules/electronic-computing" },
  { id: 7, title: "1.3 Parts of a Computer", description: "Understand the components that make up a computer.", status: "Not Started", link: "/modules/parts-of-computer" },
  { id: 8, title: "1.4 Binary", description: "Learn the basics of binary numbers and logic.", status: "Not Started", link: "/modules/binary" },
  { id: 9, title: "1.5 Storage vs Memory", description: "Differentiate between storage and memory in computers.", status: "Not Started", link: "/modules/storage-vs-memory" },
  { id: 10, title: "1.6 HD vs. SSD", description: "Compare hard drives (HD) and solid-state drives (SSD).", status: "Not Started", link: "/modules/hd-vs-ssd" },
  { id: 11, title: "1.7 [quiz] Storage/Memory", description: "Quiz on storage and memory concepts.", status: "Not Started", link: "/modules/quiz-storage-memory" },
  { id: 12, title: "1.8 CPU", description: "Dive into how the central processing unit (CPU) works.", status: "Not Started", link: "/modules/cpu" },
  { id: 13, title: "1.9 GPU", description: "Learn about graphics processing units and their functions.", status: "Not Started", link: "/modules/gpu" },
  { id: 14, title: "1.10 Motherboard", description: "Explore the role and structure of motherboards.", status: "Not Started", link: "/modules/motherboard" },
  { id: 15, title: "1.11 Other Parts", description: "Learn about additional internal computer components.", status: "Not Started", link: "/modules/other-parts" },
  { id: 16, title: "1.12 [quiz] Parts of a Computer", description: "Quiz on computer components and their functions.", status: "Not Started", link: "/modules/quiz-parts" },
  { id: 17, title: "1.13 External Parts of a Computer", description: "Understand external components like peripherals.", status: "Not Started", link: "/modules/external-parts" },
  { id: 18, title: "1.14 [quiz] Unit Review", description: "Review and test your knowledge of Unit 1.", status: "Not Started", link: "/modules/unit-review-quiz" },
  { id: 19, title: "1.15 Unit Practice", description: "Practice problems for Unit 1 topics.", status: "Not Started", link: "/modules/unit-practice" },
  { id: 20, title: "1.16 [test] How a Computer Works Summative", description: "Summative test for Unit 1.", status: "Not Started", link: "/modules/unit-summative" },

  // Module 2: Programming
  { id: 21, title: "2.1 Early Programming", description: "Explore the history of programming languages.", status: "Not Started", link: "/modules/early-programming" },
  { id: 22, title: "2.2 The First Languages", description: "Learn about the first programming languages.", status: "Not Started", link: "/modules/first-languages" },
  { id: 23, title: "2.3 Python Basics", description: "Learn Python fundamentals.", status: "Not Started", link: "/modules/python-basics" },
  { id: 24, title: "2.4 Calculator Project", description: "Create a basic calculator using Python.", status: "Not Started", link: "/modules/calculator-project" },
  { id: 25, title: "2.5 Create a Simple Quiz in Python", description: "Build a quiz application with Python.", status: "Not Started", link: "/modules/python-quiz-project" },
  { id: 26, title: "2.6 Types, Loops, Arrays, & Objects", description: "Dive deeper into Python structures and concepts.", status: "Not Started", link: "/modules/python-types-loops" },
  { id: 27, title: "2.7 Restaurant Project", description: "Simulate a restaurant menu application in Python.", status: "Not Started", link: "/modules/restaurant-project" },
  { id: 28, title: "2.8 Functions [Part 1]", description: "Learn the basics of functions in Python.", status: "Not Started", link: "/modules/python-functions-1" },
  { id: 29, title: "2.9 Functions [Part 2]", description: "Advanced function concepts in Python.", status: "Not Started", link: "/modules/python-functions-2" },
  { id: 30, title: "2.10 [quiz] Python Basics", description: "Quiz on Python basics and programming concepts.", status: "Not Started", link: "/modules/python-basics-quiz" },
  { id: 31, title: "2.11 Python Basics Review A", description: "First review session for Python basics.", status: "Not Started", link: "/modules/python-review-a" },
  { id: 32, title: "2.12 Python Basics Review B", description: "Second review session for Python basics.", status: "Not Started", link: "/modules/python-review-b" },
  { id: 33, title: "2.13 [project] Python Final Project", description: "Create a final project demonstrating Python skills.", status: "Not Started", link: "/modules/python-final-project" },
  { id: 34, title: "2.14 [test] Python Summative Assessment", description: "Summative assessment for Python programming.", status: "Not Started", link: "/modules/python-summative" },
  // Module 3: Operating Systems
  { id: 35, title: "3.1 Introduction to Operating Systems", description: "Learn what operating systems are and their functions.", status: "Not Started", link: "/modules/intro-to-os" },
  { id: 36, title: "3.2 Command Line", description: "Understand how to navigate and use the command line.", status: "Not Started", link: "/modules/command-line" },
  { id: 37, title: "3.3 MacOS", description: "Explore the features and functionality of MacOS.", status: "Not Started", link: "/modules/macos" },
  { id: 38, title: "3.4 Windows", description: "Learn about the Windows operating system and its capabilities.", status: "Not Started", link: "/modules/windows-os" },
  { id: 39, title: "3.5 Linux", description: "Understand Linux and its various distributions.", status: "Not Started", link: "/modules/linux" },
  { id: 40, title: "3.6 Unix", description: "Dive into the fundamentals of Unix-based systems.", status: "Not Started", link: "/modules/unix" },
  { id: 41, title: "3.7 ChromeOS", description: "Learn about ChromeOS and its use in modern devices.", status: "Not Started", link: "/modules/chromeos" },
  { id: 42, title: "3.8 [quiz] Operating Systems", description: "Quiz on the basics of operating systems.", status: "Not Started", link: "/modules/os-quiz" },
  { id: 43, title: "3.9 Terminal Programming", description: "Learn how to use terminal commands for basic programming.", status: "Not Started", link: "/modules/terminal-programming" },
  { id: 44, title: "3.10 [test] Operating Systems Summative", description: "Summative assessment for operating systems.", status: "Not Started", link: "/modules/os-summative" },

  // Module 4: CPU (Central Processing Unit)
  { id: 45, title: "4.1 Introduction to the CPU", description: "Learn about the central processing unit and its purpose.", status: "Not Started", link: "/modules/intro-to-cpu" },
  { id: 46, title: "4.2 Components of the CPU", description: "Understand the internal components of the CPU.", status: "Not Started", link: "/modules/cpu-components" },
  { id: 47, title: "4.3 How the CPU Works (Fetch-Decode-Execute Cycle)", description: "Learn how the CPU processes instructions using the cycle.", status: "Not Started", link: "/modules/cpu-cycle" },
  { id: 48, title: "4.4 Clock Speed and Performance", description: "Explore how clock speed impacts CPU performance.", status: "Not Started", link: "/modules/clock-speed" },
  { id: 49, title: "4.5 Different Types of Intel CPUs", description: "Learn about various Intel CPU families and their features.", status: "Not Started", link: "/modules/intel-cpus" },
  { id: 50, title: "4.6 M-Series Chips (Apple Silicon)", description: "Understand Apple's M-series chips and their innovations.", status: "Not Started", link: "/modules/apple-silicon" },
  { id: 51, title: "4.7 Overclocking and Thermal Management", description: "Learn how overclocking works and why thermal management is important.", status: "Not Started", link: "/modules/overclocking" },
  { id: 52, title: "4.8 [quiz] Understanding the CPU", description: "Quiz on CPU concepts and operations.", status: "Not Started", link: "/modules/cpu-quiz" },
  { id: 53, title: "4.9 [test] CPU Knowledge Summative", description: "Summative assessment for CPU topics.", status: "Not Started", link: "/modules/cpu-summative" },
  // Module 5: Networking
  { id: 54, title: "5.1 Introduction to Networking", description: "Learn the basics of computer networking and its importance.", status: "Not Started", link: "/modules/intro-to-networking" },
  { id: 55, title: "5.2 Types of Networks (LAN, WAN, VPN)", description: "Understand the different types of networks and their use cases.", status: "Not Started", link: "/modules/types-of-networks" },
  { id: 56, title: "5.3 IP Addressing and Subnetting", description: "Learn how IP addresses and subnetting work in networks.", status: "Not Started", link: "/modules/ip-addressing" },
  { id: 57, title: "5.4 DNS (Domain Name System)", description: "Understand how DNS resolves domain names to IP addresses.", status: "Not Started", link: "/modules/dns" },
  { id: 58, title: "5.5 Routers, Switches, and Hubs", description: "Explore the devices used to connect and manage networks.", status: "Not Started", link: "/modules/network-devices" },
  { id: 59, title: "5.6 TCP/IP Model", description: "Learn about the TCP/IP model and its layers.", status: "Not Started", link: "/modules/tcp-ip" },
  { id: 60, title: "5.7 OSI Model", description: "Dive into the OSI model and its seven layers.", status: "Not Started", link: "/modules/osi-model" },
  { id: 61, title: "5.8 Wireless Networking (Wi-Fi, Bluetooth)", description: "Understand how wireless networking technologies work.", status: "Not Started", link: "/modules/wireless-networking" },
  { id: 62, title: "5.9 Network Security (Firewalls, Encryption)", description: "Learn about network security and how to protect against threats.", status: "Not Started", link: "/modules/network-security" },
  { id: 63, title: "5.10 [quiz] Networking Basics", description: "Quiz on the fundamental concepts of networking.", status: "Not Started", link: "/modules/networking-quiz" },
  { id: 64, title: "5.11 [project] Build a Simple Network", description: "Apply your knowledge by building a simple network setup.", status: "Not Started", link: "/modules/network-project" },
  { id: 65, title: "5.12 [test] Networking Summative", description: "Summative assessment for networking concepts.", status: "Not Started", link: "/modules/networking-summative" },

  // Module 6: Mobile Phones
  { id: 66, title: "6.1 Introduction to Mobile Phones", description: "Learn about the history and evolution of mobile phones.", status: "Not Started", link: "/modules/intro-to-mobile-phones" },
  { id: 67, title: "6.2 Early Mobile Phones (Blackberry, Microsoft)", description: "Explore the pioneers of early mobile phones.", status: "Not Started", link: "/modules/early-mobile-phones" },
  { id: 68, title: "6.3 iPhone and its Evolution", description: "Understand the impact of the iPhone on mobile technology.", status: "Not Started", link: "/modules/iphone-evolution" },
  { id: 69, title: "6.4 Samsung Smartphones", description: "Learn about the history and advancements of Samsung smartphones.", status: "Not Started", link: "/modules/samsung-smartphones" },
  { id: 70, title: "6.5 Key Mobile Phone Chips", description: "Understand the chips that power mobile phones.", status: "Not Started", link: "/modules/mobile-phone-chips" },
  { id: 71, title: "6.6 How Mobile Chips Differ from Desktop CPUs", description: "Learn the differences between mobile and desktop processors.", status: "Not Started", link: "/modules/mobile-vs-desktop-chips" },
  { id: 72, title: "6.7 Mobile Operating Systems (iOS, Android, Windows, Blackberry OS)", description: "Explore mobile operating systems and their features.", status: "Not Started", link: "/modules/mobile-operating-systems" },
  { id: 73, title: "6.8 Mobile Phone Technology Trends", description: "Discover emerging trends in mobile phone technology.", status: "Not Started", link: "/modules/mobile-trends" },
  { id: 74, title: "6.9 [quiz] Mobile Phones and Their Chips", description: "Quiz on mobile phones and the chips that power them.", status: "Not Started", link: "/modules/mobile-phones-quiz" },
  { id: 75, title: "6.10 Mobile Phones Practice", description: "Practice key concepts related to mobile phones.", status: "Not Started", link: "/modules/mobile-practice" },
  { id: 76, title: "6.11 [test] Mobile Phones and Their Chips Summative", description: "Summative assessment for mobile phones and chips.", status: "Not Started", link: "/modules/mobile-phones-summative" },
  // Module 7: Artificial Intelligence and Machine Learning
  { id: 77, title: "7.1 Introduction to Artificial Intelligence (AI)", description: "Learn the fundamentals of artificial intelligence.", status: "Not Started", link: "/modules/intro-to-ai" },
  { id: 78, title: "7.2 History and Evolution of AI", description: "Explore the historical development of AI technology.", status: "Not Started", link: "/modules/history-of-ai" },
  { id: 79, title: "7.3 Types of AI: Narrow AI vs. General AI", description: "Understand the difference between narrow and general AI.", status: "Not Started", link: "/modules/types-of-ai" },
  { id: 80, title: "7.4 Machine Learning (ML) Basics", description: "Learn the basic concepts of machine learning.", status: "Not Started", link: "/modules/ml-basics" },
  { id: 81, title: "7.5 Supervised, Unsupervised, and Reinforcement Learning", description: "Explore the key types of machine learning approaches.", status: "Not Started", link: "/modules/types-of-ml" },
  { id: 82, title: "7.6 Neural Networks and Deep Learning", description: "Dive into the concepts of neural networks and deep learning.", status: "Not Started", link: "/modules/neural-networks" },
  { id: 83, title: "7.7 AI in Real-Life Applications", description: "Discover how AI is used in real-world scenarios.", status: "Not Started", link: "/modules/ai-applications" },
  { id: 84, title: "7.8 Ethics in AI and Automation", description: "Discuss the ethical considerations in AI and automation.", status: "Not Started", link: "/modules/ethics-in-ai" },
  { id: 85, title: "7.9 AI and Data Science", description: "Learn how AI intersects with data science and analytics.", status: "Not Started", link: "/modules/ai-and-data-science" },
  { id: 86, title: "7.10 Tools and Frameworks for AI (TensorFlow, PyTorch)", description: "Get introduced to popular AI tools and frameworks.", status: "Not Started", link: "/modules/ai-tools" },
  { id: 87, title: "7.11 [quiz] Understanding AI and Machine Learning", description: "Quiz on AI and machine learning concepts.", status: "Not Started", link: "/modules/ai-ml-quiz" },
  { id: 88, title: "7.12 [project] Build a Simple Machine Learning Model", description: "Apply your knowledge to build a basic machine learning model.", status: "Not Started", link: "/modules/ml-project" },
  { id: 89, title: "7.13 [test] AI and Machine Learning Summative", description: "Summative assessment for AI and machine learning.", status: "Not Started", link: "/modules/ai-summative" },

  // Module 8: Software Development
  { id: 90, title: "8.1 Introduction to Software Development", description: "Learn the basics of software development and its importance.", status: "Not Started", link: "/modules/intro-to-software-dev" },
  { id: 91, title: "8.2 The Software Development Life Cycle (SDLC)", description: "Explore the stages of the software development life cycle.", status: "Not Started", link: "/modules/sdlc" },
  { id: 92, title: "8.3 Planning and Requirements Gathering", description: "Understand how to plan and gather requirements for a project.", status: "Not Started", link: "/modules/planning-requirements" },
  { id: 93, title: "8.4 Software Design (UML, Wireframes, Prototypes)", description: "Learn about software design using UML, wireframes, and prototypes.", status: "Not Started", link: "/modules/software-design" },
  { id: 94, title: "8.5 Development Methodologies (Agile, Waterfall, DevOps)", description: "Discover popular development methodologies like Agile and DevOps.", status: "Not Started", link: "/modules/dev-methodologies" },
  { id: 95, title: "8.6 Version Control (Git, GitHub)", description: "Learn version control basics with tools like Git and GitHub.", status: "Not Started", link: "/modules/version-control" },
  { id: 96, title: "8.7 Testing and Debugging (Unit Testing, Integration Testing)", description: "Understand the importance of testing and debugging in software development.", status: "Not Started", link: "/modules/testing-debugging" },
  { id: 97, title: "8.8 Documentation and Code Comments", description: "Learn best practices for writing documentation and code comments.", status: "Not Started", link: "/modules/documentation" },
  { id: 98, title: "8.9 Continuous Integration and Continuous Deployment (CI/CD)", description: "Explore CI/CD and its role in modern software development.", status: "Not Started", link: "/modules/ci-cd" },
  { id: 99, title: "8.10 Software Development Tools and IDEs (VS Code, Eclipse)", description: "Get introduced to popular software development tools and IDEs.", status: "Not Started", link: "/modules/dev-tools" },
  { id: 100, title: "8.11 [quiz] Software Development Basics", description: "Quiz on the basics of software development.", status: "Not Started", link: "/modules/software-dev-quiz" },
  { id: 101, title: "8.12 [project] Build a Simple Software Application", description: "Apply your knowledge to create a simple software application.", status: "Not Started", link: "/modules/software-project" },
  { id: 102, title: "8.13 [test] Software Development Summative", description: "Summative assessment for software development.", status: "Not Started", link: "/modules/software-summative" },
  // Module 9: Computer Graphics
  { id: 103, title: "9.1 Introduction to Computer Graphics", description: "Learn the basics of computer graphics and their importance.", status: "Not Started", link: "/modules/intro-to-computer-graphics" },
  { id: 104, title: "9.2 Types of Graphics: Raster vs. Vector", description: "Understand the difference between raster and vector graphics.", status: "Not Started", link: "/modules/raster-vs-vector" },
  { id: 105, title: "9.3 The Graphics Pipeline", description: "Explore the stages of the graphics rendering pipeline.", status: "Not Started", link: "/modules/graphics-pipeline" },
  { id: 106, title: "9.4 Pixels and Resolution", description: "Learn about pixels and how resolution affects graphics quality.", status: "Not Started", link: "/modules/pixels-and-resolution" },
  { id: 107, title: "9.5 2D Graphics (Drawing Shapes, Color Models, Bitmap Images)", description: "Discover the fundamentals of 2D graphics design.", status: "Not Started", link: "/modules/2d-graphics" },
  { id: 108, title: "9.6 3D Graphics (Meshes, Textures, Shading)", description: "Dive into the concepts of 3D graphics and modeling.", status: "Not Started", link: "/modules/3d-graphics" },
  { id: 109, title: "9.7 Rendering Techniques (Ray Tracing, Rasterization)", description: "Learn about rendering techniques used in graphics.", status: "Not Started", link: "/modules/rendering-techniques" },
  { id: 110, title: "9.8 Animation and Motion Graphics", description: "Explore animation principles and motion graphics design.", status: "Not Started", link: "/modules/animation-motion-graphics" },
  { id: 111, title: "9.9 Graphics Software (Adobe Photoshop, Illustrator, Blender)", description: "Get introduced to popular graphics software tools.", status: "Not Started", link: "/modules/graphics-software" },
  { id: 112, title: "9.10 Graphics in Gaming and Movies", description: "Understand the role of graphics in gaming and films.", status: "Not Started", link: "/modules/graphics-gaming-movies" },
  { id: 113, title: "9.11 [quiz] Computer Graphics Basics", description: "Quiz on computer graphics fundamentals.", status: "Not Started", link: "/modules/graphics-quiz" },
  { id: 114, title: "9.12 [project] Create a 2D or 3D Graphic Design", description: "Apply your skills to create a graphic design project.", status: "Not Started", link: "/modules/graphics-project" },
  { id: 115, title: "9.13 [test] Computer Graphics Summative", description: "Summative assessment for computer graphics.", status: "Not Started", link: "/modules/graphics-summative" },

  // Module 10: Virtual Reality and Augmented Reality
  { id: 116, title: "10.1 Introduction to Virtual Reality (VR) and Augmented Reality (AR)", description: "Learn the basics of VR and AR technology.", status: "Not Started", link: "/modules/intro-to-vr-ar" },
  { id: 117, title: "10.2 The Difference Between VR and AR", description: "Understand the key differences between virtual and augmented reality.", status: "Not Started", link: "/modules/vr-vs-ar" },
  { id: 118, title: "10.3 Hardware for VR and AR (Headsets, Controllers, Cameras)", description: "Explore the hardware used in VR and AR setups.", status: "Not Started", link: "/modules/vr-ar-hardware" },
  { id: 119, title: "10.4 VR Development Tools (Unity, Unreal Engine)", description: "Learn about tools for developing VR applications.", status: "Not Started", link: "/modules/vr-tools" },
  { id: 120, title: "10.5 AR Development Tools (ARKit, ARCore)", description: "Get introduced to tools for developing AR experiences.", status: "Not Started", link: "/modules/ar-tools" },
  { id: 121, title: "10.6 Applications of VR and AR (Gaming, Education, Healthcare)", description: "Discover how VR and AR are applied in various fields.", status: "Not Started", link: "/modules/vr-ar-applications" },
  { id: 122, title: "10.7 VR and AR in Education and Training", description: "Learn how VR and AR enhance education and training.", status: "Not Started", link: "/modules/vr-ar-education" },
  { id: 123, title: "10.8 The Future of VR and AR (Metaverse, Mixed Reality)", description: "Explore future trends in VR and AR technology.", status: "Not Started", link: "/modules/vr-ar-future" },
  { id: 124, title: "10.9 Ethical Issues in VR and AR", description: "Discuss ethical considerations in VR and AR technology.", status: "Not Started", link: "/modules/vr-ar-ethics" },
  { id: 125, title: "10.10 Designing Immersive Experiences", description: "Learn principles of designing immersive VR and AR experiences.", status: "Not Started", link: "/modules/immersive-design" },
  { id: 126, title: "10.11 [quiz] VR and AR Basics", description: "Quiz on VR and AR fundamentals.", status: "Not Started", link: "/modules/vr-ar-quiz" },
  { id: 127, title: "10.12 [project] Create a Simple AR Experience", description: "Apply your skills to design a basic AR project.", status: "Not Started", link: "/modules/ar-project" },
  { id: 128, title: "10.13 [test] VR and AR Summative", description: "Summative assessment for VR and AR.", status: "Not Started", link: "/modules/vr-ar-summative" },

  // Module 3–10: Continue adding based on your exact content or ask me to fully expand it!
  ];

const ModuleItem = ({ module, onClick }) => {
  const [status, setStatus] = useState(module.status);

  // Handle "Start" or "Continue" button click
  const handleButtonClick = () => {
    if (status === "Not Started") {
      setStatus("In Progress");
      // Simulate saving progress (could use localStorage/sessionStorage or backend)
      localStorage.setItem(`module-${module.id}-status`, "In Progress");
    } else if (status === "In Progress") {
      setStatus("Completed");
      // Simulate saving completion status
      localStorage.setItem(`module-${module.id}-status`, "Completed");
    }
  };

  // Load progress status from localStorage on component mount
  useEffect(() => {
    const savedStatus = localStorage.getItem(`module-${module.id}-status`);
    if (savedStatus) {
      setStatus(savedStatus);
    }
  }, [module.id]);

  return (
    <div className={`module-item ${status.toLowerCase().replace(' ', '-')}`} onClick={() => onClick(module.id)}>
      <h3>{module.title}</h3> {/* Remove Link from the title */}

      <p>{module.description}</p>
      <span className={`status status-${status.toLowerCase().replace(' ', '-')}`}>
        {status}
      </span>

      {/* Move the link to the "Start" button */}
      <Link href={module.link}>
        <button className="btnc"onClick={handleButtonClick}>
          {status === "Not Started" ? "Start" : "Continue"}
        </button>
      </Link>
    </div>
  );
};

const ModulesPage = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  const handleModuleClick = (moduleId) => {
    const selected = modulesData.find(module => module.id === moduleId);
    setSelectedModule(selected);
  };

  return (
    <div className="modules-page">
      <h1>Course Modules</h1>
      
      <div className="module-list">
        {modulesData.map(module => (
          <ModuleItem key={module.id} module={module} onClick={handleModuleClick} />
        ))}
      </div>

      {selectedModule && (
        <div className="module-details">
          <h2>{selectedModule.title}</h2>
          <p><strong>Description:</strong> {selectedModule.description}</p>
          <p><strong>Status:</strong> {selectedModule.status}</p>
          {/* More detailed information can be added here */}
        </div>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <div className="aircoursediv">
      {/* You can place an image or content here */}
      <ModulesPage />
      {/* Possibly add other elements like a link */}
      <MyLink href="/somepath">Go to some other page</MyLink>
    </div>
  );
}
