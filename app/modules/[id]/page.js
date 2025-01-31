"use client";
import React from "react";

const ModuleDetails = ({ params }) => {
  const { id } = params; // Extract the dynamic route parameter

  // Find module by ID
  const module = modulesData.find((mod) => mod.id.toString() === id);

  if (!module) {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Module Not Found</h1>
        <p>No details available for module ID: {id}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Module Details</h1>
      <p><strong>Module ID:</strong> {module.id}</p>
      <p><strong>Module Name:</strong> {module.title}</p>
      <p>
        This is unit {module.id}. In this unit, you will learn about {module.title}.
        You can customize this page to display module-specific details.
      </p>
    </div>
  );
};

export default ModuleDetails;
