import Link from "next/link";
import "./e.css"

export default function Portfolio(){
    return(
        <>
            <h1>
            Engineering Portfolio
            </h1>
            <p className="text-center mx-24">
            In particular, virtual related engineering means that design and validation activities occur collaboratively in order to prove early product designs, support decision making and enable continuous product optimisation within interdisciplinary and cross-enterpise partnerships. This causes an important redefinition of the overall product development process for supporting the coordination, assessment and concretion of engineering results of all involved partners with the support of virtual builds.
            </p>
            <h2>
            UTM-MJIIT
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
        </>
    );
}