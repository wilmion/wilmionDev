const id_base: string = "modal";

const modal = document.getElementById(id_base);
const modalBackground: HTMLElement = document.querySelector(".modal");

function changeProp(
  selector: string,
  value: string | null,
  prop?: { name: string; value: String }
): void {
  const element: HTMLElement = modal.querySelector(selector);
  if (value) {
    element.textContent = value;
  }
  if (prop) {
    element[prop.name] = prop.value;
  }
}

export function setInformationOnModal(
  title: string,
  desc: string,
  github: string,
  deploy: string,
  skills: HTMLElement[]
): void {
  changeProp(".modal-contain__title", title);
  changeProp(".modal-contain__desc", desc);
  changeProp("#modal__github", null, {
    name: "href",
    value: github,
  });
  changeProp("#modal__deploy", null, {
    name: "href",
    value: deploy,
  });

  const skillsContain = document.getElementById(`${id_base}__tech-contain`);
  skillsContain.innerHTML = "";
  skillsContain.append(...skills);

  openModal();
}

export function closeModal(): void {
  modal.style.transform = "translateY(-500px)";
  modal.style.opacity = "0";
  modalBackground.style.opacity = "0";
  setTimeout(() => {
    modalBackground.className = "modal hidden";
  }, 250);
}
function openModal(): void {
  modalBackground.className = "modal block";

  setTimeout(() => {
    modalBackground.style.opacity = "1";
    modal.style.transform = "translateY(0)";
    modal.style.opacity = "1";
  }, 10);
}
