import { selectElement } from "../utils/selectElement";

class Skill extends HTMLElement {
  img: string;
  title: string;
  desc: string;
  constructor() {
    super();
  }
  getTemplate(): HTMLTemplateElement {
    const template: HTMLTemplateElement = document.createElement("template");

    template.innerHTML = `
            <div id="skill-icon" class="containt target bg-image w-24 h-24 p-2 bg-cover bg-no-repeat bg-center">
                <div class="opacity-0">
                    <h2 class="text-gray-300 text-center pb-4 uppercase font-bold text-xs" >${
                      this.title
                    }</h2>
                    <p class="text-gray-300 text-center my-2 text-xs">${
                      this.desc
                    }</p>
                </div>
            </div>
            ${this.getStyles()}
        `;
    return template;
  }
  getStyles(): string {
    return `
        <style>
            #skill-icon,div,h2,p {
                transition: 1s;
            }
            .target {
                background-image: url("${this.img}");
            } 
            .target--details {
                background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                    url("${this.img}");
            } 
        </style>`;
  }
  handleOver(e: any): void {
    selectElement(e.target, "skill-icon", (element) => {
      element.children[0].className = "opacity-100";
      element.className =
        "containt target--details bg-image w-24 h-24 p-2 bg-cover bg-no-repeat bg-center";
    });
  }
  handleOverOut(e: any): void {
    const element: HTMLElement = e.target;
    if (element.id == "skill-icon") {
      element.children[0].className = "opacity-0";
      element.className =
        "containt target bg-image w-24 h-24 p-2 bg-cover bg-no-repeat bg-center";
    }
  }
  static get observedAttributes(): string[] {
    return ["img", "title", "desc"];
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "img" || attr === "title" || attr === "desc") {
      this[attr] = newVal;
    }
  }
  connectedCallback(): void {
    this.appendChild(this.getTemplate().content.cloneNode(true));
    this.querySelector(".containt").addEventListener(
      "mouseover",
      this.handleOver
    );
    this.querySelector(".containt").addEventListener(
      "mouseleave",
      this.handleOverOut
    );
  }
}
customElements.define("icon-skill", Skill);
