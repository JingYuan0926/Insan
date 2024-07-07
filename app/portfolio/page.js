import Link from "next/link";
import "./portfolio.css"

export default function Portfolio(){
    return(
        <>
            <h1>
            Featured Portfolio
            </h1>
            <h2>
            GAIT & MOVEMENT
            </h2>
            <div className="main-container">
                <div className="left-sec">
                    <ul>
                        <li>PERKESO Tun Abdul Razak Rehabilitation Centre (TRRC)</li>
                        <li>Faculty of Medical, Royal College of Medicine Perak, Universiti Kuala Lumpur (RCMP UniKL)</li>
                        <li>College of Engineering, Universiti Teknologi MARA (UiTM)</li>
                    </ul>
                    <Link className="button" href="/portfolio/gait_movement">Read More</Link>
                </div>
                <div>
                    <img src="/pic1.png"/>
                </div>
            </div>

            <h2>
            SPORTS PERFORMANCE
            </h2>
            <div className="main-container">
                <div className="left-sec">
                    <ul>
                        <li>Faculty of Sports and Coaching, Universiti Pendidikan Sultan Idris (UPSI)</li>
                        <li>School of Biomedical Engineering and Health Science, Universiti Teknologi Malaysia (UTM) JB</li>
                    </ul>
                    <Link className="button" href="/portfolio/sports_performance">Read More</Link>
                </div>
                <div>
                    <img src="/pic2.png"/>
                </div>
            </div>

            <h2>
            ANIMATION & GAMES
            </h2>
            <div className="main-container">
                <div className="left-sec">
                    <ul>
                        <li>Computing Faculty, Universiti Malaysia Pahang (UMP)</li>
                        <li>Workshop Perbadanan Kemajuan Filem Nasional Malaysia (FINAS) Bertempat di ASWARA</li>
                    </ul>
                    <Link className="button" href="/portfolio/animation_games">Read More</Link>
                </div>
                <div>
                    <img src="/pic3.png"/>
                </div>
            </div>

            <h2>
            ENGINEERING
            </h2>
            <div className="main-container">
                <div className="left-sec">
                    <ul>
                        <li>UTM-MJIIT</li>
                    </ul>
                    <Link className="button" href="/portfolio/engineering">Read More</Link>
                </div>
                <div>
                    <img src="/pic4.jpg"/>
                </div>
            </div>
        </>
    );
}