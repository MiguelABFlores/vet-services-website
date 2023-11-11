import React from "react";
import "../styles/Home.css";
import video from "../assets/videos/video";

function Home() {
  function handleEnded() {
    video.currentTime = 0;
    video.play();
  }
  return (
    <section className="home">
      <div className="home-content">
        <h1>Servicios Veterinarios Eläin</h1>
        <p>
          Servicios veterinarios a domicilio: Cuidamos de tus mascotas en tu
          propio hogar, brindándoles la mejor atención sin que tú tengas que
          moverte.
        </p>
      </div>

      <div className="home-video">
        <video src={video.video} autoPlay muted loop onEnded={handleEnded}/>
      </div>
    </section>
  );
}

export default Home;
