"use client"

import Link from "next/link";
import "./mainpage.css";
import Home from '../components/_minion/Home';
import Toss from "../components/Toss";
import ChatBox from "../components/ChatBox";

export default function Mainpage() {
    const modelUrl = '/models/Minion.fbx'; // Ensure this path is correct and model is in public/models
    return (
        <>
        <ChatBox/>
        <div className="heightcont">
        <div className="scroll-container">
            <div className="section1">
                <div className="left1">
                    <h1>
                    Leading Malaysia
                    Motion Technology
                    </h1>
                    <p>
                    Bringing Motion to Life:<br/> 
                    Transforming Ideas into Reality with 
                    Cutting-Edge Motion Capture Technology
                    </p>
                    <Link href="/contact">
                        <p className="button">CONTACT US</p>
                    </Link>
                </div>
                <div className="right1">
                    <img src="/sprinter.png" alt="sprinter"/>
                </div>
            </div>
        </div>            
        

        
            <div className="scroll-container">
                <Home modelUrl={modelUrl} />
            </div>
            <div className="scroll-container">
                <Toss />
            </div>
            <div className="scroll-container">
                <video controls autoplay muted className="h-screen w-screen">
                <source src="/facedetection.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
            <div className="scroll-container">
                <video controls autoplay muted className="h-screen w-screen">
                <source src="/plane.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div>
        


        <div className="scroll-container h-screen">
        <h1>OUR SOLUTION</h1>
        <div className="section2">
            <div className="sec2container">
                <img src="/sec2_pic1.jpg"/> 
                <div>
                    <h2>
                    ENTERTAINMENT
                    </h2>
                    <p>
                    Vicon Virtual Production. Film 
                    and Television. Games Brought
                    to Life. Motion capture tools 
                    for VFX, gaming production 
                    studios and universities
                    </p>
                </div> 
            </div>
            <div className="sec2container">
                <img src="/sec2_pic2.jpg"/>
                <div>
                    <h2>
                    LIFE SCIENCES
                    </h2>
                    <p>
                    Sport performance & biomechanics. 
                    Gait Analysis, Neuroscience & Motor 
                    Control. Animal Science. Movement 
                    analysis tools for biomechanics 
                    research, labs and hospital.
                    </p>
                </div>    
            </div>
            <div className="sec2container">
                <img src="/sec2_pic3.png"/>
                <div>
                    <h2>
                    ENGINEERING
                    </h2>
                    <p>
                    Robotics & UAVS. Aerospace & 
                    Automotive Innovation. Location 
                    tracking for advance engineering 
                    application.
                    </p>
                </div>  
            </div>
            <div className="sec2container">
                <img src="/sec2_pic4.jpg"/>
                <div>
                    <h2>
                    VIRTUAL PRODUCTION
                    </h2>
                    <p>
                    VR Scouting. Full Body Capture. 
                    LED / Green Screen. In Camera VFX.
                    Ergonomic studies for augmented 
                    reality labs.
                    </p>
                </div>  
            </div>
        </div>
        </div>
        </div>
        
        
        </>
    );
}

