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
          es ser la mejor version de yo mismo, ser mejor programador que el día de ayer aprendiendo de manera diaria cosas nuevas y crecer de una manera segura. 
        </p>
        <div className={Style.presentation__cont}>
        <Link className={Style.presentation__cbutton} to={"/proyectos"}  title="Descubrir los proyectos">Descubrir los proyectos</Link>
        <Link className={Style.presentation__cibutton} to={"mailto: josepgb13@gmail.com"}  title="Enviar e-mail">Enviar correo electrónico</Link>

        </div>
      </div>
    </section>
  );
};

export default Presentation;
