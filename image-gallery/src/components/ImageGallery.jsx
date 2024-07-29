import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import ImageForm from "./ImageForm";
import "./ImageGallery.css";

function ImageGallery() {
  const initialImages = localStorage.getItem("images")
    ? JSON.parse(localStorage.getItem("images"))
    : [];
  const [images, setImages] = useState(initialImages);

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);

  const addImage = (image) => {
    setImages([...images, image]);
  };

  const deleteImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  const editImage = (index, newDescription) => {
    const newImages = images.map((img, i) =>
      i === index ? { ...img, description: newDescription } : img
    );
    setImages(newImages);
  };

  console.log(images);

  return (
    <div className="image-gallery">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ImageForm addImage={addImage} />
      </div>
      <div className="image-grid">
        {images.map((img, index) => (
          <ImageCard
            key={index}
            index={index}
            img={img}
            deleteImage={deleteImage}
            editImage={editImage}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
