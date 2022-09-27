import { collection, addDoc } from "firebase/firestore";
import { db } from "../index";

export let authUser = {};
export let uploadImage = (
  downloads,
  id,
  largeImageURL,
  likes,
  user,
  pageURL,
  previewURL
) => {
  addDoc(collection(db, "pixabay"), {
    downloads: downloads,
    id: id,
    largeImageURL: largeImageURL,
    likes: likes,
    user: user,
    pageURL: pageURL,
    previewURL: previewURL,
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((err) => console.log(err));
};
export const getImg = () => {
  let images = [];
  getDocs(collection(db, "pixabay")).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      images.push(doc.data());
    });
    console.log(images);
  });
};
