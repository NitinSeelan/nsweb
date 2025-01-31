"use client";

import React from "react";
import { useRouter } from "next/navigation";
import MyLink from "../components/MyLink"; // Custom Link component

// Sample data for modules
const modulesData = [
  { id: 1, title: "Introduction to Programming", description: "Learn the basics of programming using Python.", status: "Completed" },
  { id: 2, title: "Web Development Fundamentals", description: "Learn HTML, CSS, and JavaScript to build websites.", status: "In Progress" },
  { id: 3, title: "Data Structures and Algorithms", description: "Dive into common data structures and algorithms.", status: "Not Started" },
  { id: 4, title: "Database Management Systems", description: "Learn about relational databases and SQL.", status: "Completed" },
  { id: 5, title: "Machine Learning", description: "Understand machine learning concepts and applications.", status: "In Progress" },
];

// Component for each module button
const ModuleItem = ({ module }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/modules/${module.id}`);
  };

  return (
    <div
      className={`module-item ${module.status.toLowerCase().replace(" ", "-")}`}
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px 0",
        backgroundColor: "#f9f9f9",
      }}
    >
      <button
        onClick={handleNavigation}
        style={{
          all: "unset",
          cursor: "pointer",
          display: "block",
          width: "100%",
          textAlign: "left",
        }}
      >
        <h3 style={{ margin: "0 0 10px" }}>{module.title}</h3>
        <p style={{ margin: "0 0 5px" }}>{module.description}</p>
        <span
          style={{
            display: "inline-block",
            padding: "5px 10px",
            backgroundColor: module.status === "Completed" ? "#d4edda" : module.status === "In Progress" ? "#ffeeba" : "#f8d7da",
            color: module.status === "Completed" ? "#155724" : module.status === "In Progress" ? "#856404" : "#721c24",
            borderRadius: "5px",
            fontSize: "0.9em",
          }}
        >
          {module.status}
        </span>
      </button>
    </div>
  );
};

// Main page component
const ModulesPage = () => {
  return (
    <div className="modules-page" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ marginBottom: "20px" }}>Course Modules</h1>

      <div className="module-list" style={{ marginBottom: "30px" }}>
        {modulesData.map((module) => (
          <ModuleItem key={module.id} module={module} />
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <MyLink href="/somepath" style={{ textDecoration: "none", color: "#007bff" }}>
          Go to some other page
        </MyLink>
      </div>
    </div>
  );
};

export default ModulesPage;
