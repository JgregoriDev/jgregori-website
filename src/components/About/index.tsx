import Style from "./About.module.scss";
const About = () => {
  return (
    <section>
      <h2>Sobre mí</h2>
      <div className={Style.container}>
        <div >
          <div className={Style.container__row}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-books"
              width="52"
              height="52"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
              <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
              <path d="M5 8h4"></path>
              <path d="M9 16h4"></path>
              <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"></path>
              <path d="M14 9l4 -1"></path>
              <path d="M16 16l3.923 -.98"></path>
            </svg>
            <h3>Aprendizaje</h3>
          </div>
          <p className={Style.container__par}>El desarrollo web es un campo muy apasionante que te ofrece muchas posibilidades.
Hay grandes cambios y como tal es interesante mantenerte actualizado.</p>
        </div>
        <div >
          <div className={Style.container__row}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-mountain"
              width="52"
              height="52"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 20h18l-6.921 -14.612a2.3 2.3 0 0 0 -4.158 0l-6.921 14.612z"></path>
              <path d="M7.5 11l2 2.5l2.5 -2.5l2 3l2.5 -2"></path>
            </svg>
            <h3>Perseverancia</h3>
          </div>
          <p className={Style.container__par}>Es importante mantenerte al dia con las nuevas tecnologías pero más importante es ser perseverante ya que el desarrollo web no es una carrera de 100 m si no una de fondo,
           no te estreses lo importante es volver a levantarte y continuar.</p>
        </div>
        <div >
          <div className={Style.container__row}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-file-pencil"
              width="52"
              height="52"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
              <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
              <path d="M10 18l5 -5a1.414 1.414 0 0 0 -2 -2l-5 5v2h2z"></path>
            </svg>
            <h3>Divulgación</h3>
          </div>
          <p className={Style.container__par}>
          Comparte tus conocimientos eso te permite darte visibilidad a ti mismo y a tu trabajo. Permitiendo devolver aquello que te han enseñado otras personas.</p>
          
        </div>
      </div>
    </section>
  );
};

export default About;
