import { Imagestype } from "@/types"; 

export const ImagesLinkHandler = (images: Imagestype) => {
  const urlsLimpias: Imagestype = [];
  images.forEach((url) => {
    const urlLimpia = url.replace(/"/g, "").replace(/[\[\]]/g, "");
    urlsLimpias.push(urlLimpia);
  });

  return urlsLimpias;
};
