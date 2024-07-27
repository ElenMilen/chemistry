import React, { useState } from "react";
import "./periodicTable.scss"; // Import CSS file for styling
import Modal from "../modal/Modal"; // Import the Modal component
import PeriodicTableJSON from "../../PeriodicTableJSON.json";
import periodic from "../../images/periodicTable.gif";

const PeriodicTable = () => {
  const [selectedElement, setSelectedElement] = useState(
    PeriodicTableJSON.elements[0]
  );
  const [showModal, setShowModal] = useState(false);
  const [showIntroModal, setShowIntroModal] = useState(true);

  const handleElementClick = (element) => {
    setSelectedElement(element);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowIntroModal(false);
  };

  return (
      <>
          <div className="filterBox">
                <div className="filterCenter">
                    <div className="alkalineMetals"></div>
                </div>
          </div>
          <div className="periodic-table">
              {PeriodicTableJSON.elements.map((element) => (
                  <div
                      style={{backgroundColor: element.color}}
                      key={element.id}
                      className={`element element-${element.number}`}
                      onClick={() => handleElementClick(element)}
                  >
                      <div className="element-symbol">{element.symbol}</div>
                      <div className="element-name">{element.name}</div>
                  </div>
              ))}
              <Modal
                  show={showModal}
                  handleClose={handleCloseModal}
                  element={selectedElement}
                  title={selectedElement.name}
              />
              <Modal
                  show={showIntroModal}
                  handleClose={handleCloseModal}
                  element={selectedElement}
                  title={'How To Use:'}
              >
                  <div className="theGif">
                      <span> Press on an element to see it's interactable model and other key details. </span>
                      <img src={periodic} alt="gif" width="100%"
                      />
                  </div>
              </Modal>
          </div>
      </>

  );
};

export default PeriodicTable;
