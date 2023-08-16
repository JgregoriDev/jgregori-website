import {useState,useEffect} from 'react'
import {projects as ProjectJson} from "@assets/db/Projects.json";
import { modelsProject } from '@/models/project';

const getGenres = async (projects:modelsProject[]):Promise<Set<string>> => {
    const genres = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((technology) => {
        genres.add(technology);
      });
    });
    return genres;
};

const useProjects = () => {
    const [projects,] = useState(ProjectJson);
    const [genres, setGenres] = useState<Set<string>>(new Set<string>());

    useEffect(() => {
        getGenres(projects)
        .then((result) => {
            setGenres(result);
        }).catch((err) => {
            console.error(err);
            
        });
         
    },[projects])
    
    // useEffect(() => {
    //     filterProjects('react');
    // }, [])
    
    // const filterProjects = (filter: string|null=null,) => {
    //     const proj=[...projects].filter((project) => {
    //         return project.technologies.includes(filter);
    //     })
    // }

    return {
        projects,genres
    };

}

export default useProjects