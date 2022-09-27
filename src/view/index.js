import { login } from "../pages/login/index";
import { signup } from "../pages/signup/index";
import { pixabay } from "../pages/pixabay/index";
import { uploadImage } from "../pages/uploadImage/index";
import { validateImageInfo } from "../controller/index";
export let setActiveScreen = (screenName) => {
  const app = document.getElementById("app");
  switch (screenName) {
    case "uploadImage":
      if (app) {
        app.innerHTML = uploadImage;
      }
      const uploadForm = document.getElementById("login-form");
      if (uploadForm) {
        console.log(uploadForm);
        uploadForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const downloads = uploadForm.downloads.value;
          const id = uploadForm.id.value;
          const largeImageURL = uploadForm.largeImageURL.value;
          const likes = uploadForm.likes.value;
          const user = uploadForm.user.value;
          const pageURL = uploadForm.pageURL.value;
          const previewURL = uploadForm.previewURL.value;

          validateImageInfo(
            downloads,
            id,
            largeImageURL,
            likes,
            user,
            pageURL,
            previewURL
          );
          uploadForm.downloads.value = "";
          uploadForm.id.value = "";
          uploadForm.largeImageURL.value = "";
          uploadForm.likes.value = "";
          uploadForm.user.value = "";
          uploadForm.pageURL.value = "";
          uploadForm.previewURL.value = "";
        });
      }

      break;
    case "pixabay":
      if (app) {
        app.innerHTML = pixabay;
      }
      break;
    case "login":
      if (app) {
        app.innerHTML = login;
      }
      break;
    case "signup":
      if (app) {
        app.innerHTML = signup;
      }
      break;
  }
};
export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
    console.log("Hello world");
  }
};
