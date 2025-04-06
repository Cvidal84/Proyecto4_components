import "./Home.css"
import data from '../../data/data';
import {cleanPage} from "../../utils/cleanPage"


export const Home = () => {
    const main = document.querySelector("main");
    cleanPage(main)
    main.innerHTML = `
      <section class="contenedor-main">
        <div class="profile">
          <div class="carlosvidal">
            <h1>${data.name}</h1>
            <h2>Administrative & Web Developer</h2>  
          </div>
          <img src="${data.avatar}" alt="${data.name}">
        </div>
        <div class="aboutme"> 
          <div class="skills-container"></div>  
          <p>${data.aboutMe}</p>
          <p>${data.address}</p>
        </div>
      </section>
    `;
  
    // Insertar las skills
    const skillsList = document.createElement("ul");
    skillsList.classList.add("skills-list");
  
    for (const skill of data.skills) {
      const li = document.createElement("li");
      li.textContent = skill;
      li.classList.add("skill-item");
      skillsList.appendChild(li);
    }
  
    const skillsContainer = document.querySelector(".skills-container");
    skillsContainer.appendChild(skillsList);
}
