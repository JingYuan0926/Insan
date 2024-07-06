"use client";
import React from 'react';
import FaceDetection from '../components/FaceDetection';

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <FaceDetection />
    </div>
  );
};

export default Home;


