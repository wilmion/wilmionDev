import FoxbelMusic from "../static/portairs/foxbel-music-portairt.jpg";
import KuksFresh from '../static/portairs/kuks-fresh portrait.png';
import RentCarsAPI from "../static/portairs/rent-cars-API-portairt.jpg";
import RentCars from "../static/portairs/rent-cars-portairt.jpg";

export class ProjectClass {
  images: string[];
  title: string[];
  desc: string[];
  gitHubLink: Array<string | string[]>;
  deployLink: Array<string | string[]>;
  tecnologies: string[][];
  constructor() {
    this.images = [FoxbelMusic, KuksFresh, RentCars, RentCarsAPI];
    this.title = ["Foxbel Music", "Kuks Fresh", "Rent Cars"];
    this.desc = [
      "Proyecto de una prueba técnica , app de música parecida a Spotify.",
      "Proyecto personal de una E-Comerce de venta de comida a domicilio.",
      "Proyecto personal de una E-Comerce. <br> Conciste en rentar automoviles por día."
    ];
    this.deployLink = [
      "https://foxbel-mus.netlify.app/",
      ["https://kuks-fresh.netlify.app/", "https://kuks-fresh.herokuapp.com/api/"],
      ["https://rent-cars.netlify.app/", "https://rent-carts.herokuapp.com/api/"],
    ];
    this.gitHubLink = [
      "https://github.com/wilmion/Foxbel-Music",
      ["https://github.com/wilmion/kuks-fresh", "https://github.com/wilmion/kuks-fresh-backend"],
      ["https://github.com/wilmion/rent-carts", "https://github.com/wilmion/rentCardAPI"],
    ];
    this.tecnologies = [
      [
        "React",
        "HTML5",
        "SASS",
        "Javascript",
        "Ecmascript",
        "Webpack",
        "Babel",
      ],
      [
        "Angular",
        "HTML5",
        "SASS",
        "Typescript",
        "NGRX",
        "Ecmascript",
        "Webpack",
        "NestJS",
        "MongoDB",
        "Mongoose",
      ],
      [
        "React",
        "HTML5",
        "SASS",
        "Typescript",
        "Redux",
        "Ecmascript",
        "Webpack",
        "Babel",
        "NodeJS"
      ],
    ];
  }
  getByIndex(index: number) {
    if (index >= this.title.length) {
      return {
        image: "Not Found",
        title: "Not Found",
        description: "Not Found",
        gitHub: "Not Found",
        deploy: "Not Found",
        tecnologies: ["Not Found"],
      };
    }
    return {
      image: this.images[index],
      title: this.title[index],
      description: this.desc[index],
      gitHub: this.gitHubLink[index],
      deploy: this.deployLink[index],
      tecnologies: this.tecnologies[index],
    };
  }
  getbyName(key: string) {
    const index = this.title.indexOf(key);
    console.log(index);
    return this.getByIndex(index);
  }
}
