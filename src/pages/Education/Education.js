import "./Education.css";
import { cleanPage } from "../../utils/cleanPage";
import data from "../../data/data";
import { EducationCard } from "../../components/EducationCard/EducationCard";

export const Education = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  const section = document.createElement("section");
  section.classList.add("educations-container");

  for (const education of data.educations) {
    section.innerHTML += EducationCard(education); 
  }

  main.appendChild(section);
};