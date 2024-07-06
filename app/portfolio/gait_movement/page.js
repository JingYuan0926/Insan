import Link from "next/link";
import "./gm.css"

export default function Portfolio(){
    return(
        <>
            <h1>
            Gait and Movement Analysis Portfolio
            </h1>
            <p className="text-center mx-24">
            The Gait and Motion Analysis Laboratory uses state-of-the-art computer technology to capture a 3-D image of a Rehab Patient, Athletes or even animal movement pattern. The system consists of Motion system with integrating equipment such as EMG Sensor, and Force plate. Electrodes and Reflective markers that are placed on the subject used to measure muscle activity and track motion of body segments. This measured data can be used to analyses subject data to helps in Rehabilitation, Sports performance study and Biomechanics study. Here we share a few Motion Lab in Malaysia.
            </p>
            <h2>
            PERKESO MELAKA
            </h2>
            <div className="main-container">
                <div className="left-sec">
                    <p>The Tun Abdul Razak PERKESO Rehabilitation Center, fully owned by the Social Security Organization (SOCSO) under the Ministry of Human Resources is an international standard rehabilitation center that integrates Medical and Vocational Rehabilitation treatment.<br/> 
                    This Rehabilitation Center was built with a pure motive; which is to help SOCSO Insureds and workers to recover physically and vocationally until they finally return to the world of work and society with maximum ability.<br/>   
                    Located in Bandar Hijau, Hang Tuah Jaya, Melaka on an area of 55 acres, Tun Abdul Razak PERKESO Rehabilitation Center has started operations on 1 October 2014.<br/>    
                    PERKESO had purchased and installed gait analysis system with 8 Vicon T-10 Series optical cameras with 1 Vicon Bonita reference video camera, together with 2 AMTI AccuGait force plates. This gait analysis lab is used to capture patient data for both kinematic and kinetic.<br/>   
                    This data is then used to help observe and monitor patient rehabilitation level. SFSB is the company that helps PERKESO in managing the system maintenance and help train physiotherapists to learn on how understand and use the gait analysis system. 
                    </p>
                </div>
                <div>
                    <img src="/pic5.png"/>
                </div>
            </div>

            <h2>
            RCMP UniKL
            </h2>
            <div className="main-container">
                <div className="left-sec">
                    <p>Royal College of Medicine Perak (RCMP) became part of University Kuala Lumpur in 2006 as its medical wing with the objective of providing affordable medical education, as well as facilities for continuing professional development for medical practitioners. In 2021 RCMP had bought Vicon motion capture system with eight Vero optical camera and one Vue reference camera with Nexus 2 software.<br/>    
                    The system was supplied and installed by SFSB and located at the Gait Motion Lab and currently in use to teach students on the kinematic data obtain using the system for applications such as gait analysis, sports performance and rehabilitation.
                    </p>
                </div>
                <div>
                    <img src="/pic6.png"/>
                </div>
            </div>

            <h2>
            ENGINEERING COLLEGE, UiTM
            </h2>
            <div className="main-container">
                <div className="left-sec">
                    <p>Universiti Teknologi MARA (UiTM) is the largest comprehensive university in Malaysia, providing innovative education with state-of-the-art infrastructure and technology within reach at its 34 campuses (1 main campus, 12 state campuses and 21 satellite campuses), 17 faculties, 7 academic centers and 2 college of studies across the country.<br/>    
                    UiTM have installed a motion analysis system at their School of Electrical Engineering, College of Engineering. Their Motion Analysis Lab have 8 Vicon T-Series optical cameras and two Basler reference video cameras with 16 Delsys EMG sensors and 2 AMTI Optima force plates. <br/>
                    The Motion Analysis Lab is being used to capture data on kinematics and kinetic data for lecturer and student research and studies.
                    </p>
                </div>
                <div>
                    <img src="/pic7.png"/>
                </div>
            </div>
        </>
    );
}