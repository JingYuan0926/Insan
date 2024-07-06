import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';

const FaceDetection = () => {
  const videoRef = useRef(null);
  const [expression, setExpression] = useState('neutral');

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    };

    const detectFace = async () => {
      if (videoRef.current) {
        const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
        if (detections.length > 0) {
          const expressions = detections[0].expressions;
          const maxExpression = Object.keys(expressions).reduce((a, b) => expressions[a] > expressions[b] ? a : b);
          setExpression(maxExpression);
          console.log('Detected expressions:', expressions);
          console.log('Dominant expression:', maxExpression);
        }
      }
    };

    const startVideo = () => {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        })
        .catch(err => console.error('Error accessing webcam:', err));
    };

    loadModels();
    startVideo();

    const intervalId = setInterval(detectFace, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const expressionImages = {
    neutral: '/neutral.png',
    happy: '/happy.png',
    sad: '/sad.png',
    angry: '/angry.png',
    surprised: '/shocked.png',
    fearful: '/shocked.png', // You can adjust this if you have a specific image for fearful expression
    disgusted: '/neutral.png', // You can adjust this if you have a specific image for disgusted expression
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {expression && (
        <img src={expressionImages[expression]} alt={expression} style={{ width: '20%', marginRight: '20px' }} />
      )}
      <video ref={videoRef} style={{ width: '40%' }} />
    </div>
  );
};

export default FaceDetection;
