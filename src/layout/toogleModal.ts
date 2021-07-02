const id_base: string = "modal";

const modal = document.getElementById(id_base);
const modalBackground: HTMLElement = document.querySelector(".modal");

function changeProp(
  selector: string,
  value: string | null,
  prop?: string,
  style?: string,
): void {
  const element: HTMLElement = modal.querySelector(selector);

  if (prop) {
    element[prop] = value;
  } else if (style) {
    element.style[style] = value;
  } else if (value) {
    element.innerHTML = value;
  }

}

export function setInformationOnModal(
  title: string,
  desc: string,
  github: string | string[],
  deploy: string | string[],
  skills: HTMLElement[]
): void {
  changeProp(".modal-contain__title", title);
  changeProp(".modal-contain__desc", desc);
  if(Array.isArray(github) && Array.isArray(deploy)) {
    for (let i = 0 ; i < 2; i++) {
      changeProp(`#modal__github${i}`, github[i], "href");
      changeProp(`#modal__github${i}`, 'flex', null, 'display' );
      changeProp(`#modal__deploy${i}`, deploy[i], "href");
      changeProp(`#modal__deploy${i}`, 'flex', null, 'display' );
    }
  } else {
    changeProp("#modal__github0", github as string, 'href' );
    changeProp(`#modal__github1`, 'none', null, 'display' );
    changeProp("#modal__deploy0", deploy as string, 'href' );
    changeProp(`#modal__deploy1`, 'none', null, 'display' );
  }

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
