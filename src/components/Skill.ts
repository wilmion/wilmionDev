import { selectElement } from "../utils/selectElement";

class Skill extends HTMLElement {
  img: string;
  nameskill: string;
  desc: string;
  size: string;

  cssId: string;
  constructor() {
    super();
  }
  getTemplate(): HTMLTemplateElement {
    const template: HTMLTemplateElement = document.createElement("template");

    this.cssId = this.nameskill.toLowerCase();

    template.innerHTML = `
            <div id="skill-icon" cssid="${
              this.cssId + this.size
            }" class="containt target-${
      this.cssId + this.size
    } bg-image p-2 bg-cover bg-no-repeat bg-center">
                <div class="opacity-0">
                    <h2 class="text-gray-300 text-center pb-4 uppercase font-bold text-xs" >${
                      this.cssId
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
            .target-${this.cssId}${this.size} {
              background-image: url("${this.img}");
              width: ${this.size}px;
              height: ${this.size}px;
            } 
            .target--details-${this.cssId}${this.size} {
              background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                url("${this.img}");
              width: ${this.size}px;
              height: ${this.size}px;
            } 
        </style>`;
  }
  handleOver(e: any): void {
    selectElement(e.target, "skill-icon", (element) => {
      const cssId: string = element.getAttribute("cssid");
      element.children[0].className = "opacity-100";
      element.className = `containt target--details-${cssId} bg-image p-2 bg-cover bg-no-repeat bg-center`;
    });
  }
  handleOverOut(e: any): void {
    const element: HTMLElement = e.target;
    if (element.id == "skill-icon") {
      const cssId: string = element.getAttribute("cssid");
      element.children[0].className = "opacity-0";
      element.className = `containt target-${cssId} bg-image p-2 bg-cover bg-no-repeat bg-center`;
    }
  }
  static get observedAttributes(): string[] {
    return ["img", "nameskill", "desc", "size"];
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (
      attr === "img" ||
      attr === "nameskill" ||
      attr === "desc" ||
      attr === "size"
    ) {
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
