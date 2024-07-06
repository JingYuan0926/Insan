import Link from "next/link";
import "./sp.css"

export default function Portfolio(){
    return(
        <>
            <h1>
            Sports Performance Analysis Portfolio
            </h1>
            <p className="text-center mx-24">
            Sports Performance Analysis is a specialised discipline that provides athletes and coaches with objective information that helps them understand performance. This process is underpinned by systematic observation, which provides valid, reliable and detailed information relating to performance.
            </p>
            <h2>
            SPORTS FACULTY, UPSI
            </h2>
            <div className="main-container">
                <div className="left-sec">
                    <p>Universiti Pendidikan Sultan Idris (UPSI) is well-knowned as the number one education unversity in Malaysia. Currently UPSI is providing a vast number of undergraduate and postgraduate courses in education to produce future teachers, lecturers and researchers.<br/> 
                    Through their Faculty of Sports Science and Coaching, UPSI involved in sports performance research and studies. A Biomechanics Lab was established at the faculty, consisting of six Vicon T-series optical cameras with one Vicon Bonita reference video camera. This Vicon motion capture system is integrated with two AMTI Optima force plates to give data on ground reaction forces.  <br/>   
                    SFSB always give support and training to students and lecturers at UPSI whether they are new or in need of refreshment of motion capture technology. For this support and collaboration, SFSB has been given appreciation plaque from UPSI for the good years of relationships through this Biomechanics Lab. 
                    </p>
                </div>
                <div>
                    <img src="/pic8.png"/>
                </div>
            </div>

            <h2>
            UTM JB
            </h2>
            <div className="main-container">
                <div className="left-sec">
                    <p>The Universiti Teknologi Malaysia (UTM) Johor Bahru have a Motion Analysis Lab which is placed under Sports Innovation and Technology Centre (SITC). This Motion Analysis Lab consists of eight Vicon T-series optical cameras and one Vicon Bonita reference video camera, using software Vicon Nexus 1.8.5. The Vicon system integrated with two AMTI Optima force plates and sixteen Delsys EMG sensors.  <br/>    
                    SITC had their team consists of sports scientists, biomedical engineers and biomechanists work collaboratively to conduct research in various area including motion analysis, sports performance, assistive technology and rehabilitation engineering. This laboratory is now under supervision of Dr. Aizreena Azaman.<br/>
                    Summit Features Sdn. Bhd. is continuously supporting UTM and this lab, providing training and maintenance of the systems.    
                    </p>
                </div>
                <div>
                    <img src="/pic9.png"/>
                </div>
            </div>

            
        </>
    );
}