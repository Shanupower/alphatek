import React, { useState,useCallback } from "react";
import "./App.css";
import ImageSelect from "./imageselect"; // Adjust path as necessary
import Logo from "./Assets/Logo.png"; // Ensure this points to your logo image
import Preview from "./Assets/KPlate.png"; // Ensure this points to your logo image
import "./imageselect.css";
import Family1 from "./Assets/Family1.png"; // Make sure the path to the image is correct
import Vertical from "./Assets/vertical.png"
import brownPlate from "./Assets/brownPlate.png";
import onePlustwo from "./Assets/onePlusTwo.png";
import onePlustwoBlunt from "./Assets/onePlustwoBlunt.png";
import three from "./Assets/three.png";
import threeBlunt from "./Assets/threeBlunt.png";
import six from "./Assets/six.png";
import sixBlunt from "./Assets/sixBlunt.png";
import one from "./Assets/one.png";
import oneBlunt from "./Assets/oneBlunt.png";
import two from "./Assets/two.png";
import twoBlunt from "./Assets/twoBlunt.png";
import four from "./Assets/four.png";
import fourBlunt from "./Assets/fourBlunt.png";
import silverHPlate from "./Assets/HPlate-Silver.png";
import { LuMoveLeft } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import matt1 from "./Assets/matt1.png";
import matt2 from "./Assets/matt2.png";
import matt3 from "./Assets/matt3.png";

import oneNormalAZ from "./Assets/oneNormalAZ.png"
import oneBluntAZ from "./Assets/oneBluntAZ.png"
import twoNormalAZ from "./Assets/twoNormalAZ.png"
import twoBluntAZ from "./Assets/twoBluntAZ.png"
import fourNormalAZ from "./Assets/fourNormalAZ.png"
import fourBluntAZ from "./Assets/fourBluntAZ.png"

import onePlusTwoNormalAZ from "./Assets/onePlusTwoNormalAZ.png"
import onePlusTwoBluntAZ from "./Assets/onePlusTwoBluntAZ.png"

import threeNormalAZ from "./Assets/threeNormalAZ.png"
import threeBluntAZ from "./Assets/threeBluntAZ.png"

import sixNormalAZ from "./Assets/sixNormalAZ.png"
import sixBluntAZ from "./Assets/sixBluntAZ.png"

import WheelPicker from "react-wheelpicker";


