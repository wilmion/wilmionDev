import MyPhoto from "../static/photo/Perfil_Photo.jpg";
import { lazyLoading } from "../utils/lazy-loading";

const imagePhoto = document.getElementById("my_photo");

lazyLoading.observe(imagePhoto, (element) => {
  element.setAttribute("src", MyPhoto);
});
