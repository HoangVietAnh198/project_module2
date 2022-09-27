import { renderErrorMessage } from "../view/index";
import { uploadImage } from "../model/index";
export let validateImageInfo = (
  downloads,
  id,
  largeImageURL,
  likes,
  user,
  pageURL,
  previewURL
) => {
  if (!downloads) {
    renderErrorMessage("error-dowloads", "Please enter your downloads");
  } else {
    renderErrorMessage("error-dowloads", "");
  }
  if (!id) {
    renderErrorMessage("error-id", "Please enter your id");
  } else {
    renderErrorMessage("error-id", "");
  }

  if (!largeImageURL) {
    renderErrorMessage(
      "error-largeImageURL",
      "Please enter your largeImageURL"
    );
  } else {
    renderErrorMessage("error-largeImageURL", "");
  }

  if (!likes) {
    renderErrorMessage("error-likes", "Please enter your likes");
  } else {
    renderErrorMessage("errore-likes", "");
  }
  if (!user) {
    renderErrorMessage("error-user", "Please enter your user");
  } else {
    renderErrorMessage("error-user", "");
  }
  if (!pageURL) {
    renderErrorMessage("error-pageURL", "Please enter your pageURL");
  } else {
    renderErrorMessage("error-pageURL", "");
  }
  if (!previewURL) {
    renderErrorMessage("error-previewURL", "Please enter your previewURL");
  } else {
    renderErrorMessage("error-previewURL", "");
  }
  if (
    downloads &&
    id &&
    largeImageURL &&
    likes &&
    user &&
    pageURL &&
    previewURL
  ) {
    uploadImage(downloads, id, largeImageURL, likes, user, pageURL, previewURL);
  }
};
