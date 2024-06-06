import { galleryItems } from './gallery-items.js';
// Change code below this line
const imagesList = document.querySelector(".gallery")

function makeImgMarkup(obj) {
    return obj
      .map((image) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
           <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
        </a>
     </li>`
      })
      .join("");
  }
  
  function appendImages(list) {
    return (list.innerHTML = makeImgMarkup(galleryItems));
  }

  appendImages(imagesList);

  const lightbox = new SimpleLightbox('.gallery a', {  })
  
