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
        <h1>Welcome to the Minion Scene</h1>
        <p>This is where the minion model is displayed and you can interact with the camera.</p>
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