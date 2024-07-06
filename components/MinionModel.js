// pages/viewer.js
import dynamic from 'next/dynamic';

const FBXViewer = dynamic(() => import('../components/FBXViewer'), { ssr: false });

const ViewerPage = () => {
  return <FBXViewer fbxPath="/models/Waving.fbx" />;
};

export default ViewerPage;
