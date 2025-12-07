import s from "./IntroSection.module.scss";
import avatas from "../../../assets/avatas.png";
import { AiFillGithub } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { LazyLoadImage } from "react-lazy-load-image-component";

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span> MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I'm a React.js Developer <b></b>
              <br />
              It's fun for me to bring new concepts to life. I consider myself
              fortunate to work in web Apps my work has a direct impact on the
              user's life.
            </p>

            <p>
              My skills include proficiency in{" "}
              <i>
                <b className={s.purple}>
                  HTML, CSS, JavaScript, React, Redux, Bootstrap, Firebase,
                  Context API, and Next.js{" "}
                </b>
              </i>
              <br />
              and other relevant technologies. I have experience in integrating
              various <br />
              third-party libraries, API integration, push notifications and
              analytics.
            </p>

            <p>
              My field of Interest's are building new
              <i>
                <b className={s.purple}> Technologies and Products</b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatas} height={200} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>Let’s Catch Up Here</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/gunakarna"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com/gunakarna"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="facebook"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://t.me/gunakarna"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="telegram"
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/guna-karna-8906041a9/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
