'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import BodyTracking from './BodyTracking';
import styles from '../../styles/Home.module.css'; // Ensure the path to your CSS file is correct

const Scene = dynamic(() => import('./FBXModel'), { ssr: false });

const Home = ({ modelUrl, initialPose = null }) => {
  const [pose, setPose] = useState(initialPose);
  const [showCamera, setShowCamera] = useState(false);

  const toggleCamera = () => {
    setShowCamera(!showCamera);
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.description}>
        <h1 style={{ fontSize: '3em', fontWeight: 'bold' }}>Movie</h1>
        <p><em>This is how Motion Capture Technology is used in making movies.</em></p>
        <p><em>Open the Camera and briefly move your body and observe the model on the computer. The model takes a few seconds to load.</em></p>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles['canvas-wrapper']}>
            <Scene modelUrl={modelUrl} pose={pose} />
          </div>
        </div>
        <div className={styles.right} onClick={toggleCamera}>
          {!showCamera && (
            <div className={styles['camera-button']}>
              Open Camera
            </div>
          )}
          {showCamera && <BodyTracking onPoseUpdate={setPose} />}
        </div>
      </div>
    </div>
  );
};

export default Home;