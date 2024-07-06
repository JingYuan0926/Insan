// pages/camera.js
import React, { useEffect, useRef } from 'react';

const CameraPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    async function setupCamera() {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    }

    setupCamera();
  }, []);

  return (
    <div>
      <h1>Camera</h1>
      <video ref={videoRef} autoPlay playsInline width="600" height="400"></video>
    </div>
  );
};

export default CameraPage;
