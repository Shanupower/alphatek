import React, { useState } from "react";
import "./imageselect.css";
import Family1 from "./Assets/Family1.png"; // Make sure the path to the image is correct
import Family2 from "./Assets/Family2.png";
import Family3 from "./Assets/Family3.png";
import Preview1 from "./Assets/KPlate.png";
import Preview3 from "./Assets/QPlate.png";
import Preview2 from "./Assets/HPlate.png";
const options = [
  { src: Family1, alt: "Description of image 1", preview: Preview1, plateName: "HPlate" },
  { src: Family2, alt: "Description of image 2", preview: Preview2, plateName: "KPlate" },
  { src: Family3, alt: "Description of image 3", preview: Preview3, plateName: "QPlate" },
  { src: Family1, alt: "Description of image 4" },
  { src: Family1, alt: "Description of image 5" },
  { src: Family1, alt: "Description of image 6" },
  // Add more options as needed
];

const ImageSelect = ({ onSelect }) => {
  const initialFamily = {
    src: Family1,
    alt: "Description of image 1",
    preview: Preview1,
  };

  const [selected, setSelected] = useState(initialFamily);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option);
  };

  return (
    <div>
      <div className="configureButtonContainer">
        <button className="configureButtonText" type="button">
          Configure <br />
          The Product
        </button>
        <div className="dash">______________</div>
      </div>

      <div className="image-select-container">
        <p className="selectTheFamily">Select The Family</p>
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className={`image-option ${
                selected === option ? "selected" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              <img className="optionImage" src={option.src} alt={option.alt} />
            </div>
          );
        })}
      </div>

      <div className="sideSectionBottom">
        <p className="plateFinishText">Family Name</p>
        <p className="plateName">HPlate</p>
      </div>
    </div>
  );
};

ImageSelect.defaultProps = {
  onSelect: () => {},
};

export default ImageSelect;
