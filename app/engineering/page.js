'use client'
import React, { useState } from "react";
import styles from "../globals.css";

const modules = [
    {
      title: "Introduction to Engineering",
      lessons: [
        { title: "0.1 What is Engineering?", description: "Introduction to the field of engineering and its role in society." },
        { title: "0.2 Different Fields of Engineering (Mechanical, Civil, Electrical, etc.)", description: "Overview of the different branches of engineering." },
        { title: "0.3 Engineering Design Process", description: "Steps involved in the engineering design process, including defining problems and creating solutions." },
        { title: "0.4 The Importance of Engineering in Society", description: "How engineering impacts various aspects of modern life, including infrastructure, healthcare, and technology." },
        { title: "0.5 Careers in Engineering", description: "Overview of various engineering careers and their impact on society." },
        { title: "0.6 Engineering Ethics and Safety", description: "Ethical considerations and safety protocols in engineering practices." },
        { title: "0.7 [quiz] Engineering Basics", description: "Quiz to test your understanding of the basic concepts of engineering." },
        { title: "0.8 [project] Design a Simple Solution to a Problem", description: "Project where you will apply engineering principles to design a simple solution to a real-world problem." },
        { title: "0.9 [test] Introduction to Engineering Knowledge Test", description: "Summative test to assess your knowledge of engineering concepts." },
      ],
    },
    {
      title: "Engineering Design and Problem-Solving",
      lessons: [
        { title: "1.1 The Engineering Design Process", description: "Detailed breakdown of the steps involved in the design process, from defining to testing." },
        { title: "1.2 Identifying Problems and Solutions", description: "How to identify engineering problems and create effective solutions." },
        { title: "1.3 Brainstorming and Sketching Ideas", description: "Techniques for brainstorming and sketching design ideas." },
        { title: "1.4 Building Prototypes", description: "Learn about prototyping and how to build a model of your design." },
        { title: "1.5 Testing and Refining Designs", description: "Testing prototypes to refine and optimize your designs." },
        { title: "1.6 Materials and Their Properties", description: "Understand the properties of materials like wood, metal, and plastic." },
        { title: "1.7 [quiz] Engineering Design Process", description: "A quiz to test your understanding of the design process." },
        { title: "1.8 [project] Design and Build a Prototype (Arduino)", description: "Hands-on project where you design and build a working prototype using Arduino." },
        { title: "1.9 [test] Engineering Design and Problem-Solving Assessment", description: "Test your knowledge of the design process and problem-solving skills." },
      ],
    },
    {
      title: "Structures and Materials",
      lessons: [
        { title: "2.1 Introduction to Structures", description: "Overview of different types of structures like bridges, buildings, and towers." },
        { title: "2.2 Types of Structures (Beams, Arches, Domes)", description: "Exploring various types of structural designs and their functions." },
        { title: "2.3 Forces and Loads on Structures", description: "Understanding the forces acting on structures and how they affect stability." },
        { title: "2.4 Materials in Engineering (Strength, Durability, Cost)", description: "Overview of how material choice impacts engineering designs." },
        { title: "2.5 Testing Material Strength", description: "Methods for testing and comparing the strength of materials." },
        { title: "2.6 Sustainable Materials in Engineering", description: "Exploring the use of sustainable and eco-friendly materials in engineering." },
        { title: "2.7 [quiz] Structural Engineering", description: "Quiz on the principles of structural engineering." },
        { title: "2.8 [project] Build a Model Bridge or Tower", description: "Hands-on project to build a model bridge or tower using basic materials." },
        { title: "2.9 [test] Structures and Materials Knowledge Test", description: "Test your understanding of structures and materials." },
      ],
    },
    {
      title: "Simple Machines",
      lessons: [
        { title: "3.1 Introduction to Simple Machines", description: "An overview of the six types of simple machines and how they function." },
        { title: "3.2 Types of Simple Machines (Lever, Pulley, Wheel and Axle, Inclined Plane, Screw, Wedge)", description: "Detailed explanation of each simple machine and their uses." },
        { title: "3.3 How Simple Machines Make Work Easier", description: "Understanding how simple machines reduce effort required to perform tasks." },
        { title: "3.4 Compound Machines (Combination of Simple Machines)", description: "Introduction to compound machines and how multiple simple machines work together." },
        { title: "3.5 Mechanical Advantage and Efficiency", description: "Learn about mechanical advantage, efficiency, and how simple machines optimize performance." },
        { title: "3.6 Real-World Applications of Simple Machines", description: "Explore how simple machines are used in real-world engineering applications." },
        { title: "3.7 [quiz] Simple Machines Basics", description: "Quiz on the basics of simple machines." },
        { title: "3.8 [project] Build a Simple Machine (using Arduino)", description: "Hands-on project to build a simple machine using Arduino." },
        { title: "3.9 [test] Simple Machines and Their Applications Test", description: "Test your understanding of simple machines and their applications." },
      ],
    },
    {
      title: "Electricity and Circuits",
      lessons: [
        { title: "4.1 Introduction to Electricity and Circuits", description: "Overview of basic electrical concepts such as current, voltage, and resistance." },
        { title: "4.2 Basic Concepts of Voltage, Current, and Resistance", description: "Detailed explanation of voltage, current, and resistance and their relationship in circuits." },
        { title: "4.3 Components of a Circuit (Battery, Resistor, Switch, Wires)", description: "Explanation of the basic components used to build an electrical circuit." },
        { title: "4.4 Series and Parallel Circuits", description: "Comparison of series and parallel circuits and their applications." },
        { title: "4.5 Ohm’s Law and Its Applications", description: "Understanding Ohm's Law and how it applies to circuit design." },
        { title: "4.6 Building Simple Circuits", description: "Learn to build basic electrical circuits and test their functionality." },
        { title: "4.7 Renewable Energy Sources (Solar, Wind)", description: "Introduction to renewable energy sources and their applications in electrical circuits." },
        { title: "4.8 [quiz] Electrical Circuits Knowledge Test", description: "Test your knowledge of electrical circuits and components." },
        { title: "4.9 [project] Build a Simple Circuit (using Arduino)", description: "Hands-on project to build a simple circuit using Arduino." },
        { title: "4.10 [test] Electricity and Circuits Summative Test", description: "Final test on electricity and circuits." },
      ],
    },
    {
      title: "Robotics and Automation",
      lessons: [
        { title: "5.1 Introduction to Robotics", description: "Overview of robotics and its significance in engineering." },
        { title: "5.2 Components of a Robot (Sensors, Actuators, Controllers)", description: "Learn about the key components that make up a robot." },
        { title: "5.3 Types of Robots (Industrial, Service, Autonomous)", description: "Explore the various types of robots and their roles." },
        { title: "5.4 Basic Robot Programming (Sensors, Motors, Arduino)", description: "Introduction to robot programming and how to control sensors and motors." },
        { title: "5.5 Automation in Manufacturing and Everyday Life", description: "Understanding how automation is applied in manufacturing and daily life." },
        { title: "5.6 Ethical Considerations in Robotics", description: "Examine ethical issues surrounding the use of robots and automation." },
        { title: "5.7 [quiz] Robotics Basics", description: "Quiz on the fundamentals of robotics." },
        { title: "5.8 [project] Build a Simple Robot (using Arduino)", description: "Hands-on project to build a basic robot using Arduino." },
        { title: "5.9 [test] Robotics and Automation Assessment", description: "Test your knowledge of robotics and automation." },
      ],
    },
    {
      title: "Environmental Engineering",
      lessons: [
        { title: "6.1 Introduction to Environmental Engineering", description: "Overview of environmental engineering and its role in protecting the planet." },
        { title: "6.2 Sustainability and Green Engineering", description: "Learn about sustainable practices in engineering and the importance of green design." },
        { title: "6.3 Renewable Resources and Energy Conservation", description: "Exploring renewable energy sources and how engineers contribute to energy conservation." },
        { title: "6.4 Waste Management and Recycling", description: "Techniques for managing waste and promoting recycling in engineering projects." },
        { title: "6.5 Water and Air Pollution Control", description: "Understanding the role of environmental engineering in pollution control and environmental protection." },
        { title: "6.6 The Role of Engineers in Environmental Protection", description: "How engineers are essential in addressing environmental challenges." },
        { title: "6.7 [quiz] Environmental Engineering Basics", description: "Quiz on the basics of environmental engineering and its practices." },
        { title: "6.8 [project] Design a Sustainable Solution (Recycling System, Energy Conservation Plan)", description: "Project to design a sustainable solution, focusing on energy conservation or waste management." },
        { title: "6.9 [test] Environmental Engineering Knowledge Test", description: "Test your knowledge of environmental engineering and sustainability." },
      ],
    },
    {
      title: "Computer-Aided Design (CAD)",
      lessons: [
        { title: "7.1 Introduction to CAD Software (AutoCAD, Fusion 360)", description: "Introduction to computer-aided design (CAD) software and its applications in engineering." },
        { title: "7.2 Basics of 2D and 3D Design", description: "Learn the fundamentals of designing in both 2D and 3D within CAD software." },
        { title: "7.3 Drawing and Modeling Parts in CAD", description: "Step-by-step guide on how to draw and model parts using CAD software." },
        { title: "7.4 3D Printing and Prototyping", description: "Exploring the relationship between CAD design and prototyping through 3D printing." },
        { title: "7.5 Applications of CAD in Engineering", description: "How CAD is used in various engineering fields, including mechanical and civil engineering." },
        { title: "7.6 Designing and Testing Products Virtually", description: "Use CAD to design, test, and refine products virtually before manufacturing." },
        { title: "7.7 [quiz] CAD Basics", description: "Quiz on the fundamentals of CAD software and design." },
        { title: "7.8 [project] Design a 3D Model of an Object (using CAD software)", description: "Hands-on project where you design a 3D model of an object using CAD software." },
        { title: "7.9 [test] CAD Knowledge Test", description: "Test your knowledge of CAD and its applications in engineering." },
      ],
    },
    {
      title: "Aerodynamics and Fluid Mechanics",
      lessons: [
        { title: "8.1 Introduction to Aerodynamics", description: "Learn the principles of aerodynamics and how they affect engineering design, particularly in aviation." },
        { title: "8.2 Principles of Flight (Lift, Drag, Thrust, and Weight)", description: "Understanding the forces that act on an aircraft in flight." },
        { title: "8.3 Types of Aircraft and Their Design", description: "Explore different types of aircraft and the engineering behind their design." },
        { title: "8.4 Fluid Mechanics Basics (Pressure, Flow, Bernoulli’s Principle)", description: "Introduction to the basics of fluid mechanics and key principles like Bernoulli's." },
        { title: "8.5 Applications in Engineering (Aerospace, Automotive, Water Systems)", description: "Applications of fluid mechanics in various engineering fields such as aerospace, automotive, and water systems." },
        { title: "8.6 [quiz] Aerodynamics and Fluid Mechanics Basics", description: "Test your understanding of the principles of aerodynamics and fluid mechanics." },
        { title: "8.7 [project] Build a Paper Airplane or Balloon-Powered Car (with Arduino)", description: "Hands-on project to build a simple flying or moving object using the principles of aerodynamics and fluid mechanics." },
        { title: "8.8 [test] Aerodynamics and Fluid Mechanics Summative Test", description: "Final test on aerodynamics and fluid mechanics principles." },
      ],
    },
    {
      title: "Transportation Engineering",
      lessons: [
        { title: "9.1 Introduction to Transportation Engineering", description: "Overview of transportation engineering and its importance in infrastructure development." },
        { title: "9.2 Types of Transportation Systems (Road, Rail, Air, Water)", description: "Understanding the various types of transportation systems and their design considerations." },
        { title: "9.3 Transportation Infrastructure (Bridges, Tunnels, Roads)", description: "Key infrastructure components in transportation, including bridges and tunnels." },
        { title: "9.4 Traffic Flow and Urban Planning", description: "Exploring traffic flow management and its integration into urban planning." },
        { title: "9.5 Green Transportation (Electric Vehicles, Sustainable Design)", description: "The role of green technologies in shaping sustainable transportation systems." },
        { title: "9.6 Future of Transportation (Autonomous Vehicles, Hyperloop)", description: "Exploring the future of transportation, including autonomous vehicles and futuristic technologies like the Hyperloop." },
        { title: "9.7 [quiz] Transportation Engineering Basics", description: "Test your understanding of transportation systems and their components." },
        { title: "9.8 [project] Design a Transportation System (using Arduino)", description: "Project to design and simulate a transportation system using Arduino." },
        { title: "9.9 [test] Transportation Engineering Assessment", description: "Final test on transportation engineering principles." },
      ],
    },
    {
      title: "Engineering Ethics and Careers",
      lessons: [
        { title: "10.1 Introduction to Engineering Ethics", description: "Overview of the role of ethics in engineering, including decision-making and responsibility." },
        { title: "10.2 Professional Ethics in Engineering", description: "Learn about the ethical standards and codes of conduct for engineers in the professional world." },
        { title: "10.3 Safety in Engineering Practice", description: "The importance of safety protocols and practices in engineering projects." },
        { title: "10.4 Engineers and Society (Responsibility, Sustainability)", description: "Exploring the societal responsibilities of engineers, including sustainability and social impact." },
        { title: "10.5 Career Paths in Engineering (Civil, Mechanical, Electrical, etc.)", description: "Understanding the various career paths in engineering and their specific areas of focus." },
        { title: "10.6 Skills Needed for an Engineering Career", description: "Overview of the skills necessary for a successful career in engineering." },
        { title: "10.7 [quiz] Engineering Ethics", description: "Quiz on the ethical considerations in engineering practices." },
        { title: "10.8 [project] Research an Engineering Career and Present Findings", description: "Project where you research a specific engineering career and present your findings." },
        { title: "10.9 [test] Engineering Ethics and Careers Knowledge Test", description: "Test your knowledge of engineering ethics and career paths." },
      ],
    },
  ];

export default function ModulesPage() {
    // Manage expanded state for all modules
    const [expanded, setExpanded] = useState({});
  
    const toggleModule = (moduleIndex) => {
      setExpanded((prev) => ({
        ...prev,
        [moduleIndex]: !prev[moduleIndex],
      }));
    };
  
    return (
      <div className="modules-page">
        <h1 className="page-title">Modules</h1>
        {modules.map((module, index) => (
          <div key={index} className="module">
            {/* Module Header */}
            <div
              className="module-header"
              onClick={() => toggleModule(index)}
            >
              <span> {index} | {module.title}</span>
              <span>{expanded[index] ? "Minimize" : "Expand"}</span>
            </div>
  
            {/* Module Content */}
            {expanded[index] && (
              <div className="module-content">
                <ul className="module-list">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="module-item">
                      <a
                        href={lesson.link}
                        className="module-link"
                      >
                        {lesson.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
  