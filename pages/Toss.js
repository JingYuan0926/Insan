import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Toss.module.css';
import BodyTracking from '../components/BodyTracking';

const Toss = () => {
  const [pose, setPose] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isTossVideoPlaying, setIsTossVideoPlaying] = useState(false);
  const waitVideoRef = useRef(null);
  const tossVideoRef = useRef(null);

  const toggleCamera = () => {
    setIsCameraOpen(!isCameraOpen);
  };

  useEffect(() => {
    if (pose) {
      const keypoints = pose.keypoints;
      const rightWrist = keypoints[10];
      const leftWrist = keypoints[9];
      const rightShoulder = keypoints[6];
      const leftShoulder = keypoints[5];

      const areBothHandsRaised =
        rightWrist.y < rightShoulder.y - 50 && leftWrist.y < leftShoulder.y - 50; // Simplified condition for both hands raised

      if (areBothHandsRaised && !isTossVideoPlaying) {
        setIsTossVideoPlaying(true);
        waitVideoRef.current.pause();
        waitVideoRef.current.style.opacity = 0;
        tossVideoRef.current.currentTime = 0;
        tossVideoRef.current.play().catch((error) => {
          console.error('Error playing video:', error);
        });
        tossVideoRef.current.style.opacity = 1;
      }
    }
  }, [pose, isTossVideoPlaying]);

  useEffect(() => {
    if (!isCameraOpen) {
      setIsTossVideoPlaying(false);
    }
  }, [isCameraOpen]);

  useEffect(() => {
    if (isTossVideoPlaying) {
      tossVideoRef.current.onended = () => {
        setIsTossVideoPlaying(false);
        tossVideoRef.current.style.opacity = 0;
        waitVideoRef.current.play().catch((error) => {
          console.error('Error playing video:', error);
        });
        waitVideoRef.current.style.opacity = 1;
      };
    }
  }, [isTossVideoPlaying]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles['canvas-wrapper']}>
          <video
            ref={waitVideoRef}
            src="/Wait.mp4"
            className={`${styles.video} ${styles.visible}`}
            muted
            playsInline
            loop
            autoPlay
          />
          <video
            ref={tossVideoRef}
            src="/BallToss.mp4"
            className={styles.video}
            muted
            playsInline
            style={{ opacity: 0 }}
          />
        </div>
      </div>
      <div className={styles.right} onClick={toggleCamera}>
        {isCameraOpen ? (
          <BodyTracking onPoseUpdate={setPose} />
        ) : (
          <div className={styles['camera-button']}>
            Open Camera
          </div>
        )}
      </div>
    </div>
  );
};

export default Toss;
