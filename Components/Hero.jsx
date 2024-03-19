import React from "react";

const Hero = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <video src="/flower.mp4"  autoPlay muted loop className="h=[100vh] w-[100vh] object-cover"></video>
      </div>
      <div className="image-container">
        <img src="/window.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
