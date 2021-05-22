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
      <section class="p-2 w-full">
        <picture >
          <img class="w-full h-auto border border-gray-600 rounded-lg" src="${this.img}" alt="${this.rotulo}" />
        </picture>
        <button  
          id="project" 
          class="block mx-auto rounded-sm my-4 w-3/4 py-3 px-5 text-sm font-bold border border-gray-600 text-gray-600" 
          data-rotulo="${this.rotulo}"
          data-desc="${this.desc}"
          data-repo="${this.repo}"
          data-deploy="${this.deploy}"
        >Más información</button>
      </section>`;

    return template;
  }
  static get observedAttributes(): string[] {
    return ["img", "rotulo", "desc", "repo", "deploy", "tech"];
  }
  attributeChangedCallback(attr, oldVal, newVal: string) {
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
  }
}

customElements.define("my-project", Project);
