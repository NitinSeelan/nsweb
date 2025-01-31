"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MyLink from "../../components/MyLink"; // Custom Link component
import AuthService from "../../services/auth.service";

// Sample data for modules
const modulesData = [
  { id: 1, title: "Grade 4", description: "Learn the basics of programming using Python.", status: "Not Started", url: "grade4" },
  { id: 2, title: "Grade 5", description: "Learn HTML, CSS, and JavaScript to build websites.", status: "Not Started", url: "grade5" },
  { id: 3, title: "Grade 6", description: "Dive into common data structures and algorithms.", status: "Not Started", url: "grade6" },
  { id: 4, title: "Grade 7", description: "Learn about relational databases and SQL.", status: "Not Started", url: "grade7" },
  { id: 5, title: "Enhanced 7/8", description: "Understand machine learning concepts and applications.", status: "Not Started", url: "grade7/8" },
  { id: 6, title: "Grade 8", description: "Learn about relational databases and SQL.", status: "Not Started", url: "grade8" },
  { id: 7, title: "Enhanced Math 1", description: "Learn about relational databases and SQL.", status: "Not Started", url: "grade1" },
];

// Component for each module button
const ModuleItem = ({ module }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`math/${module.url.toLowerCase()}`); // Converts title to lowercase
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
