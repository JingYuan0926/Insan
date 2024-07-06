'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';
import BodyTracking from '../components/BodyTracking';

const Scene = dynamic(() => import('../components/FBXModel'), { ssr: false });

const Home = () => {
  const [pose, setPose] = useState(null);
  const modelUrl = '/models/Minion.fbx'; // Ensure this path is correct and model is in public/models

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles['canvas-wrapper']}>
          <Scene modelUrl={modelUrl} pose={pose} />
        </div>
      </div>
      <div className={styles.right}>
        <BodyTracking onPoseUpdate={setPose} />
      </div>
    </div>
  );
};

export default Home;
