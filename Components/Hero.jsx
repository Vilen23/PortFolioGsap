import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="wrapper ">
      <section className="video-section ">
        <div className="video-container ">
          <video
            src="/Space.mp4"
            autoPlay
            muted
            loop
            className="h-[100vh] w-[100vw] object-cover relative z-[-2]"
          ></video>
        </div>
        <div className="image-container absolute top-0 h-[100vh] w-[100vw] z-10">
          <img
            src="/window.png"
            alt=""
            className="h-[100%] w-[100%] object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
