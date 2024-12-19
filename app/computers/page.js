'use client';
import { useState } from "react";
import styles from "../globals.css"; // Ensure your styles are properly linked

// Define the modules and lessons
const modules = [
  {
    title: "Module 0: Introduction",
    lessons: [
      { title: "0.1 Join GC", link: "/lessons/0-1-join-gc" },
      { title: "0.2 Info Form", link: "/lessons/0-2-info-form" },
      { title: "0.3 Succeeding in this Course", link: "/lessons/0-3-succeeding-in-this-course" },
      { title: "0.4 [quiz] Unit 0", link: "/lessons/0-4-quiz-unit-0" },
    ],
  },
  {
    title: "Module 1: How a Computer Works?",
    lessons: [
      { title: "1.1 Early Computing", link: "/lessons/1-1-early-computing" },
      { title: "1.2 Electronic Computing", link: "/lessons/1-2-electronic-computing" },
      { title: "1.3 Parts of a Computer", link: "/lessons/1-3-parts-of-a-computer" },
      { title: "1.4 Binary", link: "/lessons/1-4-binary" },
      { title: "1.5 Storage vs Memory", link: "/lessons/1-5-storage-vs-memory" },
      { title: "1.6 HD vs. SSD", link: "/lessons/1-6-hd-vs-ssd" },
      { title: "1.7 [quiz] Storage/Memory", link: "/lessons/1-7-quiz-storage-memory" },
      { title: "1.8 CPU", link: "/lessons/1-8-cpu" },
      { title: "1.9 GPU", link: "/lessons/1-9-gpu" },
      { title: "1.10 Motherboard", link: "/lessons/1-10-motherboard" },
      { title: "1.11 Other Parts", link: "/lessons/1-11-other-parts" },
      { title: "1.12 [quiz] Parts of a Computer", link: "/lessons/1-12-quiz-parts-of-a-computer" },
      { title: "1.13 External Parts of a Computer", link: "/lessons/1-13-external-parts-of-a-computer" },
      { title: "1.14 [quiz] Unit Review", link: "/lessons/1-14-quiz-unit-review" },
      { title: "1.15 Unit Practice", link: "/lessons/1-15-unit-practice" },
      { title: "1.16 [test] How a Computer Works Summative", link: "/lessons/1-16-test-how-a-computer-works-summative" },
    ],
  },
  {
    title: "Module 2: Programming",
    lessons: [
      { title: "2.1 Early Programming", link: "/lessons/2-1-early-programming" },
      { title: "2.2 The First Languages", link: "/lessons/2-2-the-first-languages" },
      { title: "2.3 Python Basics", link: "/lessons/2-3-python-basics" },
      { title: "2.4 Calculator Project", link: "/lessons/2-4-calculator-project" },
      { title: "2.5 Create a Simple Quiz in Python", link: "/lessons/2-5-create-a-simple-quiz-in-python" },
      { title: "2.6 Types, Loops, Arrays, & Objects", link: "/lessons/2-6-types-loops-arrays-objects" },
      { title: "2.7 Restaurant Project", link: "/lessons/2-7-restaurant-project" },
      { title: "2.8 Functions [Part 1]", link: "/lessons/2-8-functions-part-1" },
      { title: "2.9 Functions [Part 2]", link: "/lessons/2-9-functions-part-2" },
      { title: "2.10 [quiz] Python Basics", link: "/lessons/2-10-quiz-python-basics" },
      { title: "2.11 Python Basics Review A", link: "/lessons/2-11-python-basics-review-a" },
      { title: "2.12 Python Basics Review B", link: "/lessons/2-12-python-basics-review-b" },
      { title: "2.13 [project] Python Final Project", link: "/lessons/2-13-project-python-final-project" },
      { title: "2.14 [test] Python Summative Assessment", link: "/lessons/2-14-test-python-summative-assessment" },
    ],
  },
  {
    title: "Module 3: Operating Systems",
    lessons: [
      { title: "3.1 Introduction to Operating Systems", link: "/lessons/3-1-introduction-to-operating-systems" },
      { title: "3.2 Command Line", link: "/lessons/3-2-command-line" },
      { title: "3.3 MacOS", link: "/lessons/3-3-macos" },
      { title: "3.4 Windows", link: "/lessons/3-4-windows" },
      { title: "3.5 Linux", link: "/lessons/3-5-linux" },
      { title: "3.6 Unix", link: "/lessons/3-6-unix" },
      { title: "3.7 ChromeOS", link: "/lessons/3-7-chromeos" },
      { title: "3.8 [quiz] Operating Systems", link: "/lessons/3-8-quiz-operating-systems" },
      { title: "3.9 Terminal Programming", link: "/lessons/3-9-terminal-programming" },
      { title: "3.10 [test] Operating Systems Summative", link: "/lessons/3-10-test-operating-systems-summative" },
    ],
  },
  {
    title: "Module 4: CPU (Central Processing Unit)",
    lessons: [
      { title: "4.1 Introduction to the CPU", link: "/lessons/4-1-introduction-to-the-cpu" },
      { title: "4.2 Components of the CPU", link: "/lessons/4-2-components-of-the-cpu" },
      { title: "4.3 How the CPU Works (Fetch-Decode-Execute Cycle)", link: "/lessons/4-3-how-the-cpu-works-fetch-decode-execute-cycle" },
      { title: "4.4 Clock Speed and Performance", link: "/lessons/4-4-clock-speed-and-performance" },
      { title: "4.5 Different Types of Intel CPUs", link: "/lessons/4-5-different-types-of-intel-cpus" },
      { title: "4.6 M-Series Chips (Apple Silicon)", link: "/lessons/4-6-m-series-chips-apple-silicon" },
      { title: "4.7 Overclocking and Thermal Management", link: "/lessons/4-7-overclocking-and-thermal-management" },
      { title: "4.8 [quiz] Understanding the CPU", link: "/lessons/4-8-quiz-understanding-the-cpu" },
      { title: "4.9 [test] CPU Knowledge Summative", link: "/lessons/4-9-test-cpu-knowledge-summative" },
    ],
  },
  {
    title: "Module 5: Networking",
    lessons: [
      { title: "5.1 Introduction to Networking", link: "/lessons/5-1-introduction-to-networking" },
      { title: "5.2 Types of Networks (LAN, WAN, VPN)", link: "/lessons/5-2-types-of-networks-lan-wan-vpn" },
      { title: "5.3 IP Addressing and Subnetting", link: "/lessons/5-3-ip-addressing-and-subnetting" },
      { title: "5.4 DNS (Domain Name System)", link: "/lessons/5-4-dns-domain-name-system" },
      { title: "5.5 Routers, Switches, and Hubs", link: "/lessons/5-5-routers-switches-and-hubs" },
      { title: "5.6 TCP/IP Model", link: "/lessons/5-6-tcp-ip-model" },
      { title: "5.7 OSI Model", link: "/lessons/5-7-osi-model" },
      { title: "5.8 Wireless Networking (Wi-Fi, Bluetooth)", link: "/lessons/5-8-wireless-networking-wi-fi-bluetooth" },
      { title: "5.9 Network Security (Firewalls, Encryption)", link: "/lessons/5-9-network-security-firewalls-encryption" },
      { title: "5.10 [quiz] Networking Basics", link: "/lessons/5-10-quiz-networking-basics" },
      { title: "5.11 [project] Build a Simple Network", link: "/lessons/5-11-project-build-a-simple-network" },
      { title: "5.12 [test] Networking Summative", link: "/lessons/5-12-test-networking-summative" },
    ],
  },
  {
    title: "Module 6: Mobile Phones",
    lessons: [
      { title: "6.1 Introduction to Mobile Phones", link: "/lessons/6-1-introduction-to-mobile-phones" },
      { title: "6.2 Early Mobile Phones (Blackberry, Microsoft)", link: "/lessons/6-2-early-mobile-phones-blackberry-microsoft" },
      { title: "6.3 iPhone and its Evolution", link: "/lessons/6-3-iphone-and-its-evolution" },
      { title: "6.4 Samsung Smartphones", link: "/lessons/6-4-samsung-smartphones" },
      { title: "6.5 Key Mobile Phone Chips", link: "/lessons/6-5-key-mobile-phone-chips" },
      { title: "6.6 How Mobile Chips Differ from Desktop CPUs", link: "/lessons/6-6-how-mobile-chips-differ-from-desktop-cpus" },
      { title: "6.7 Mobile Operating Systems (iOS, Android, Windows, Blackberry OS)", link: "/lessons/6-7-mobile-operating-systems-ios-android-windows-blackberry-os" },
      { title: "6.8 Mobile Phone Technology Trends", link: "/lessons/6-8-mobile-phone-technology-trends" },
      { title: "6.9 [quiz] Mobile Phones and Their Chips", link: "/lessons/6-9-quiz-mobile-phones-and-their-chips" },
      { title: "6.10 Mobile Phones Practice", link: "/lessons/6-10-mobile-phones-practice" },
      { title: "6.11 [test] Mobile Phones and Their Chips Summative", link: "/lessons/6-11-test-mobile-phones-and-their-chips-summative" },
    ],
  },
  {
    title: "Module 7: Artificial Intelligence and Machine Learning",
    lessons: [
      { title: "7.1 Introduction to Artificial Intelligence (AI)", link: "/lessons/7-1-introduction-to-artificial-intelligence-ai" },
      { title: "7.2 History and Evolution of AI", link: "/lessons/7-2-history-and-evolution-of-ai" },
      { title: "7.3 Types of AI: Narrow AI vs. General AI", link: "/lessons/7-3-types-of-ai-narrow-ai-vs-general-ai" },
      { title: "7.4 Machine Learning (ML) Basics", link: "/lessons/7-4-machine-learning-ml-basics" },
      { title: "7.5 Supervised, Unsupervised, and Reinforcement Learning", link: "/lessons/7-5-supervised-unsupervised-and-reinforcement-learning" },
      { title: "7.6 Neural Networks and Deep Learning", link: "/lessons/7-6-neural-networks-and-deep-learning" },
      { title: "7.7 AI in Real-Life Applications", link: "/lessons/7-7-ai-in-real-life-applications" },
      { title: "7.8 Ethics in AI and Automation", link: "/lessons/7-8-ethics-in-ai-and-automation" },
      { title: "7.9 AI and Data Science", link: "/lessons/7-9-ai-and-data-science" },
      { title: "7.10 Tools and Frameworks for AI (TensorFlow, PyTorch)", link: "/lessons/7-10-tools-and-frameworks-for-ai-tensorflow-pytorch" },
      { title: "7.11 [quiz] Understanding AI and Machine Learning", link: "/lessons/7-11-quiz-understanding-ai-and-machine-learning" },
      { title: "7.12 [project] Build a Simple Machine Learning Model", link: "/lessons/7-12-project-build-a-simple-machine-learning-model" },
      { title: "7.13 [test] AI and Machine Learning Summative", link: "/lessons/7-13-test-ai-and-machine-learning-summative" },
    ],
  },
  {
    title: "Module 8: Software Development",
    lessons: [
      { title: "8.1 Introduction to Software Development", link: "/lessons/8-1-introduction-to-software-development" },
      { title: "8.2 The Software Development Life Cycle (SDLC)", link: "/lessons/8-2-the-software-development-life-cycle-sdlc" },
      { title: "8.3 Planning and Requirements Gathering", link: "/lessons/8-3-planning-and-requirements-gathering" },
      { title: "8.4 Software Design (UML, Wireframes, Prototypes)", link: "/lessons/8-4-software-design-uml-wireframes-prototypes" },
      { title: "8.5 Development Methodologies (Agile, Waterfall, DevOps)", link: "/lessons/8-5-development-methodologies-agile-waterfall-devops" },
      { title: "8.6 Version Control (Git, GitHub)", link: "/lessons/8-6-version-control-git-github" },
      { title: "8.7 Testing and Debugging (Unit Testing, Integration Testing)", link: "/lessons/8-7-testing-and-debugging-unit-testing-integration-testing" },
      { title: "8.8 Documentation and Code Comments", link: "/lessons/8-8-documentation-and-code-comments" },
      { title: "8.9 Continuous Integration and Continuous Deployment (CI/CD)", link: "/lessons/8-9-continuous-integration-and-continuous-deployment-cicd" },
      { title: "8.10 Software Development Tools and IDEs (VS Code, Eclipse)", link: "/lessons/8-10-software-development-tools-and-ides-vs-code-eclipse" },
      { title: "8.11 [quiz] Software Development Basics", link: "/lessons/8-11-quiz-software-development-basics" },
      { title: "8.12 [project] Build a Simple Software Application", link: "/lessons/8-12-project-build-a-simple-software-application" },
      { title: "8.13 [test] Software Development Summative", link: "/lessons/8-13-test-software-development-summative" },
    ],
  },
  {
    title: "Module 9: Computer Graphics",
    lessons: [
      { title: "9.1 Introduction to Computer Graphics", link: "/lessons/9-1-introduction-to-computer-graphics" },
      { title: "9.2 Types of Graphics: Raster vs. Vector", link: "/lessons/9-2-types-of-graphics-raster-vs-vector" },
      { title: "9.3 The Graphics Pipeline", link: "/lessons/9-3-the-graphics-pipeline" },
      { title: "9.4 Pixels and Resolution", link: "/lessons/9-4-pixels-and-resolution" },
      { title: "9.5 2D Graphics (Drawing Shapes, Color Models, Bitmap Images)", link: "/lessons/9-5-2d-graphics-drawing-shapes-color-models-bitmap-images" },
      { title: "9.6 3D Graphics (Meshes, Textures, Shading)", link: "/lessons/9-6-3d-graphics-meshes-textures-shading" },
      { title: "9.7 Rendering Techniques (Ray Tracing, Rasterization)", link: "/lessons/9-7-rendering-techniques-ray-tracing-rasterization" },
      { title: "9.8 Animation and Motion Graphics", link: "/lessons/9-8-animation-and-motion-graphics" },
      { title: "9.9 Graphics Software (Adobe Photoshop, Illustrator, Blender)", link: "/lessons/9-9-graphics-software-adobe-photoshop-illustrator-blender" },
      { title: "9.10 Graphics in Gaming and Movies", link: "/lessons/9-10-graphics-in-gaming-and-movies" },
      { title: "9.11 [quiz] Computer Graphics Basics", link: "/lessons/9-11-quiz-computer-graphics-basics" },
      { title: "9.12 [project] Create a 2D or 3D Graphic Design", link: "/lessons/9-12-project-create-a-2d-or-3d-graphic-design" },
      { title: "9.13 [test] Computer Graphics Summative", link: "/lessons/9-13-test-computer-graphics-summative" },
    ],
  },
  {
    title: "Module 10: Virtual Reality and Augmented Reality",
    lessons: [
      { title: "10.1 Introduction to Virtual Reality (VR) and Augmented Reality (AR)", link: "/lessons/10-1-introduction-to-virtual-reality-vr-and-augmented-reality-ar" },
      { title: "10.2 The Difference Between VR and AR", link: "/lessons/10-2-the-difference-between-vr-and-ar" },
      { title: "10.3 Hardware for VR and AR (Headsets, Controllers, Cameras)", link: "/lessons/10-3-hardware-for-vr-and-ar-headsets-controllers-cameras" },
      { title: "10.4 VR Development Tools (Unity, Unreal Engine)", link: "/lessons/10-4-vr-development-tools-unity-unreal-engine" },
      { title: "10.5 AR Development Tools (ARKit, ARCore)", link: "/lessons/10-5-ar-development-tools-arkit-arcore" },
      { title: "10.6 Applications of VR and AR (Gaming, Education, Healthcare)", link: "/lessons/10-6-applications-of-vr-and-ar-gaming-education-healthcare" },
      { title: "10.7 VR and AR in Education and Training", link: "/lessons/10-7-vr-and-ar-in-education-and-training" },
      { title: "10.8 The Future of VR and AR (Metaverse, Mixed Reality)", link: "/lessons/10-8-the-future-of-vr-and-ar-metaverse-mixed-reality" },
      { title: "10.9 Ethical Issues in VR and AR", link: "/lessons/10-9-ethical-issues-in-vr-and-ar" },
      { title: "10.10 Designing Immersive Experiences", link: "/lessons/10-10-designing-immersive-experiences" },
      { title: "10.11 [quiz] VR and AR Basics", link: "/lessons/10-11-quiz-vr-and-ar-basics" },
      { title: "10.12 [project] Create a Simple AR Experience", link: "/lessons/10-12-project-create-a-simple-ar-experience" },
      { title: "10.13 [test] VR and AR Summative", link: "/lessons/10-13-test-vr-and-ar-summative" },
    ],
  }
];

export default function CourseModules() {
    const [selectedModule, setSelectedModule] = useState(null);
  
    const toggleModule = (index) => {
      if (selectedModule === index) {
        setSelectedModule(null); // Collapse the module
      } else {
        setSelectedModule(index); // Expand the selected module
      }
    };
  
    return (
      <div className="modulesContainer">
        <h1 className="pageTitle">Modules</h1>
  
        <div className="moduleList">
          {modules.map((module, index) => (
            <div key={index} className="module">
              <div
                className="moduleHeader"
                onClick={() => toggleModule(index)}
              >
                <span>{module.title}</span>
                <span className="toggleText">
                  {selectedModule === index ? "Minimize" : "Expand"}
                </span>
              </div>
  
              {selectedModule === index && module.lessons.length > 0 && (
                <ul className="lessonList">
                  {module.lessons.map((lesson, idx) => (
                    <li key={idx} className="lessonItem">
                      <a href={lesson.link} className="lessonLink">
                        {lesson.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }