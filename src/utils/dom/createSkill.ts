export function createSkill(
  background: string,
  title: string,
  desc: string,
  size: string
): HTMLElement {
  const skill: HTMLElement = document.createElement("icon-skill");
  skill.setAttribute("img", background);
  skill.className = "mx-5 my-2";
  skill.setAttribute("nameskill", title);
  skill.setAttribute("desc", desc);
  skill.setAttribute("size", size);

  return skill;
}
