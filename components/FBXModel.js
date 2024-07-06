import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useFBX } from '@react-three/drei';

const FBXModel = ({ url, pose }) => {
  const group = useRef();
  const fbx = useFBX(url);

  useEffect(() => {
    const logBoneNames = (object) => {
      if (object.isBone) {
      }
      if (object.children) {
        object.children.forEach(logBoneNames);
      }
    };

    logBoneNames(fbx);

    if (pose) {
      console.log('Pose data:', pose);

      // Map pose keypoints to model bones
      const keypoints = pose.keypoints;
      if (fbx.children.length > 0) {
        const bodyBones = {
          'mixamorigSpine': keypoints[0],  // Center hip (groin)
          'mixamorigHead': keypoints[3]  // Chin
        };

        const armBones = {
          'mixamorigRightHand': keypoints[10], // Left wrist becomes Right hand
          'mixamorigLeftHand': keypoints[9]  // Right wrist becomes Left hand
        };

        // const legBones = {
        //   'mixamorigRightUpLeg': keypoints[12], // Left knee becomes Right knee
        //   'mixamorigLeftUpLeg': keypoints[11]  // Right knee becomes Left knee
        // };

        const transformBones = (bones, offset) => {
          Object.keys(bones).forEach(boneName => {
            const bone = fbx.getObjectByName(boneName);
            if (bone) {
              const { x, y } = bones[boneName];
              console.log(`Transforming bone ${boneName} to position (${x}, ${y})`);
              // Apply relative transformations
              bone.position.x += (x / 100 - 4 - bone.position.x) * offset; // Mirrored left-right
              bone.position.y += (-y / 100 + 5.5 - bone.position.y) * offset;   // Inverted up-down
            } else {
              console.warn(`Bone ${boneName} not found`);
            }
          });
        };

        
  

        // Apply transformations separately
        transformBones(bodyBones, 0.5); // Smaller offset for body

        //transformBones(legBones, 0.5);  // Smaller offset for legs
      } else {
        console.warn('No children found in FBX model');
      }
    }
  }, [pose, fbx]);

  return <primitive ref={group} object={fbx} scale={0.3} position={[0, -2, 0]} />; // Adjust the position here
};

const Scene = ({ modelUrl, pose }) => {
  return (
    <Canvas
      camera={{
        position: [0, 5, 10], // Adjust the camera position
        fov: 50, // Adjust the field of view if necessary
        near: 0.1,
        far: 1000,
      }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls />
      <FBXModel url={modelUrl} pose={pose} />
    </Canvas>
  );
};

export default Scene;
