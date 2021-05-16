import AngularLogo from "../static/icon/Angular.png";
import babelLogo from "../static/icon/babel-logo.jpg";
import cssLogo from "../static/icon/css-logo.png";
import EcmascriptLogo from "../static/icon/Ecmascript-logo.jpg";
import htmlLogo from "../static/icon/html-logo.png";
import jsLogo from "../static/icon/js-logo.png";
import lessLogo from "../static/icon/less-logo.png";
import NodeJSLogo from "../static/icon/NodeJS-logo.png";
import pugLogo from "../static/icon/pug-logo.png";
import reactLogo from "../static/icon/react-logo.png";
import reduxLogo from "../static/icon/redux-logo.png";
import sassLogo from "../static/icon/sass-logo.png";
import stylusLogo from "../static/icon/stylus-logo.png";
import tailwindLogo from "../static/icon/tailwind-logo.png";
import tsLogo from "../static/icon/ts-logo.png";
import webpackLogo from "../static/icon/webpack-logo.png";

export class SkillsClass {
  logos: string[];
  title: string[];
  description: string[];
  constructor() {
    this.logos = [
      AngularLogo,
      babelLogo,
      cssLogo,
      EcmascriptLogo,
      htmlLogo,
      jsLogo,
      lessLogo,
      NodeJSLogo,
      pugLogo,
      reactLogo,
      reduxLogo,
      sassLogo,
      stylusLogo,
      tailwindLogo,
      tsLogo,
      webpackLogo,
    ];
    this.title = [
      "Angular",
      "Babel",
      "CSS3",
      "Ecmascript",
      "HTML5",
      "Javascript",
      "LESS",
      "NodeJS",
      "PUG",
      "React",
      "Redux",
      "SASS",
      "Stylus",
      "TailwindCSS",
      "Typescript",
      "Webpack",
    ];
    this.description = [
      "Framework de Javascript",
      "Transpilador de código Javacript",
      "Lenguaje de estilos",
      "Estandares de Javascript",
      "Lenguaje de etiquetas",
      "Lenguaje de Programación",
      "Framework de escritura de CSS",
      "Entorno de ejecución",
      "Framework de escritura de HTML",
      "Framework de Javascript",
      "Controlador de un unico estado",
      "Framework de escritura de CSS",
      "Framework de escritura de CSS",
      "Framework de estilos de CSS",
      "Lenguaje altamente tipado de JS",
      "Compilador de Javascript",
    ];
  }
  getSkill(index: number): {
    logo: string;
    title: string;
    description: string;
  } {
    if (index >= this.logos.length) {
      return {
        logo: "Not Found",
        title: "Not Found",
        description: "Not Found",
      };
    }
    return {
      logo: this.logos[index],
      title: this.title[index],
      description: this.description[index],
    };
  }
  getByTitle(key: string) {
    const index: number = this.title.indexOf(key);

    return this.getSkill(index);
  }
}
