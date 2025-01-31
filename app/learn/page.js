"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MyLink from "../components/MyLink"; // Custom Link component
import AuthService from "../services/auth.service";

// Sample data for modules
const modulesData = [
  { id: 1, title: "Math", description: "Learn the basics of programming using Python.", status: "Not Started" },
  { id: 2, title: "English", description: "Learn HTML, CSS, and JavaScript to build websites.", status: "Not Started" },
  { id: 3, title: "Science", description: "Dive into common data structures and algorithms.", status: "Not Started" },
  { id: 4, title: "History", description: "Learn about relational databases and SQL.", status: "Not Started" },
  { id: 5, title: "STEM", description: "Understand machine learning concepts and applications.", status: "Not Started" },
  { id: 6, title: "Aircourse", description: "Learn about relational databases and SQL.", status: "Not Started" },
];

// Component for each module button
const ModuleItem = ({ module }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`learn/${module.title.toLowerCase()}`); // Converts title to lowercase
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
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
      router.push("/"); // Redirect to login page if not logged in
    } else {
      setUser(currentUser); // Set user information if logged in
    }
  }, [router]);

  if (!user) {
    return <div></div>; // Show a loading state while redirecting or fetching data
  }

  return (
    <div className="modules-page" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ marginBottom: "20px" }}>Assignments</h1>

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
