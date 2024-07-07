import Link from "next/link";
import "./about.css"

export default function About() {
    
    return (
        <>
            <h1>
                ABOUT US
            </h1>
            <div className="main-container">
                <div className="single-container">
                    <h2>
                    VISION
                    </h2>
                    <img src="/vision.png"/>
                    <p>
                    To be a sustainable leader in scientific fields related to human movement and performance studies to contribute to nation’s growth and building towards year 2030
                    </p>
                </div>

                <div className="single-container">
                    <h2>
                    MISSION
                    </h2>
                    <img src="/mission.png"/>
                    <p>
                    Develop and empower local expertise together with local higher education institutions as catalyst to enhance Malaysia achievement globally in areas such as sports, medical, industry, education and etc.
                    </p>
                </div>

                <div className="single-container">
                    <h2>
                    STRATEGY
                    </h2>
                    <img src="/strategy.png"/>
                    <ul>
                        <li>
                        -Develop partnership with foreign expertise for transfer technologies and developing local expertise
                        </li>
                        <li>
                        -Collaborations with local higher education institutions in research studies, testing and training
                        </li>
                        <li>
                        -Setting up technology center and laboratory, comprise of state-of-the-art equipment’s and experts
                        </li>
                    </ul>
                </div>
            </div>


            <h1 className="mt-12">HISTORY</h1>
            <div className="main-container-2">
                <div className="bluediv rounded-xl">
                    <p>
                        <span className="underline text-xl">Who We Are?</span><br/>
                        Summit Features Sdn Bhd (SFSB) is a bumiputera company registered in the Malaysian Ministry of Finance. SFSB has been operating since 2005. SFSB has ventured into the field of biomechanics and human performance fields since 2007 and has become the main industry support to the institution in the implementation of Motion Analysis in Malaysia.
                    </p>
                </div>

                <div className="whitediv rounded-xl">
                    <p>
                    SFSB is Southeast Asian #1 motion capture integrator and life sciences equipment, provider. We are Malaysia’s only provider of VICON systems and nearby countries. Our offer is a unique fusion of the best motion capture technology, programme, and expertise. We provide and integrate fully customised motion capture systems for human movement research, object tracking, visual effects, gaming, virtual and augmented reality.
                    </p>
                </div>

                <div className="bluediv rounded-xl">
                    <p>
                    Many of our customers who previously struggled to use the motion capture equipment have been assisted by the motion capture specialists at us. SFSB has since produced detailed instructions in using the mocap system specifically.
                    </p>
                </div>
            </div>
        </>
        );
    }