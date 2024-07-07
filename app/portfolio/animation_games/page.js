import Link from "next/link";
import "./ag.css"

export default function Portfolio(){
    return(
        <>
            <h1>
            Animation & Games Portfolio
            </h1>
            <p className="text-center mx-24">
            As game animation is often a complicated combination of different types of movement, animators make libraries of the movements, so they can reuse them for each character. They work in a way that makes best use of the game engine’s technology and maximises the opportunities for game play and interactivity.
            </p>
            <h2>
            UMP
            </h2>
            <div className="main-container">
                <div className="left-sec">
                    <p>SFSB organized two motion capture workshops in 2018 and 2019, a special collaboration between Perbadanan Kemajuan Filem Nasional Malaysia (FINAS), Persatuan Animasi Malaysia (ANIMAS) and Summit Features Sdn Bhd (SFSB).  <br/> 
                    The workshop in 2018 took place at Royal Chulan Hotel Damansara, while the workshop in 2019 took place at Akademi Seni Budaya Dan Warisan Kebangsaan (ASWARA) with 30 participants join from around Malaysia for each workshop.<br/>   
                    The first workshop was conducted by a team of experts from Vicon UK while the second workshop was conducted by Mr. Sina Azad, Technical Director at Plastic Wax.  <br/>
                    These two workshops were held for three days each. Participants learnt on how to familiarize themselves with the Shogun software and capturing mocap data. Then the data is being used to create a short animated story from the mocap data.
                    </p>
                </div>
                <div>
                    <img src="/pic10.png"/>
                </div>
            </div>

            <h2>
            ASWARA WORKSHOP
            </h2>
            <div className="main-container">
                <div className="left-sec">
                    <p>Royal College of Medicine Perak (RCMP) became part of University Kuala Lumpur in 2006 as its medical wing with the objective of providing affordable medical education, as well as facilities for continuing professional development for medical practitioners. In 2021 RCMP had bought Vicon motion capture system with eight Vero optical camera and one Vue reference camera with Nexus 2 software.<br/>    
                    The system was supplied and installed by SFSB and located at the Gait Motion Lab and currently in use to teach students on the kinematic data obtain using the system for applications such as gait analysis, sports performance and rehabilitation.
                    </p>
                </div>
                <div>
                    <img src="/pic11.png"/>
                </div>
            </div>
        </>
    );
}