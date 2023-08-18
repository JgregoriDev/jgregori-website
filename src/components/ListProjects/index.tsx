import useProjects from "@/hooks/useProjects";
import { modelsProject } from "@/models/project";
import Style from "./ListProjects.module.scss";
import { Card } from "@/components/Card";
import { Link } from "react-router-dom";
import { useState,ReactElement } from "react";
export const ListProjects = () => {
  const { projects, genres, filterProjectsByCategory, searchProjectByName } =
    useProjects();
  const [error, setError] = useState<ReactElement|null>(null);
  const isProjectsValid = projects;

  const onChangeGenre = (e) => {
    e.target.style.border="1px solid gray";
    setError(null);
    const genreParam=e.target.value;
    const aux=[...genres].map(genre=>genre.toLowerCase());
    aux.push("all");
    console.log(e.target.border);
    if(aux.includes(genreParam.toLowerCase())===false){
      console.log("No se incluye este llave");
      
      e.target.style.border="1px solid red";
      setError(<small style={{color:"red"}}>No existe esta llave</small>);
      return;
    }
    
    filterProjectsByCategory(genreParam);
  };
  const onSearchProject = (name: string) => {
    searchProjectByName(name);
  };
  return (
    <div className={Style.container}>
      <h2 className={Style.title}>Proyectos</h2>
      <div className={Style.container}>
        {/* form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className={Style.form}
          method="post"
        >
          <select
            className={Style.form__filter}
            onChange={(e) => {
              onChangeGenre(e);
            }}
            name=""
            id=""
          >
            <option value={`all`}>Todos</option>

            {[...genres].map((genre) => (
              <option value={genre}>{genre}</option>
            ))}
          </select>
          {error && error}
          <input
            onChange={(e) => onSearchProject(e.target.value.toLowerCase())}
            className={Style.form__text}
            type="search"
            name=""
            id=""
            placeholder="Buscar proyecto"
          />
        </form>
        {/* end form */}
      </div>
      <section className={Style.section}>
        {isProjectsValid && projects.length === 0 ? (
          <h3>No hay proyectos válidos con estos filtros</h3>
        ) : (
          [...projects].map((project: modelsProject) => {
            return <Card key={project.id} {...project} />;
          })
        )}
      </section>
      <div className="container--link">
        <Link
          to={"https://github.com/JgregoriDev?tab=repositories"}
          target="_blank"
          title="Ver más proyectos en github"
          className={`container--link__primary`}
        >
          Más proyectos
        </Link>
      </div>
    </div>
  );
};
