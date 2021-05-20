import { ProjectClass } from "../utils/project-class";
import { lazyLoading } from "../utils/lazy-loading";

const projectClass = new ProjectClass();

const createProject = (
  image: string,
  title: string,
  desc: string,
  gitHub: string,
  deploy: string
): HTMLElement => {
  const contain = document.createElement("article");
  contain.className = "exp";

  const projectCotainObserver: HTMLElement = document.createElement("div");
  projectCotainObserver.className = "w-60 h-32";
  projectCotainObserver.dataset.img = image;
  projectCotainObserver.dataset.rotulo = title;
  projectCotainObserver.dataset.desc = desc;
  projectCotainObserver.dataset.repo = gitHub;
  projectCotainObserver.dataset.deploy = deploy;

  contain.appendChild(projectCotainObserver);

  lazyLoading.observe(projectCotainObserver, (element) => {
    element.className = "";

    const project: HTMLElement = document.createElement("my-project");

    //atrr

    project.setAttribute("img", element.dataset.img);
    project.setAttribute("rotulo", element.dataset.rotulo);
    project.setAttribute("desc", element.dataset.desc);
    project.setAttribute("repo", element.dataset.repo);
    project.setAttribute("deploy", element.dataset.deploy);

    element.appendChild(project);
  });

  return contain;
};

let final: boolean = false;
let count: number = 0;

while (!final) {
  const { image, title, description, gitHub, deploy } =
    projectClass.getByIndex(count);
  if (title === "Not Found") {
    final = true;
  } else {
    const projectContain = document.getElementById("project-contain");

    projectContain.appendChild(
      createProject(image, title, description, gitHub, deploy)
    );
    count++;
  }
}
