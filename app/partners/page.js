import Link from "next/link";
import "./partners.css"

export default function Partners(){
    return (
        <>
            <h1>
            PARTNERS
            </h1>   
            <h2>
            We are pleased to offer a wide range of innovative and state-of-the-art products and software solutions from VICON, AMTI, COMETA, and MOTEK.            </h2>
            <div className="main-container max-md:flex-wrap bg-sky-50 p-6 rounded-xl">
            <div>
            <img src="/VICON-logo.jpg" className="max-md:mx-3"/>
            </div>
            <div className="p-10 max-md:mx-3 text-right">
            <h3>
            VICON
            </h3>
            <p>
            Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.
            </p>
            </div>
            </div> 

            <div className="main-container max-md:flex-wrap-reverse ">            
            <div className="p-10 max-md:mx-3">
            <h3>
            AMTI
            </h3>
            <p>
            Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.    
            </p>
            </div>
            <div>
            <img src="/AMTI-logo.jpg" className="max-md:mx-3"/>
            </div>
            </div>

            <div className="main-container max-md:flex-wrap bg-sky-50 p-6 rounded-xl">
            <div>
            <img src="/COMETA-logo.jpg" className="max-md:mx-3"/>
            </div>
            <div className="p-10 max-md:mx-3 text-right">
            <h3>
            COMETA
            </h3>
            <p>
            Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.    
            </p>
            </div>
            </div>
            
            <div className="main-container max-md:flex-wrap-reverse">
            <div className="p-10 max-md:mx-3">
            <h3>
            MOTEK
            </h3>
            <p>
            Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.    
            </p>
            </div>            
            <div>
            <img src="MOTEK-logo.png" className="max-md:mx-3"/>
            </div>
            </div>    
        </>
        );
}