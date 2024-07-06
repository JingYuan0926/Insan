import React from 'react';
import Home from '../components/Home';

const IndexPage = () => {
  const modelUrl = '/models/Minion.fbx'; // Ensure this path is correct and model is in public/models

  return <Home modelUrl={modelUrl} />;
};

export default IndexPage;
