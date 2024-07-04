import React, { useState } from "react";
import "./periodicTable.scss"; // Import CSS file for styling
import Modal from "../modal/Modal"; // Import the Modal component
import PeriodicTableJSON from "../../PeriodicTableJSON.json";

const PeriodicTable = () => {
  const [selectedElement, setSelectedElement] = useState(
    PeriodicTableJSON.elements[0]
  );
  const [showModal, setShowModal] = useState(false);

  const handleElementClick = (element) => {
    setSelectedElement(element);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="periodic-table">
      {PeriodicTableJSON.elements.map((element) => (
        <div
          style={{ backgroundColor: element.color }}
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
    </div>
  );
};

export default PeriodicTable;
