const id_parent: string = "navigation-movil";

//funcionality
const menu = document.getElementById(id_parent);
menu.style.transform = "translateX(-100%)";
window.addEventListener("click", (event) => {
  const element: HTMLElement = <HTMLElement>event.target;
  if (element.id === `${id_parent}-close`) {
  }
  switch (element.id) {
    case `${id_parent}-close`:
      menu.style.transform = "translateX(-100%)";
      break;
    case "menu-open":
      menu.style.transform = "translateX(0)";
      break;
    case `${id_parent}__item`:
      menu.style.transform = "translateX(-100%)";
      break;
  }
});
