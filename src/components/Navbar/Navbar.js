import "./Navbar.css";
export const changeTheme = () => {
    const themeSwitch = document.querySelector("#themeSwitch");
  
    // Aplica el tema guardado, si existe como explico JM
    const savedTheme = localStorage.getItem("theme");
    const isLight = savedTheme === "light";
    document.body.classList.toggle("light", isLight);
    themeSwitch.checked = isLight;
  
    themeSwitch.addEventListener("change", () => {
      const isChecked = themeSwitch.checked;
      document.body.classList.toggle("light", isChecked);
      localStorage.setItem("theme", isChecked ? "light" : "dark");
    });
  };

export const Navbar = () => `
<nav>
<img src="/images/siglascarlos.png" alt="CarlosVidal">
<ul>
    <li>
        <a href="#" id="homelink">Home</a>
    </li>
    <li>
        <a href="#" id="projectslink">Projects</a>
    </li>
    <li>
        <a href="#" id="educationslink">Educations</a>
    </li>
    <li>
        <label class="switch">
            <input type="checkbox" id="themeSwitch" />
            <span class="slider"></span>
        </label>
    </li>
</ul>
</nav>
`;