import React from "react";
import './Hero.css'
const Hero = () => {
  return (
   <div className="wrapper">
     <section className="video-section">
      <div className="video-container">
        <video src="/Space.mp4"  autoPlay muted loop className="h-[100vh] w-[100vw] object-cover"></video>
      </div>
      <div className="image-container absolute top-0 h-[100vh] w-[100vw] ">
        <img src="/window.png" alt="" className="h-[100vh] w-[100vw] object-cover"/>
      </div>
      <div className=" absolute top-0 h-[100vh] w-[100vw] flex flex-col items-center justify-center text-content ">
               <div>
                <div className="overflow-y-hidden relative left-[35px] w-[700px] ">
                  <span className="w-[100vw] font-bold font-w text-5xl">between</span>
                </div>
               </div>
            </div>
    </section>

   </div>
  );
};

export default Hero;
