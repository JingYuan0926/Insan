import React, { useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import '@tensorflow/tfjs-backend-webgl';

const HandTracking = ({ onWaving }) => {
  const videoRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    const loadModel = async () => {
      modelRef.current = await handpose.load();
      console.log('Handpose model loaded.');
    };

    loadModel();
    setupCamera();
  }, []);

  useEffect(() => {
    const detectHand = async () => {
      if (
        modelRef.current &&
        videoRef.current &&
        videoRef.current.readyState === 4
      ) {
        const predictions = await modelRef.current.estimateHands(
          videoRef.current
        );

        if (predictions.length > 0) {
          const hand = predictions[0];
          const landmarks = hand.landmarks;

          // Check if the hand is waving (simple example using thumb tip position)
          const thumbTip = landmarks[4];
          if (thumbTip[1] < landmarks[0][1]) { // If thumb tip is above the wrist
            onWaving(true);
          } else {
            onWaving(false);
          }
        }
      }
      requestAnimationFrame(detectHand);
    };

    detectHand();
  }, [onWaving]);

  const setupCamera = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    }
  };

  return <video ref={videoRef} className="video-feed" />;
};

export default HandTracking;
