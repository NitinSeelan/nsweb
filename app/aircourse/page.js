'use client'
import React, { useState } from 'react';
import Image from "next/image"; // Assuming you need to use an image later
import styles from "../globals.css"; // Global styles import
import MyLink from "../components/MyLink"; // Custom Link component import

// Sample data for modules
const modulesData = [
  { id: 1, title: "Introduction to Programming", description: "Learn the basics of programming using Python.", status: "Completed" },
  { id: 2, title: "Web Development Fundamentals", description: "Learn HTML, CSS, and JavaScript to build websites.", status: "In Progress" },
  { id: 3, title: "Data Structures and Algorithms", description: "Dive into common data structures and algorithms.", status: "Not Started" },
  { id: 4, title: "Database Management Systems", description: "Learn about relational databases and SQL.", status: "Completed" },
  { id: 5, title: "Machine Learning", description: "Understand machine learning concepts and applications.", status: "In Progress" },
  { id: 6, title: "Introduction to Programming", description: "Learn the basics of programming using Python.", status: "Completed" },
  { id: 7, title: "Web Development Fundamentals", description: "Learn HTML, CSS, and JavaScript to build websites.", status: "In Progress" },
  { id: 8, title: "Data Structures and Algorithms", description: "Dive into common data structures and algorithms.", status: "Not Started" },
  { id: 9, title: "Database Management Systems", description: "Learn about relational databases and SQL.", status: "Completed" },
  { id: 10, title: "Machine Learning", description: "Understand machine learning concepts and applications.", status: "In Progress" },
];

const ModuleItem = ({ module, onClick }) => {
  return (
    <div
      className={`module-item ${module.status.toLowerCase().replace(' ', '-')}`}
      onClick={() => onClick(module.id)}
    >
      <h3>{module.title}</h3>
      <p>{module.description}</p>
      <span className={`status status-${module.status.toLowerCase().replace(' ', '-')}`}>
        {module.status}
      </span>
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
