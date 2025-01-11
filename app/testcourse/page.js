'use client'
import React from 'react';
import '../globals.css'; // Assuming you have an external CSS file for styles

const ModulesPage = () => {
  // Full Aviation History Curriculum Data
  const modules = [
    {
      id: 1,
      title: 'The 1910s – The Dawn of Aviation and Boeing’s Founding',
      description: 'Explore the early days of aviation, from the Wright Brothers to Boeing\'s founding.',
      lessons: [
        { id: 1.1, title: 'Lesson 1.1: The Early Days of Aviation', sublessons: [
          { id: 1, title: 'Sub-Lesson 1.1.1: The Wright Brothers and Early Aviation Achievements' },
          { id: 2, title: 'Sub-Lesson 1.1.2: Aircraft in World War I: Military Applications Driving Technological Progress' },
          { id: 3, title: 'Sub-Lesson 1.1.3: Founding of Boeing (1916) and the B&W Seaplane (Boeing Model 1)' }
        ]}
      ]
    },
    {
      id: 2,
      title: 'The 1920s – Civil Aviation and Growth of Airlines',
      description: 'This module covers the rise of commercial aviation and the foundation of major airlines.',
      lessons: [
        { id: 2.1, title: 'Lesson 2.1: Early Commercial Aviation', sublessons: [
            { id: 1, title: 'Sub-Lesson 2.1.1: Introduction of the Boeing Model 40 for Mail and Passengers' },
            { id: 2, title: 'Sub-Lesson 2.1.2: The Rise of Airlines: KLM and Qantas' },
            { id: 3, title: 'Sub-Lesson 2.1.3: Founding of Douglas Aircraft Company' }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'The 1930s – The Golden Age of Aviation',
      description: 'The evolution of airliners and military aircraft during the 1930s, including Boeing 247 and Douglas DC-3.',
      lessons: [
        { id: 3.1, title: 'Lesson 3.1: The Boeing 247 – The First Modern Airliner', sublessons: [
            { id: 1, title: 'Sub-Lesson 3.1.1: Design and development of the Boeing 247 (1933).' },
            { id: 2, title: 'Sub-Lesson 3.1.2: Competition with the Douglas DC-3 (1935).' }
          ]
        },
        { id: 3.2, title: 'Lesson 3.2: The Growth of McDonnell and Douglas', sublessons: [
            { id: 1, title: 'Sub-Lesson 3.2.1: Douglas Aircraft’s innovations: the DC-2 and DC-3.' },
            { id: 2, title: 'Sub-Lesson 3.2.2: McDonnell Aircraft’s military focus in the 1930s.' }
          ]
        }
      ]
    },
    // Additional modules and lessons continue...
  ];

  return (
    <div className="fishplace-modules-page">
      {/* Page Title */}
      <section className="fishplace-page-title-container">
        <h1>Aviation History Modules</h1>
        <p>Explore the evolution of aviation from its early beginnings to modern advancements.</p>
      </section>

      {/* Modules List */}
      <section className="fishplace-modules-container">
        {modules.map((module) => (
          <div key={module.id} className="fishplace-module-card">
            <div className="fishplace-module-header">
              <h2>{module.title}</h2>
              <button className="fishplace-view-button">View</button>
            </div>
            <p className="fishplace-module-description">{module.description}</p>

            {/* Lessons List */}
            <div className="fishplace-lesson-box-container">
              {module.lessons.map((lesson) => (
                <div key={lesson.id} className="fishplace-lesson-card">
                  <h3>{lesson.title}</h3>

                  {/* Sublessons for each lesson */}
                  {lesson.sublessons && lesson.sublessons.length > 0 && (
                    <div className="fishplace-sublesson-container">
                      {lesson.sublessons.map((sublesson) => (
                        <div key={sublesson.id} className="fishplace-sublesson-card">
                          <h4>{sublesson.title}</h4>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ModulesPage;