const App = () => {
  const handleSelection = (selectedOption) => {
    setActiveFamily(selectedOption);
    setPlateName(selectedOption.plateName);
  };

  const initialFamily = {
    src: Family1,
    alt: "Description of image 1",
    preview: Preview,
  };

  const [activeFamily, setActiveFamily] = useState(initialFamily);
  const [pageView, setPageView] = useState("PAGE_1");
  const [plateName, setPlateName] = useState("KPlate");

  const [isHorizontalActice, setHorizontalActive] = useState(true);
  const [isVerticalActive, setIsVerticalActive] = useState(false);

  const [isNormalActive, setIsNormalActive] = useState(true);
  const [isBluntActive, setIsBluntActive] = useState(false);
  
  // Function to handle click on vertical button
  const onToggleVertical = () => {
    setIsVerticalActive(true);
    setHorizontalActive(false); // Disable horizontal button
    setData(verticalData); // Show vertical data in wheelpicker
  };

  // Function to handle click on horizontal button
  const onToggleHorizontal = () => {
    setIsVerticalActive(false);
    setHorizontalActive(true); // Enable horizontal button
    setData(horizontalData); // Show horizontal data in wheelpicker
  };


  // Function to handle click on Normal button
  const onToggleNormal = () => {
    setIsNormalActive(true);
    setIsBluntActive(false);
    setImageSrc(imageMap[selection].normal);
  };

  // Function to handle click on Blunt button
  const onToggleBlunt = () => {
    setIsNormalActive(false);
    setIsBluntActive(true);
    setImageSrc(imageMap[selection].blunt);
  };  
    const [text, setText] = useState('');
    const [displayText, setDisplayText] = useState('');

   const handleChange = (event) => {
    setDisplayText(event.target.value);
  };

  const handleSubmit = () => {
    setText(displayText);
    setDisplayText(''); // Clear the input field after adding the text
  };


  const [selection, setSelection] = useState("Big Data");
  const [defaultSelection, setDefaultSelection] = useState(1);
  const [imageSrc, setImageSrc] = useState(three); 
  // const data = ["1+2", "3", "6", "1", "2", "4"];

  const horizontalData = ["1+2", "3", "6"];
  const verticalData = ["1", "2", "4"];
  const [data, setData] = useState(horizontalData);

  const imageMap = {
    "1+2": { normal: onePlustwo, blunt: onePlustwoBlunt, Normalaz: onePlusTwoNormalAZ, Bluntaz: onePlusTwoBluntAZ },
    "3": { normal: three, blunt: threeBlunt, Normalaz: threeNormalAZ, Bluntaz:  threeBluntAZ},
    "6": { normal: six, blunt: sixBlunt, Normalaz: sixNormalAZ, Bluntaz:  sixBluntAZ},
    "1": { normal: one, blunt: oneBlunt, Normalaz: oneNormalAZ, Bluntaz: oneBluntAZ},
    "2": { normal: two, blunt: twoBlunt, Normalaz: twoNormalAZ, Bluntaz: twoBluntAZ },
    "4": { normal: four, blunt: fourBlunt, Normalaz: fourNormalAZ, Bluntaz: fourBluntAZ }
  };


  const updateSelection = useCallback((selectedIndex) => {
    setSelection(data[selectedIndex]);
    setDefaultSelection(selectedIndex);
    setImageSrc(imageMap[data[selectedIndex]].normal);
  }, [horizontalData, verticalData, imageMap]);

  const handleAnodizedClick = () => {
    setPageView("PAGE_6.1");
    setColorTypeText('Anodized');
  };

  const handleArtClick = () => {
    setPageView("PAGE_6.2");
    setColorTypeText('Art');
  };

  const[colorText, setColorText] = useState('');

  const[colorTypeText, setColorTypeText] = useState('');


  const handleMattImageClick = () => {
    setActiveFamily({ ...activeFamily, preview: onePlustwo });
  };

  const handleAZClick = () => {
    // setActiveFamily({ ...activeFamily, preview: silverHPlate });
    if(isNormalActive){
      setImageSrc(imageMap[selection].Normalaz);
    } else {
      setImageSrc(imageMap[selection].Bluntaz);
    }
    setColorText('Color-1');
  };

  const handleMattImageClick2 = () => {
    setActiveFamily({ ...activeFamily, preview: brownPlate });
  };

  // const onToggleNormal = () => {
  //   if (isNormalActive) {
  //     setNormalActive(true);
  //     setBluntActive(false);
  //   } else {
  //     setBluntActive(false);
  //     setNormalActive(true);
  //   }
  // };

  // const onToggleBlunt = () => {
  //   if (isBluntActive) {
  //     setNormalActive(true);
  //     setBluntActive(false);
  //   } else {
  //     setBluntActive(true);
  //     setNormalActive(false);
  //   }
  // };

  const renderPageView = () => {
    // here using switch statement handle page view
    switch (pageView) {
      case "PAGE_1":
        return (
          <div className="familyContainer">
            <div className="Family-Selector">
              <ImageSelect onSelect={handleSelection} />
            </div>
            <div className="Image Preview">
              <h1 className="plateNameHeading">{plateName}</h1>
              <img
                className="previewImage"
                src={activeFamily.preview}
                alt="Preview"
              />
            </div>
          </div>
        );
      case "PAGE_2":
        return (
          <div className="pageViewContainer">
            <div className="buttonsContainerPage2">
              <div>
                <button className="configureProductButton" type="button" onClick={handlebackwardPageView}>
                  {" "}
                  <LuMoveLeft className="leftArrow" />
                  Configure <br className="configureBreak" />
                  The Product
                </button>
                <p className="plateFinishText">Choose Plate Finish</p>
              </div>

              <div className="buttonsWrap">
                <button
                  className={`${
                    isHorizontalActice ? "directionButton" : "inActiveButton"
                  }`}
                  onClick={onToggleHorizontal}
                  type="button"
                >
                  Horizontal
                </button>
                <button
                  className={`${
                    isVerticalActive ? "directionButton" : "inActiveButton"
                  }`}
                  onClick={onToggleVertical}
                  type="button"
                >
                  Vertical
                </button>
              </div>

              <div className="sideSectionBottom">
                <p className="plateFinishText">Family Name</p>
                <p className="plateName">{plateName}</p>
              </div>
            </div>

            <div className="plateImageContainer">
              <p className="plateImageHeading">Your Plate Finish</p>
              <img
                className="previewImage"
                src={activeFamily.preview}
                alt="Preview"
              />
                <div className="plateImageFooter">
                <p className="plateFinishText">Configuration</p>
                <p className="plateInfoText">{plateName} > {isHorizontalActice ? 'Horizontal' : isVerticalActive ? 'Vertical' : ''}</p>
              </div>
            </div>
          </div>
        );
      case "PAGE_3":
        return (
          <div className="page2Container">
            <div>
              <div className="configureButtonContainer">
                <button className="configureButtonText" type="button" onClick={handlebackwardPageView}>
                  Configure <br />
                  The Product
                </button>
                <div className="dash">______________</div>
              </div>
              <p className="selectTheFamily">Select Your Family</p>

              <div className="demo-container">
                    <WheelPicker
                        animation="flat"
                        data={data}
                        height={100}
                        parentHeight={250}
                        fontSize={50}
                        defaultSelection={defaultSelection}
                        updateSelection={updateSelection}
                        scrollerId="scroll-select-subject"
                    />
                </div>
              <p className="plateImageHeading2">YourLayout</p>
              <div className="plateImageFooter2">
                <p className="plateFinishText">Configuration</p>
                <p className="plateInfoText">{plateName} > {isHorizontalActice ? 'Horizontal' : isVerticalActive ? 'Vertical' : ''} > {selection}</p>
              </div>
            </div>
            <img className="previewImage2" src={imageSrc} alt="layout" />
          </div>
          
        );
      case "PAGE_4":
        return (
          <div className="pageViewContainer">
            <div className="buttonsContainer">
              <button className="configureProductButton" type="button" onClick={handlebackwardPageView}>
                {" "}
                <LuMoveLeft className="leftArrow" />
                Configure <br className="configureBreak" />
                The Product
              </button>
              <p className="plateFinishText">Choose Plate Finish</p>
              <button
                className={`${isNormalActive ? "directionButton" : "inActiveButton"}`}
                onClick={onToggleNormal}
                type="button"
              >
                Normal
              </button>
              <button
                className={`${isBluntActive ? "directionButton" : "inActiveButton"}`}
                onClick={onToggleBlunt}
                type="button"
              >
                Blunt
              </button>

              <div className="sideSectionBottom">
                <p className="plateFinishText">Family Name</p>
                <p className="plateName">{plateName}</p>
              </div>
            </div>

            <div className="plateImageContainer">
              <p className="plateImageHeading">Your Frame Color</p>
              {/* <img className="previewImage" src={onePlustwo} alt="pageView" /> */}
              <img
              className="previewImage"
              src={imageSrc}
              alt="pageView"
              />
              <div className="plateImageFooter">
                <p className="plateFinishText">Configuration</p>
                <p className="plateInfoText">{plateName} > {isHorizontalActice ? 'Horizontal' : isVerticalActive ? 'Vertical' : ''} > {selection}
                > {isNormalActive? 'Normal' : isBluntActive ? 'Blunt' : ''}</p>
              </div>
            </div>
          </div>
        );
      case "PAGE_5":
        return (
          <div className="pageViewContainer">
            <div className="buttonsContainer">
              <button className="configureProductButton" type="button" onClick={handlebackwardPageView}>
                {" "}
                <LuMoveLeft className="leftArrow" />
                Configure <br className="configureBreak" />
                The Product
              </button>
              <p className="plateFinishText">Choose Plate Finish</p>

              <div className="optionItem activeOption" onClick={handleAnodizedClick}>
                <p>Anodized Base</p>
                <FaAngleRight />
              </div>
              <div className="optionItem inActiveOption">
                <p>Special Anodized</p>
                <FaAngleRight />
              </div>
              <div className="optionItem inActiveOption">
                <p>Galvanic</p>
                <FaAngleRight />
              </div>
              <div className="optionItem activeOption" onClick={handleArtClick}>
                <p>Art</p>
                <FaAngleRight />
              </div>

              <div className="sideSectionBottom">
                <p className="plateFinishText">Family Name</p>
                <p className="plateName">{plateName}</p>
              </div>
            </div>

            <div className="plateImageContainer">
              <p className="plateImageHeading">Your Model</p>
              <img className="previewImage" src={onePlustwo} alt="pageView" />
              <div className="plateImageFooter">
                <p className="plateFinishText">Configuration</p>
                <p className="plateInfoText">{plateName} > {isHorizontalActice ? 'Horizontal' : isVerticalActive ? 'Vertical' : ''} > {selection}
                > {isNormalActive? 'Normal' : isBluntActive ? 'Blunt' : ''} > {colorTypeText}</p>
              </div>
            </div>
          </div>
        );
      case "PAGE_6.1":
          return (
            <div className="pageViewContainer">
              <div className="buttonsContainer">
                <button className="configureProductButton" type="button" onClick={handlebackwardPageView}>
                  {" "}
                  <LuMoveLeft className="leftArrow" />
                  Configure <br className="configureBreak" />
                  The Product
                </button>
                <p className="plateFinishText">Select Your Model</p>
  
                <div className="tabsContainer">
                  <div>
                    <div className="colorsContainer">
                      <img className="mattImage" src={matt2} alt="matt" onClick={handleAZClick}/>
                    </div>
                  </div>

                  {/* Removed the arrows */}
                  {/* <div className="arrowsContainer">
                    <IoIosArrowUp />
                    <IoIosArrowDown />
                  </div> */}
                  
                </div>
  
                <div className="sideSectionBottom">
                  <p className="plateFinishText">Family Name</p>
                  <p className="plateName">{plateName}</p>
                </div>
              </div>
  
              <div className="plateImageContainer">
                <p className="plateImageHeading">Your Model Finish</p>
                <img
                  className="previewImage"
                  src={imageSrc}
                  alt="pageView"
                />
                <div className="plateImageFooter">
                  <p className="plateFinishText">Configuration</p>
                  <p className="plateInfoText">{plateName} > {isHorizontalActice ? 'Horizontal' : isVerticalActive ? 'Vertical' : ''} > {selection}
                > {isNormalActive? 'Normal' : isBluntActive ? 'Blunt' : ''} > {colorTypeText} > {colorText}</p>
                </div>
              </div>
            </div>
          );
      case "PAGE_6.2":
            return (
              <div className="pageViewContainer">
                <div className="buttonsContainer">
                  <button className="configureProductButton" type="button" onClick={handlebackwardPageView}>
                    {" "}
                    <LuMoveLeft className="leftArrow" />
                    Configure <br className="configureBreak" />
                    The Product
                  </button>
                  <p className="plateFinishText">Select Your Model</p>
    
                  <div className="tabsContainer">
                    <div>
                      <div className="colorsContainer">
                        <img
                          className="mattImage"
                          src={matt1}
                          alt="matt"
                          onClick={handleMattImageClick}
                        />
                        <img className="mattImage" src={matt3} alt="matt" onClick={handleMattImageClick2} />
                      </div>
                    </div>
                    <div className="arrowsContainer">
                      <IoIosArrowUp />
                      <IoIosArrowDown />
                    </div>
                  </div>
    
                  <div className="sideSectionBottom">
                    <p className="plateFinishText">Family Name</p>
                    <p className="plateName">KPlate</p>
                  </div>
                </div>
    
                <div className="plateImageContainer">
                  <p className="plateImageHeading">Your Model Finish</p>
                  <img
                    className="previewImage"
                    src={activeFamily.preview}
                    alt="pageView"
                  />
                  <div className="plateImageFooter">
                    <p className="plateFinishText">Configuration</p>
                    <p className="plateInfoText">KPlate>1+2>Normal>Anodized</p>
                  </div>
                </div>
              </div>
            );
      case "PAGE_7":
        return (
          <div className="pageViewContainer">
            <div className="buttonsContainer">
              <button className="configureProductButton" type="button" onClick={handlebackwardPageView}>
                {" "}
                <LuMoveLeft className="leftArrow" />
                Configure <br className="configureBreak" />
                The Product
              </button>
              <p className="plateFinishText">Custom Logo</p>

              <div className="">
                <p className="cardHeading">
                  Write here the personalized logo that will be silk-screened on
                  the plate
                </p>
                <div className="cardButtonsContainer">
                  <input
                    placeholder="Alphaplate"
                    className="plateAddInput"
                    type="text" input type="text" value={displayText}
                    onChange={handleChange}
                  />
                  <button className="addPlateButton" type="button" onClick={handleSubmit}>
                    Add
                  </button>
                  <button className="skipButton">Skip</button>
                </div>
              </div>

              <div className="sideSectionBottom">
                <p className="plateFinishText">Family Name</p>
                <p className="plateName">{plateName}</p>
              </div>
            </div>

            <div className="plateImageContainer">
              <p className="plateImageHeading">Add Your Custome Name Logo</p>
              <img className="previewImage" src={imageSrc} alt="pageView" />
               <p style={{ position: 'absolute', top: '75%', left: '60%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '24px' }}>{text}  </p>
              <div className="plateImageFooter">
                <p className="plateFinishText">Configuration</p>
                <p className="plateInfoText">{plateName} > {isHorizontalActice ? 'Horizontal' : isVerticalActive ? 'Vertical' : ''} > {selection}
                > {isNormalActive? 'Normal' : isBluntActive ? 'Blunt' : ''} > {colorTypeText} > {colorText} > {text}</p>
              </div>
            </div>
          </div>
        );
      case "PAGE_8":
        return (
          <div className="pageViewContainer">
            <div className="buttonsContainer">
              <button className="configureProductButton" type="button" onClick={handlebackwardPageView}>
                {" "}
                <LuMoveLeft className="leftArrow" />
                Configure <br className="configureBreak" />
                The Product
              </button>

              <div className="colorPickerCardContainer">
                <p className="iconsAndSymbols">Icons/Symbols</p>
                <div className="yesNoButtons">
                  <button className="yesButton" type="button">
                    Yes
                  </button>
                  <button className="noButton" type="button">
                    No
                  </button>
                </div>
              </div>

              <div className="colorPickerCardContainer colorPickerContainer">
                <p>LED Color</p>
                <input className="colorPicker" type="color" />
                <p>Choose the color here</p>
              </div>

              <button className="colorSubmitButton" type="button">
                Submit
              </button>

              <div className="sideSectionBottom">
                <p className="plateFinishText">Family Name</p>
                <p className="plateName">{plateName}</p>
              </div>
            </div>

            <div className="plateImageContainer">
              <img className="previewImage" src={imageSrc} alt="pageView" />
              <div className="plateImageFooter">
                <p className="plateFinishText">Configuration</p>
                <p className="plateInfoText">{plateName} > {isHorizontalActice ? 'Horizontal' : isVerticalActive ? 'Vertical' : ''} > {selection}
                > {isNormalActive? 'Normal' : isBluntActive ? 'Blunt' : ''} > {colorTypeText} > {colorText} > {text}</p>
              </div>
            </div>
          </div>
        );
      case "PAGE_9":
        return (
          <div className="pageViewContainer">
            <div className="page9SideContainer">
              <button className="configureProductButton" type="button" onClick={handlebackwardPageView}>
                <LuMoveLeft className="leftArrow" />
                Configure <br className="configureBreak" />
                The Product
              </button>

              <div className="credentialsInputContainer">
                <input className="credentialsInput" placeholder="Your Name" />
                <input className="credentialsInput" placeholder="Email Id" />
              </div>

              <div>
                <p className="phoneNumber">Phone no</p>
                <div className="phoneNumberInputContainer">
                  <p>
                    +91 <IoIosArrowDown />{" "}
                    <input className="credentialsInput" placeholder="Phone No." />
                  </p>
                  {/* <span className="phoneNumberDash">
                    _______________________
                  </span> */}
                </div>
              </div>

              <button className="colorSubmitButton" type="button" onClick={handlePageView}>
                Submit
              </button>

              <div className="sideSectionBottom">
                <p className="plateFinishText">Family Name</p>
                <p className="plateName">{plateName}</p>
              </div>
            </div>

            <div className="plateImageContainerPage9">
              <img className="previewImage" src={imageSrc} alt="pageView" />
              <div className="plateImageFooter">
                <p className="plateFinishText">Configuration</p>
                <p className="plateInfoText">{plateName} > {isHorizontalActice ? 'Horizontal' : isVerticalActive ? 'Vertical' : ''} > {selection}
                > {isNormalActive? 'Normal' : isBluntActive ? 'Blunt' : ''} > {colorTypeText} > {colorText} > {text}</p>
              </div>
            </div>
          </div>
        );
      case "PAGE_10":
        return (
          <div className="thankyouContainer">
            <h1 className="thankyouHeading">
              Thankyou
              <br />
              for Configuring
            </h1>
            <p className="thankyouSubheading">
              Our Team will get back to your shortly
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  const handlePageView = () => {
    console.log("next clicked");
    if (pageView === "PAGE_1") {
      setPageView("PAGE_2");
    } else if (pageView === "PAGE_2") {
      setPageView("PAGE_3");
    } else if (pageView === "PAGE_3") {
      setPageView("PAGE_4");
    } else if (pageView === "PAGE_4") {
      setPageView("PAGE_5");
    } else if (pageView === "PAGE_5") {
      setPageView("PAGE_6");
    } else if (pageView === "PAGE_6") {
      setPageView("PAGE_6.1");
    }
      else if (pageView === "PAGE_6") {
      setPageView("PAGE_6.2");
    }
     else if (pageView === "PAGE_6.1" || pageView === "PAGE_6.2") {
      setPageView("PAGE_7");
    }
    else if (pageView === "PAGE_7") {
      setPageView("PAGE_8");
    } else if (pageView === "PAGE_8") {
      setPageView("PAGE_9");
    } else if (pageView === "PAGE_9") {
      setPageView("PAGE_10");
    }
  };

  const handlebackwardPageView = () => {
    if (pageView === "PAGE_10") {
      setPageView("PAGE_9");
    } else if (pageView === "PAGE_9") {
      setPageView("PAGE_8");
    } else if (pageView === "PAGE_8") {
      setPageView("PAGE_7");
    } else if (pageView === "PAGE_7" && colorTypeText === 'Anodized') {
      setPageView("PAGE_6.1");
    } else if (pageView === "PAGE_7" && colorTypeText === 'Art') {
      setPageView("PAGE_6.2");
    } else if (pageView === "PAGE_6.1" || pageView === "PAGE_6.2") {
      setPageView("PAGE_5");
    }
    else if (pageView === "PAGE_6") {
      setPageView("PAGE_5");
    }
     else if (pageView === "PAGE_5") {
      setPageView("PAGE_4");
    }
    else if (pageView === "PAGE_4") {
      setPageView("PAGE_3");
    } else if (pageView === "PAGE_3") {
      setPageView("PAGE_2");
    } else if (pageView === "PAGE_2") {
      setPageView("PAGE_1");
    }
  };

  return (
    <div className="App">
      <img src={Logo} alt="App Logo" />
      {renderPageView()}

      <div className="nextButtonContainer">
        <button className="nextButton" type="button" onClick={handlePageView}>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default App;
