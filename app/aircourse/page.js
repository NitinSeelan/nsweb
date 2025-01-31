"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import MyLink from "../components/MyLink"; // Custom Link component
import AuthService from "../services/auth.service";

// Sample data for modules
const modulesData = [
    { id: 1, title: "Wright Brothers", description: "Explore the pioneering efforts of the Wright Brothers in aviation history.", status: "Not Started" },
    { id: 2, title: "How an Airplane Flies", description: "Understand the science and physics behind how airplanes achieve flight.", status: "Not Started" },
    { id: 3, title: "Founding of Boeing", description: "Learn about the origins and early days of the Boeing company.", status: "Not Started" },
    { id: 4, title: "Start of the Jet Age", description: "Discover how the introduction of jet engines revolutionized air travel.", status: "Not Started" },
    { id: 5, title: "The 1960's", description: "Explore major advancements and milestones in commercial aviation during the 1960s.", status: "Not Started" },
    { id: 6, title: "The Boeing 747", description: "Dive into the development and impact of the Boeing 747, the original jumbo jet.", status: "Not Started" },
    { id: 7, title: "Airbus", description: "Learn about the rise of Airbus as a competitor in the aviation industry.", status: "Not Started" },
    { id: 8, title: "Boeing 767 and 757", description: "Understand the development and introduction of the Boeing 767 and 757 aircraft.", status: "Not Started" },
    { id: 9, title: "747 and 737 Updates", description: "Explore the updates and advancements made to the Boeing 747 and 737 models.", status: "Not Started" },
    { id: 10, title: "A310/A320", description: "Learn about the development and significance of Airbus A310 and A320 aircraft.", status: "Not Started" },
    { id: 11, title: "Airbus 767 Rival", description: "Understand Airbus's response to the Boeing 767 with its competing models.", status: "Not Started" },
    { id: 12, title: "737 NG", description: "Explore the features and upgrades introduced with the Boeing 737 Next Generation series.", status: "Not Started" },
    { id: 13, title: "New A320 Models", description: "Dive into the advancements in the A320 family of aircraft.", status: "Not Started" },
    { id: 14, title: "777", description: "Learn about the development of the Boeing 777, a highly successful wide-body aircraft.", status: "Not Started" },
    { id: 15, title: "McDonnell Douglas Merger", description: "Explore the merger between Boeing and McDonnell Douglas and its impact.", status: "Not Started" },
    { id: 16, title: "9/11", description: "Understand the impact of the 9/11 attacks on the aviation industry.", status: "Not Started" },
    { id: 17, title: "A318", description: "Discover the design and purpose of the Airbus A318, the smallest member of the A320 family.", status: "Not Started" },
    { id: 18, title: "A380", description: "Learn about the Airbus A380, the world's largest passenger aircraft.", status: "Not Started" },
    { id: 19, title: "A320neo", description: "Understand the innovations introduced with the A320neo (New Engine Option).", status: "Not Started" },
    { id: 20, title: "787 Dreamliner", description: "Explore the Boeing 787 Dreamliner, known for its fuel efficiency and modern features.", status: "Not Started" },
    { id: 21, title: "A350", description: "Learn about the Airbus A350, designed for long-range, fuel-efficient flights.", status: "Not Started" },
    { id: 22, title: "737 MAX", description: "Understand the features and challenges of the Boeing 737 MAX series.", status: "Not Started" },
    { id: 23, title: "A220", description: "Explore the development and role of the Airbus A220 in the aviation market.", status: "Not Started" },
    { id: 24, title: "New Developments", description: "Stay updated on the latest advancements and innovations in aviation.", status: "Not Started" }  
];

// Component for each module button
const ModuleItem = ({ module }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/airmodules/${module.id}`);
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
