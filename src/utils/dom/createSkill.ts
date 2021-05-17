import { lazyLoading } from "../lazy-loading";

export function createSkill(
  background: string,
  title: string,
  desc: string,
  size: string
): HTMLElement {
  const skillContainObserve: HTMLElement = document.createElement("div");
  skillContainObserve.className = "mx-5 my-2 w-24 h-24";
  skillContainObserve.dataset.img = background;
  skillContainObserve.dataset.nameskill = title;
  skillContainObserve.dataset.desc = desc;
  skillContainObserve.dataset.size = size;

  lazyLoading.observe(skillContainObserve, (element) => {
    element.className = "mx-5 my-2";

    const skill: HTMLElement = document.createElement("icon-skill");

    skill.setAttribute("img", element.dataset.img);
    skill.setAttribute("nameskill", element.dataset.nameskill);
    skill.setAttribute("desc", element.dataset.desc);
    skill.setAttribute("size", element.dataset.size);

    element.appendChild(skill);
  });

  return skillContainObserve;
}
