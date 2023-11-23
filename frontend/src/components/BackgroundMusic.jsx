import React, { useEffect } from "react";

function BackgroundMusic() {
  useEffect(() => {
    const audio = new Audio("src/assets/Jingle Bells (Instrumental).mp3");
    audio.play();
  }, []);

  return <div />;
}

export default BackgroundMusic;
