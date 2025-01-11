import React from 'react';

const ModulesPage = () => {
  // Full Aviation History Curriculum Data
  const modules = [
    {
      id: 1,
      title: 'The 1910s – The Dawn of Aviation and Boeing’s Founding',
      description: 'Explore the early days of aviation, from the Wright Brothers to Boeing\'s founding.',
      lessons: [
        { id: 1.1, title: 'Lesson 1.1: The Early Days of Aviation' },
      ],
      sublessons: [
        { id: 1, title: 'The Wright Brothers and Early Aviation Achievements' },
        { id: 2, title: 'Aircraft in World War I: Military Applications Driving Technological Progress' },
        { id: 3, title: 'Founding of Boeing (1916) and the B&W Seaplane (Boeing Model 1)' },
      ],
    },
    {
      id: 2,
      title: 'The 1920s – Civil Aviation and Growth of Airlines',
      description: 'This module covers the rise of commercial aviation and the foundation of major airlines.',
      lessons: [
      {id: 2.1, title: 'Lesson 2.1: Early Commercial Aviation'}],
      sublessons: [
        { id: 1, title: '2.Introduction of the Boeing Model 40 for Mail and Passengers' },
        { id: 2, title: 'The Rise of Airlines: KLM and Qantas' },
        { id: 3, title: 'Founding of Douglas Aircraft Company' },
      ],
    },
    {
      id: 3,
      title: 'The 1930s – The Golden Age of Aviation',
      description: 'The evolution of airliners and military aircraft during the 1930s, including Boeing 247 and Douglas DC-3.',
      lessons: [
        { id: 1, title: 'The Boeing 247 – The First Modern Airliner' },
        { id: 2, title: 'Competition with the Douglas DC-3' },
        { id: 3, title: 'The Growth of McDonnell and Douglas: DC-2 and DC-3 Innovations' },
      ],
    },
    {
      id: 4,
      title: 'The 1940s – Aviation and World War II',
      description: 'How World War II shaped aviation technology and post-war developments.',
      lessons: [
        { id: 1, title: 'The Boeing B-17 Flying Fortress and Post-War Impact' },
        { id: 2, title: 'Douglas Aircraft’s Contribution to the War: DC-4 and C-54 Skymaster' },
      ],
    },
    {
      id: 5,
      title: 'The 1950s – The Jet Age Begins',
      description: 'The dawn of the jet era with aircraft like the Boeing 707 and 720.',
      lessons: [
        { id: 1, title: 'The Dash 80 and the Launch of the Boeing 707' },
        { id: 2, title: 'The Boeing 720: Shorter-Range Jetliner for Medium-Haul Markets' },
      ],
    },
    {
      id: 6,
      title: 'The 1960s – Supersonic Dreams and Early Narrow-Bodies',
      description: 'The rise of narrow-body jets like the Boeing 727 and the Boeing 737, and the founding of Airbus.',
      lessons: [
        { id: 1, title: 'The Boeing 727 – The First Tri-Jet' },
        { id: 2, title: 'The Boeing 737 – The Best-Selling Narrow-Body' },
        { id: 3, title: 'Formation of Airbus and Planning for the A300' },
      ],
    },
    {
      id: 7,
      title: 'The 1970s – Wide-Bodies, Twin Engines, and Global Expansion',
      description: 'A period of wide-body aircraft development with models like the Boeing 747 and Airbus A300.',
      lessons: [
        { id: 1, title: 'The Boeing 747 – The Queen of the Skies' },
        { id: 2, title: 'Airbus A300 – Europe’s First Wide-Body Airliner' },
        { id: 3, title: 'The McDonnell Douglas DC-10' },
      ],
    },
    {
      id: 8,
      title: 'The 1980s – Advancing Narrow- and Wide-Bodies',
      description: 'Advancements in narrow-body and wide-body jets with models like the Boeing 737 Classic and 757.',
      lessons: [
        { id: 1, title: 'The Boeing 737 Classic Series' },
        { id: 2, title: 'The Boeing 757 and 767 – Twin-Engine Revolution' },
        { id: 3, title: 'The Airbus A310' },
      ],
    },
    {
      id: 9,
      title: 'The 1990s – Globalization and Digital Design',
      description: 'The emergence of the Boeing 777 with digital design and Airbus expanding its fleet.',
      lessons: [
        { id: 1, title: 'The Boeing 737 Next Generation (NG)' },
        { id: 2, title: 'The Boeing 777 – Fully Digital Design' },
        { id: 3, title: 'Airbus Expands its Fleet: A319, A320, A321, A330, A340' },
      ],
    },
    {
      id: 10,
      title: 'The 2000s to Present – Modern Aviation',
      description: 'Exploring modern aviation technologies and the ongoing rivalry between Boeing and Airbus.',
      lessons: [
        { id: 1, title: 'The Boeing 787 Dreamliner' },
        { id: 2, title: 'Airbus A350 and A380' },
        { id: 3, title: 'Boeing 737 MAX and Airbus A320neo Families' },
        { id: 4, title: 'The Airbus A220 – A New Era for Regional Jets' },
        { id: 5, title: 'Cargo Aircraft and Industry Evolution' },
      ],
    },
  ];

  return (
    <div className="modules-page">
      {/* Header */}

      {/* Page Title */}
      <section className="page-title">
        <h1>Aviation History Modules</h1>
        <p>Explore the evolution of aviation from its early beginnings to modern advancements.</p>
      </section>

      {/* Modules List */}
      <section className="module-list">
        {modules.map((module) => (
          <div key={module.id} className="module">
            <div className="module-header">
              <span>{module.title}</span>
              <button className="btnpro">View</button>
            </div>
            <div className="module-content">
              <p>{module.description}</p>
              <ul>
                {module.lessons.map((lesson) => (
                  <li key={lesson.id}>
                    <a href="#">{lesson.title}</a>
                  </li>
                ))}
                {module.sublessons && (
                  <ul>
                    {module.sublessons.map((sublesson) => (
                      <li key={sublesson.id}>
                        <a href="#">{sublesson.title}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ModulesPage;
