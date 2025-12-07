import s from "./TechSkills.module.scss";
import { DiJavascript1, DiReact, DiGit } from "react-icons/di";
import { SiHtml5, SiRedux, SiCss3, SiNextdotjs } from "react-icons/si";

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <SiHtml5 />
      </li>
      <li className={s.techIcon}>
        <SiCss3 />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>

      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <SiNextdotjs />
      </li>

      <li className={s.techIcon}>
        <DiGit />
      </li>
    </ul>
  );
};

export default TechSkills;
