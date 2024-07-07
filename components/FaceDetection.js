import React, { useEffect, useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';

const FaceDetection = () => {
  const videoRef = useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [expression, setExpression] = useState('neutral');

  useEffect(() => {
    const loadModels = async () => {
      try {
        const MODEL_URL = '/facemodel'; // Adjust this to your actual model directory
        await tf.ready();
        tf.setBackend('webgl');
        console.log('TensorFlow.js backend set to:', tf.getBackend());

        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
        ]);

        console.log('Models loaded successfully');
        setModelsLoaded(true);
      } catch (error) {
        console.error('Error loading models:', error);
      }
    };

    const startVideo = () => {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        })
        .catch(err => console.error('Error accessing webcam:', err));
    };

    loadModels().then(startVideo);

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (modelsLoaded) {
      const intervalId = setInterval(detectFace, 3000);
      return () => clearInterval(intervalId);
    }
  }, [modelsLoaded]);

  const detectFace = async () => {
    try {
      if (videoRef.current && !videoRef.current.paused && !videoRef.current.ended) {
        const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
        if (detections.length > 0) {
          const expressions = detections[0].expressions;
          const maxExpression = Object.keys(expressions).reduce((a, b) => expressions[a] > expressions[b] ? a : b);
          setExpression(maxExpression);
          console.log('Detected expressions:', expressions);
          console.log('Dominant expression:', maxExpression);
        }
      }
    } catch (error) {
      console.error('Error during face detection:', error);
    }
  };

  const expressionImages = {
    neutral: '/neutral.png',
    happy: '/happy.png',
    sad: '/sad.png',
    angry: '/angry.png',
    surprised: '/shocked.png',
    fearful: '/shocked.png',
    disgusted: '/neutral.png'
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {expression && (
        <img src={expressionImages[expression]} alt={expression} style={{ width: '20%', marginRight: '20px' }} />
      )}
      <video ref={videoRef} style={{ width: '40%' }} autoPlay muted />
    </div>
  );
};

export default FaceDetection;
