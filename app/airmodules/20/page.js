"use client";

import React from "react";
import { useRouter } from "next/navigation";
import MyLink from "../../components/MyLink"; // Custom Link component

// Sample data for lessons (including their ids)
const lessonData = [
  { id: 1, title: "Describe the Wright Brothers’ journey in aviation.", description: "Learn the basics of programming using Python.", status: "Not Started" },
  { id: 2, title: "Name all of the Wright Brothers’ aircraft attempts.", description: "Learn HTML, CSS, and JavaScript to build websites.", status: "Not Started" },
  { id: 3, title: "Explain how the Wright Brothers’ impacted the aviation industry.", description: "Dive into common data structures and algorithms.", status: "Not Started" },
];

// Component for each lesson button
const LessonItem = ({ lesson, moduleId }) => {
  const router = useRouter();

  const handleNavigation = () => {
    // Using both moduleId and lesson.id to navigate
    router.push(`/airmodules/20/lessons/${"lesson"+ lesson.id}`);
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
      <h1 style={{ marginBottom: "20px" }}>Assignments</h1>

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
