import './style.css';
import { changeTheme } from './components/Navbar/Navbar';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import { Projects } from './pages/Projects/Projects';
import { linkPage } from './utils/linkPage';
import { Educations } from './pages/Educations/Educations';



// Estructura base: header, main y footer
document.body.innerHTML = `
  <header>${Navbar()}</header>
  <main></main>
  <footer>${Footer()}</footer>
`;



requestAnimationFrame(() => {
  
  linkPage("#homelink", Home);
  linkPage("#projectslink", Projects);
  linkPage("#educationslink", Educations);

  changeTheme();
  Home(); // Cargar la primera página
});

