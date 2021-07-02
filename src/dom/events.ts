import { closeModal, setInformationOnModal } from "../layout/toogleModal";
import { ProjectClass } from "../utils/project-class";
import { createSkill } from "../utils/dom/createSkill";
import { SkillsClass } from "../utils/skills-icons";

const id__header: string = "navigation-movil";
const menu = document.getElementById(id__header);

window.addEventListener("click", (event) => {
  const element: HTMLElement = <HTMLElement>event.target;
  switch (element.id) {
    case `${id__header}-close`:
      menu.style.transform = "translateX(-100%)";
      break;
    case "menu-open":
      menu.style.transform = "translateX(0)";
      break;
    case `${id__header}__item`:
      menu.style.transform = "translateX(-100%)";
      break;
    case `modal__close`:
      closeModal();
      break;
    case "project":
      const title = element.dataset.rotulo;
      const desc = element.dataset.desc;

      const projectClass = new ProjectClass();
      const skillClass = new SkillsClass();

      const { tecnologies, gitHub, deploy } = projectClass.getbyName(title);

      let skills: HTMLElement[] = [];

      tecnologies.forEach((skill) => {
        const { title, logo, description: desc } = skillClass.getByTitle(skill);
        skills.push(createSkill(logo, title, desc, "64"));
      });

      setInformationOnModal(title, desc, gitHub, deploy, skills);

      break;
  }
});
