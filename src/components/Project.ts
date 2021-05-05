class Project extends HTMLElement {
  img: string;
  rotulo: string;
  desc: string;
  repo: string;
  deploy: string;
  constructor() {
    super();
  }
  getTemplate(): HTMLTemplateElement {
    const template = document.createElement("template");

    template.innerHTML = `
            <section id="project" class="background-project w-full bg-cover p-2 bg-no-repeat bg-center">
                <div class="opacity-0">
                    <h2 class="text-center text-gray-300 uppercase text-lg font-bold mb-4">${
                      this.rotulo
                    }</h2>
                    <p class="text-center text-gray-300 text-base my-1 tracking-wider" >${
                      this.desc
                    }</p>
                    <div class="flex flex-row justify-around my-5">
                        <a href="${
                          this.repo
                        }" target="_blank"><i class="fab fa-github-square text-3xl text-gray-300 cursor-pointer"></i></a>
                        <a href="${
                          this.deploy
                        }" target="_blank"><i class="fas fa-eye text-3xl text-gray-300 cursor-pointer"></i></a>
                    </div>
                </div>
                
            </section>
            ${this.getStyle()}
        `;

    return template;
  }
  getStyle(): string {
    return `<style>
            .background-project {
                background-image: url("${this.img}");
                height: ${(window.innerWidth * 9) / 16}px;
            }
            .background-project--click {
                background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                    url("${this.img}");
                height: ${(window.innerWidth * 9) / 16}px;
            }
            section , h2 , p , div , i {
                transition: 1s;
            }
        </style>`;
  }
  handleClick(e: any): void {
    let element: HTMLElement = e.target;

    while (element.id !== "project") {
      element = element.parentElement;
      if (element.tagName === "BODY") {
        return null;
      }
    }
    if (
      element.className ===
      "background-project w-full bg-cover p-2 bg-no-repeat bg-center"
    ) {
      element.className =
        "background-project--click w-full bg-cover p-2 bg-no-repeat bg-center";
      element.children[0].className = "opacity-100";
    } else {
      element.className =
        "background-project w-full bg-cover p-2 bg-no-repeat bg-center";
      element.children[0].className = "opacity-0 disable";
    }
  }
  static get observedAttributes(): string[] {
    return ["img", "rotulo", "desc", "repo", "deploy"];
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    switch (attr) {
      case "img":
        this.img = newVal;
        break;
      case "rotulo":
        this.rotulo = newVal;
        break;
      case "desc":
        this.desc = newVal;
        break;
      case "repo":
        this.repo = newVal;
        break;
      case "deploy":
        this.deploy = newVal;
        break;
    }
  }
  connectedCallback(): void {
    this.appendChild(this.getTemplate().content.cloneNode(true));
    this.querySelector(`#project`).addEventListener("click", this.handleClick);
  }
}

customElements.define("my-project", Project);
