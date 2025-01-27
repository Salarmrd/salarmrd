import styles from "./Hero.module.scss";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import Discord from "../assets/discord.svg";
import Github from "../assets/Github.svg";
import Instagram from "../assets/Instagram.svg";
import Scrolldown from "../assets/Animation.json";

const Hero = () => {
    const texts = ["Frontend Developer", "UI/UX Designer", "Website Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);
  return (
    <div className={`${styles.hero} container text-center my-5`}>
        <h1 >Hi, I’m <br/>Amirsalar Mehrdad</h1>
        <h1 className={styles.developer}>{texts[index]}</h1>
        <div className={styles.social}>
        <a href="https://github.com/Salarmrd" _blank><img src={Github} alt="Github Icon" /></a>
        <a href="https://discord.com/channels/@salarmrd" _blank><img src={Discord} alt="Discord Icon" /></a>
        <a href="https://instagram.com/salarmehrdad" _blank><img src={Instagram} alt="Instagram Icon" /></a>
        </div>
        <Lottie animationData={Scrolldown} loop={true} className={styles.lottie}/>

        
    </div>
  )
}

export default Hero