import FoxbelMusic from "../static/portairs/foxbel-music-portairt.jpg";
import MilkyMakers from "../static/portairs/milkymakers-portairt.jpg";
import RentCarsAPI from "../static/portairs/rent-cars-API-portairt.jpg";
import RentCars from "../static/portairs/rent-cars-portairt.jpg";

export class ProjectClass {
  images: string[];
  title: string[];
  desc: string[];
  gitHubLink: string[];
  deployLink: string[];
  tecnologies: string[][];
  constructor() {
    this.images = [FoxbelMusic, MilkyMakers, RentCars, RentCarsAPI];
    this.title = ["Foxbel Music", "MilkyMakers", "Rent Cars", "Rent Cars API"];
    this.desc = [
      "Proyecto de una prueba técnica , app de música parecida a Spotify.",
      "Proyecto personal de una E-Comerce de distintas galletas hechas con leche. <br> Esta página es solo para mobile.",
      "Proyecto personal de una E-Comerce. <br> Conciste en rentar automoviles por día.",
      "Proyecto personal de una E-Comerce. <br> Esta misma , es el backend de una app para rentar automoviles por día.",
    ];
    this.deployLink = [
      "https://foxbel-mus.netlify.app/",
      "https://milky-makers.web.app/",
      "https://rent-cars.netlify.app/",
      "https://rent-carts.herokuapp.com/api/",
    ];
    this.gitHubLink = [
      "https://github.com/wilmion/Foxbel-Music",
      "https://github.com/wilmion/milkymakers",
      "https://github.com/wilmion/rent-carts",
      "https://github.com/wilmion/rentCardAPI",
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
        "React",
        "HTML5",
        "SASS",
        "Typescript",
        "Redux",
        "Ecmascript",
        "Webpack",
        "Babel",
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
      ],
      ["NodeJS"],
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
