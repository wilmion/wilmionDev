import MyPhoto from "../static/photo/CV.jpg";
import { lazyLoading } from "../utils/lazy-loading";

const imagePhoto = document.getElementById("my_photo");

lazyLoading.observe(imagePhoto, (element) => {
  element.setAttribute("src", MyPhoto);
});
