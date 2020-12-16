import { useState } from "react";
import "../styles/Background.scss";

function Background() {
  const darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const [backgroundImage, setBackground] = useState(darkTheme.matches ? "https://source.unsplash.com/daily/?abstract,dark" : "https://source.unsplash.com/daily/?abstract,colorful");
  
  function checkMedia(e) {
    setBackground(e.matches ? "https://source.unsplash.com/daily/?abstract,dark" : "https://source.unsplash.com/daily/?abstract,colorful");
  }
  darkTheme.addEventListener("change", checkMedia);

  function handleBgLoad(e) {
    e.target.classList.add("app-background__image--loaded");
  }
  return (
    <div className="app-background">
      <img src={backgroundImage} alt="Background" className="app-background__image" onLoad={handleBgLoad} />
      <div className="app-background__overlay"></div>
    </div>
  );
}

export default Background;