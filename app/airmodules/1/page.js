"use client";

import React from "react";
import { useRouter } from "next/navigation";
import MyLink from "../../components/MyLink"; // Custom Link component

// Sample data for lessons (including their ids)
const lessonData = [
  { 
    id: 1, 
    title: "Who Were the Wright Brothers?", 
    description: "Learn about the Wright Brothers’ journey in aviation, including their background, early experiments, and perseverance in the face of challenges.", 
    status: "Not Started" 
  },
  { 
    id: 2, 
    title: "All Wright Brothers’ Aircraft Attempts", 
    description: "Explore the different aircraft designs the Wright Brothers attempted, from the gliders to the powered Flyer, and how each design contributed to their success.", 
    status: "Not Started" 
  },
  { 
    id: 3, 
    title: "Impact of the Wright Brothers on Aviation", 
    description: "Analyze how the Wright Brothers’ invention of the airplane revolutionized transportation, military strategy, and the global economy.", 
    status: "Not Started" 
  },
  { 
    id: 4, 
    title: "How the Wright Flyer Worked", 
    description: "Dive into the mechanics and engineering behind the Wright Flyer, including its wing design, propulsion system, and control mechanisms.", 
    status: "Not Started" 
  },
  { 
    id: 5, 
    title: "The First Successful Flight", 
    description: "Learn about the historic first flight on December 17, 1903, in Kitty Hawk, North Carolina, and the steps leading up to this pivotal moment.", 
    status: "Not Started" 
  },
  { 
    id: 6, 
    title: "Challenges Faced by the Wright Brothers", 
    description: "Examine the obstacles the Wright Brothers overcame, including skepticism from society, mechanical failures, and financial difficulties.", 
    status: "Not Started" 
  },
  { 
    id: 7, 
    title: "Patents and Legal Battles", 
    description: "Understand how the Wright Brothers protected their invention through patents and the legal battles they faced over intellectual property.", 
    status: "Not Started" 
  },
  { 
    id: 8, 
    title: "The Wright Brothers and Competition", 
    description: "Explore how the Wright Brothers competed with other inventors and innovators in the early aviation industry.", 
    status: "Not Started" 
  },
  { 
    id: 9, 
    title: "Legacy of the Wright Brothers", 
    description: "Discuss the lasting legacy of the Wright Brothers, including the impact of their innovation on modern aviation and their recognition as pioneers in history.", 
    status: "Not Started" 
  },
  { 
    id: 10, 
    title: "Influence on Modern Aircraft Design", 
    description: "Analyze how the principles introduced by the Wright Brothers, such as lift, propulsion, and control, are applied in today’s advanced aircraft designs.", 
    status: "Not Started" 
  }
];


// Component for each lesson button
const LessonItem = ({ lesson, moduleId }) => {
  const router = useRouter();

  const handleNavigation = () => {
    // Using both moduleId and lesson.id to navigate
    router.push(`/airmodules/1/lessons/${"lesson"+ lesson.id}`);
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
