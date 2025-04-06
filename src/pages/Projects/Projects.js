import "./Projects.css";
import { cleanPage } from "../../utils/cleanPage";
import data from "../../data/data"; 
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";


export const Projects = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="projects">
    <div class="projects-container"></div>
    </section>`;
  const container = document.querySelector(".projects-container");
  for (const project of data.projects) {
    const figure = document.createElement("figure");
    figure.innerHTML = ProjectCard(project);
    container.appendChild(figure);
  }
};