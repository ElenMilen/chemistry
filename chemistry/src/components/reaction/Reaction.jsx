import './reaction.scss';
import React, { useEffect, useState } from "react";
import "../periodicTable/periodicTable.scss"; // Import CSS file for styling
import Modal from "../modal/Modal"; // Import the Modal component
import PeriodicTableJSON from "../../PeriodicTableJSON.json";
import reaction from "../../images/reaction.gif";

const Reaction = () => {
  const [selectedElement, setSelectedElement] = useState(
    PeriodicTableJSON.elements[0]
  );
  const [showModal, setShowModal] = useState(false);

  const handleElementClick = (element) => {
    setSelectedElement(element);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };
  
  useEffect(() => {
    setShowModal(true);
  },[]);
  
  return (
    <div className="periodic-table">
      {PeriodicTableJSON.elements.map((element) => (
  <div 
    key={element.number}
    style={{
      backgroundColor: (
        selectedElement.name === element.name ||
        (selectedElement.connection && selectedElement.connection.includes(element.name))
      ) ? element.color : 'lightgray'
    }}
    className={`element element-${element.number} ${selectedElement.name === element.name ? 'selectedItem' : ''}`}
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
        title={'How To Use:'}
      >
        <div className="theGif">
          <span> Press on an element to view its reactivity with other elements. If an element is grey, that means it does not react with the element selected.  </span>
          <img src={reaction} alt="gif" />
        </div>
      </Modal>
    </div>
  );
};

export default Reaction;

