import img from "@assets/jgregori.webp";
import Style from "./Presentation.module.scss";
import { Link } from 'react-router-dom'

const Presentation:React.FC = () => {
  return (
    <section className={Style.presentation}>
      <div className={Style.presentation__cimage}>
        <img
          src={img}
          loading="lazy"
          className={Style.presentation__img}
          alt=""
        />
      </div>
      <div className={Style.presentacion__ctext}>
        <h2 className={Style.presentation__title}>
          Soy Josep Gregori{" "}
          <span className={Style.presentation__span}>
            desarrollador full stack
          </span>
        </h2>
        <p className={Style.presentation__paragraph}>
          Me encanta  enfrentar nuevos desafíos y aportar soluciones en el
          mundo del desarrollo web. Como desarrollador full stack, mi objetivo
          es aprender nuevas tecnologías, aplicar lo aprendido y crecer de una manera segura. 
        </p>
        <div className={Style.presentation__cont}>
        <Link className={Style.presentation__cbutton} to={"/projects"}  title="Descubrir los proyectos">Descubrir los proyectos</Link>

        </div>
      </div>
    </section>
  );
};

export default Presentation;
