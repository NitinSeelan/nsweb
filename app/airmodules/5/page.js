"use client";

import React from "react";
import { useRouter } from "next/navigation";
import MyLink from "../../components/MyLink"; // Custom Link component

// Sample data for lessons (including their ids)
const lessonData = [
  { id: 1, title: "The Boeing 720", description: "Learn about the Boeing 720.", status: "Not Started" },
  { id: 2, title: "The Boeing 727", description: "Learn about the Boeing 727.", status: "Not Started" },
  { id: 3, title: "The Creation of the Boeing 737", description: "Learn about the start of the Boeing 737.", status: "Not Started" },
  { id: 4, title: "The 737 Classic Series", description: "Learn about the Boeing 737 Classic Series.", status: "Not Started" },
  { id: 5, title: "The Supersonic Concorde", description: "Learn about the Supersonic Concorde.", status: "Not Started" },
  { id: 6, title: "The Fall of the Concorde", description: "Learn about the fall of the Supersonic Concorde.", status: "Not Started" },
];

// Component for each lesson button
const LessonItem = ({ lesson, moduleId }) => {
  const router = useRouter();

  const handleNavigation = () => {
    // Using both moduleId and lesson.id to navigate
    router.push(`/airmodules/5/lessons/${"lesson"+ lesson.id}`);
  };

  return (
    <div
      className={`module-item ${lesson.status.toLowerCase().replace(" ", "-")}`}
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
        <h3 style={{ margin: "0 0 10px" }}>{lesson.title}</h3>
        <p style={{ margin: "0 0 5px" }}>{lesson.description}</p>
        <span
          style={{
            display: "inline-block",
            padding: "5px 10px",
            backgroundColor: lesson.status === "Completed" ? "#d4edda" : lesson.status === "In Progress" ? "#ffeeba" : "#f8d7da",
            color: lesson.status === "Completed" ? "#155724" : lesson.status === "In Progress" ? "#856404" : "#721c24",
            borderRadius: "5px",
            fontSize: "0.9em",
          }}
        >
          {lesson.status}
        </span>
      </button>
    </div>
  );
};

// Main page component
const LessonPage = ({ moduleId }) => {
  return (
    <div className="lesson-page" style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ marginBottom: "20px" }}>Module 5: The 1960's</h1>

      <div className="lesson-list" style={{ marginBottom: "30px" }}>
        {lessonData.map((lesson) => (
          <LessonItem key={lesson.id} lesson={lesson} moduleId={moduleId} />
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

export default LessonPage;
