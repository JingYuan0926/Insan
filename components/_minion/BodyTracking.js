import React, { useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';

const BodyTracking = ({ onPoseUpdate }) => {
  const videoRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    const loadModel = async () => {
      await tf.ready();
      tf.setBackend('webgl');
      modelRef.current = await poseDetection.createDetector(
        poseDetection.SupportedModels.MoveNet,
        { modelType: poseDetection.movenet.modelType.SINGLEPOSE_THUNDER }
      );
      console.log('MoveNet model loaded.');
    };

    loadModel();
    setupCamera();
  }, []);

  useEffect(() => {
    const detectPose = async () => {
      if (
        modelRef.current &&
        videoRef.current &&
        videoRef.current.readyState === 4
      ) {
        const poses = await modelRef.current.estimatePoses(videoRef.current);
        if (poses.length > 0) {
          onPoseUpdate(poses[0]);
        } else {
          console.log('No poses detected');
        }
      }
      requestAnimationFrame(detectPose);
    };

    detectPose();
  }, [onPoseUpdate]);

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

export default BodyTracking;
