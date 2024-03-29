import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import image1 from "./assets/images/img-3.webp";
import image2 from "./assets/images/img-5.webp";
import image3 from "./assets/images/img-6.webp";

document.querySelector("#app").innerHTML = `
  <div>
    <div class="min-vh-100 d-flex justify-content-center align-items-center">
      <div class="container d-flex flex-column justify-content-center align-items-center">
        <h1>MY VITE PROJECT</h1>
        <div class="row pt-4">
        <div class="col-4">
      <img src="${image1}"  alt="img1"/>
      <h2>IMAGE-1</h2>
      </div>
       <div class="col-4">
      <img src="${image2}"  alt="img2"/>
      <h2>IMAGE-1</h2>
      </div>
       <div class="col-4">
      <img src="${image3}"  alt="img3"/>
      <h2>IMAGE-1</h2>
      </div>
      </div>
      </div>
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
