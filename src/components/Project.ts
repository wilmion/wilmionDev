class Project extends HTMLElement {
    img:string;
    title:string;
    desc:string;
    urlRepo:string;
    urlDeploy:string;

    //state

    details:boolean;
    constructor() {
        super();
        this.details = false;
    }
    getTemplate():HTMLTemplateElement {
        const template = document.createElement('template');

        template.innerHTML = `
            <section id="project" class="background-project w-full bg-cover p-2 bg-no-repeat bg-center">
                <div class="opacity-0">
                    <h2 class="text-center text-gray-300 uppercase text-lg font-bold mb-4">${this.title}</h2>
                    <p class="text-center text-gray-300 text-base my-1 tracking-wider" >${this.desc}</p>
                    <div class="flex flex-row justify-around my-5">
                        <a href="${this.urlRepo}" target="_blank"><i class="fab fa-github-square text-3xl text-gray-300 cursor-pointer"></i></a>
                        <a href="${this.urlDeploy}" target="_blank"><i class="fas fa-eye text-3xl text-gray-300 cursor-pointer"></i></a>
                    </div>
                </div>
                
            </section>
            ${this.getStyle()}
        `;

        return template
    }
    getStyle():string {
        return `<style>
            .background-project {
                background-image: url("${this.img}");
                height: ${(window.innerWidth*9)/16}px;
            }
            .background-project--click {
                background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                    url("${this.img}");
                height: ${(window.innerWidth*9)/16}px;
            }
            section , h2 , p , div , i {
                transition: 1s;
            }
        </style>`;
    }
    static get observedAttributes():string[] {
        return ['img' , 'title' , 'desc' , 'urlRepo' , 'urlDeploy']
    }
    attributeChangedCallback(attr , oldVal , newVal) {
        if(attr === 'img'|| attr === 'title' || attr ==='desc' || attr ==='urlRepo' || attr ==='urlDeploy') {
            this[attr] = newVal;
        }
    }
    connectedCallback():void {
        this.appendChild(this.getTemplate().content.cloneNode(true));
        this.querySelector(`#project`).addEventListener('click' , this.handleClick)
    }
    verificationParent( element:HTMLElement , callback:(yes:boolean) => any):void {
        if(element.id !== "project") {
            callback(false);
            return null
        }
        callback(true);
    }
    handleClick(e:any):void {
        const element:HTMLElement = e.target;

        this.verificationParent(element , (yes) => {
            if(!yes) {
                //Maña hacer bucle ctmre
            }
        })

        this.details = !this.details;

        if(this.details) {
            element.className = "background-project--click w-full bg-cover p-2 bg-no-repeat bg-center";
            element.children[0].className="opacity-100"
        }else {
            element.className = "background-project w-full bg-cover p-2 bg-no-repeat bg-center";
            element.children[0].className="opacity-0"
        }
    }
}

customElements.define('my-project' , Project)