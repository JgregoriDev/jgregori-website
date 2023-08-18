import { useState, useEffect } from "react";
import { projects as ProjectJson } from "@assets/db/Projects.json";

const getGenres = async (): Promise<Set<string>> => {
  const genres = new Set<string>();
  ProjectJson.forEach((project) => {
    project.technologies.forEach((technology) => {
      genres.add(technology);
    });
  });
  return genres;
};

const useProjects = () => {
  const [projects, setProjects] = useState(ProjectJson);
  const [genres, setGenres] = useState<Set<string>>(new Set<string>());

  useEffect(() => {
    getGenres()
      .then((result) => {
        setGenres(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // useEffect(() => {
  //     filterProjects('react');
  // }, [])

const filterProjectsByCategory = (filter: string) => {
  if (filter === "all") {
    setProjects(ProjectJson);
    return;
  }
  
  const proj = ProjectJson.filter((project) => project.technologies.includes(filter));
  
  setProjects(proj);
  return proj;
};
const searchProjectByName = (filter: string) => {
  const proj = filter === "" 
    ? ProjectJson 
    : ProjectJson.filter(project => project.name.toLowerCase().includes(filter));

  console.log(proj);
  setProjects(proj);
  return proj;
};

  return {
    projects,
    genres,
    filterProjectsByCategory,
    searchProjectByName
  };
};

export default useProjects;
