import s from "./AboutTextCard.module.scss";
import { ImPointRight } from "react-icons/im";

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: "justify" }}>
        Hi everyone, I am <span className={s.purple}>Guna Karna</span>,<br />a
        Front-End Developer currently based in{" "}
        <span className={s.purple}>Chennai, Tamil Nadu.</span>
        <br />
        <br />
        I have a Bachelor's degree and completed a Front-End Development course
        at Besant Technologies.
        <br />
        <br />
        I transitioned from a non-IT background to software development because
        I’ve always been curious about how apps and websites work. Over time, I
        fell in love with building clean, responsive, and user-friendly
        interfaces.
        <br />
        <br />
        Apart from coding, here are some activities I enjoy:
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Bike Rides
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Reading
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
