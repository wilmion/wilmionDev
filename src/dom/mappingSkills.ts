import { createSkill } from "../utils/dom/createSkill";
import { SkillsClass } from "../utils/skills-icons";

const skillClass = new SkillsClass();
const contenedor: HTMLElement = document.querySelector("#contain-skills");

//16

let final: boolean = false;
let count: number = 0;

while (!final) {
  const { logo, title, description } = skillClass.getSkill(count);

  if (logo === "Not Found") {
    final = true;
  } else {
    const skillElement: HTMLElement = createSkill(
      logo,
      title,
      description,
      "100"
    );
    contenedor.appendChild(skillElement);
    count++;
  }
}
