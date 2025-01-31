// pages/season2.js

'use client'
import React, { useState } from 'react';

const Season2Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const episodes = [
    { title: 'New Horizons', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
    { title: 'Rising Tensions', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    { title: 'The Last Stand', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
  ];

  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  return (
    <div>
      <h1>Season 2</h1>
      <div>
        {episodes.map((episode, index) => (
          <button key={index} onClick={() => openModal(episode.videoUrl)}>
            {episode.title}
          </button>
        ))}
      </div>

      {isModalOpen && (
        <div>
          {currentVideo.includes("youtube.com") ? (
            <iframe src={currentVideo} title="Episode Video" />
          ) : (
            <video src={currentVideo} controls autoPlay />
          )}
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Season2Page;
