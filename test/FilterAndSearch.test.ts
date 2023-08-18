import { expect, it, test } from "vitest";
import { projects } from "../src/assets/db/Projects.json";
import {
  
  filterProjectsByCategory,
  searchProjectByName,
} from "../src/hooks/useProjects";

test("filter projects by category", () => {
  it("should filter projects by category", () => {
    expect(filterProjectsByCategory("react")).toContain(projects[0]);
    
  })
})

test("search project by name", () => {
  it("should has One of length", () => {
    const n=projects.filter(ele=>ele.name.includes("alazlibros"));
    console.log(n);
    
    expect(n).toHaveLength(1);
  })
  it("should search project by name", () => {
    expect(searchProjectByName("Alazlibros")).toContain(projects[0]);
  })
})