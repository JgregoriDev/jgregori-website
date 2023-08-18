import useProjects from "@/hooks/useProjects";
import { modelsProject } from "@/models/project";
import Style from "./ListProjects.module.scss";
import { Card } from "@/components/Card";
import { Link } from "react-router-dom";

export const ListProjects = () => {
  const { projects, genres, filterProjectsByCategory, searchProjectByName } =
    useProjects();
  const isProjectsValid = projects;

  const onChangeGenre = (genre: string) => {
    filterProjectsByCategory(genre);
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
              onChangeGenre(e.target.value);
            }}
            name=""
            id=""
          >
            <option defaultValue={`all`}>all</option>

            {[...genres].map((genre) => (
              <option>{genre}</option>
            ))}
          </select>
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
          <h3>No hay proyectos validos con estos filtros</h3>
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
