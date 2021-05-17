import { ProjectClass } from "../utils/project-class";
import { createSkill } from "../utils/dom/createSkill";
import { SkillsClass } from "../utils/skills-icons";

const projectClass = new ProjectClass();
const skillClass = new SkillsClass();

const createProject = (
  image: string,
  title: string,
  desc: string,
  gitHub: string,
  deploy: string,
  skills: HTMLElement[]
): HTMLElement => {
  const contain = document.createElement("article");
  contain.className = "exp";

  const project: HTMLElement = document.createElement("my-project");

  //atrr

  project.setAttribute("img", image);
  project.setAttribute("rotulo", title);
  project.setAttribute("desc", desc);
  project.setAttribute("repo", gitHub);
  project.setAttribute("deploy", deploy);

  const subtitle: HTMLHeadingElement = document.createElement("h3");
  subtitle.textContent = "Tecnologías usadas: ";
  subtitle.className = "text-base font-semibold my-4 text-center";

  const line: HTMLElement = document.createElement("div");
  line.className = "bg-gray-700 w-10/12 h-1 rounded-md mx-auto";

  const skillsContain = document.createElement("div");
  skillsContain.className = "exp__tecnologies";

  skillsContain.append(...skills);

  contain.appendChild(project);
  contain.appendChild(subtitle);
  contain.appendChild(line);
  contain.appendChild(skillsContain);

  return contain;
};

let final: boolean = false;
let count: number = 0;

while (!final) {
  const { image, title, description, gitHub, deploy, tecnologies } =
    projectClass.getByIndex(count);
  if (title === "Not Found") {
    final = true;
  } else {
    const projectContain = document.getElementById("project-contain");

    let skills: HTMLElement[] = [];

    tecnologies.forEach((skill) => {
      const { title, logo, description: desc } = skillClass.getByTitle(skill);
      skills.push(createSkill(logo, title, desc, "64"));
    });

    projectContain.appendChild(
      createProject(image, title, description, gitHub, deploy, skills)
    );
    count++;
  }
}
