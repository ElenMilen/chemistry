/*
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
  const [legend, setLegend] = useState('all');

  const handleElementClick = (element) => {
    setSelectedElement(element);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowIntroModal(false);
  };

  const handleSetLegend = (category) => {
    setLegend(category);
  }

  return (
      <>
          <div className="filterBox">
                <div className="filterCenter">
                    <div className="diatomicNonmetals" onClick={()=>handleSetLegend('diatomic nonmetal')}>Diatomic Nonmetals</div>
                    <div className="alkalineMetals" onClick={()=>handleSetLegend('alkali metal')}>Alkaline Metals</div>
                    <div className="alkalineEarthMetals" onClick={()=>handleSetLegend('alkaline earth metal')}>Alkaline Earth Metals</div>
                    <div className="transitionMetals" onClick={()=>handleSetLegend('transition metal')}>Transition Metals </div>
                    <div className="metalloid" onClick={()=>handleSetLegend('metalloid')}>Metalloids </div>
                    <div className="nobleGases" onClick={()=>handleSetLegend('noble gas')}>Noble Gases</div>
                    <div className="lanthanides" onClick={()=>handleSetLegend('lanthanide')}>Lanthanides</div>
                </div>
          </div>
          <div className="periodic-table">
              {PeriodicTableJSON.elements.map((element) => (
                  <div
                      style={{backgroundColor: legend === 'all' || element.category === legend ? element.color : 'lightgray'}}
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
*/
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
  const [activeCategory, setActiveCategory] = useState('all'); // Track active category

  const handleElementClick = (element) => {
    setSelectedElement(element);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowIntroModal(false);
  };

  const handleSetLegend = (category) => {
    // Toggle the category; if it's already active, reset to 'all'
    setActiveCategory(prevCategory => prevCategory === category ? 'all' : category);
  };

  // Array for menu items
  const menuItems = [
    { category: 'diatomic nonmetal', displayName: 'Diatomic Nonmetals', bgColor: 'rgb(30, 94, 94)' },
    { category: 'alkali metal', displayName: 'Alkaline Metals', bgColor: 'rgb(68, 169, 169)' },
    { category: 'alkaline earth metal', displayName: 'Alkaline Earth Metals' , bgColor: 'rgb(94, 189, 189)'},
    { category: 'transition metal', displayName: 'Transition Metals' , bgColor: 'rgb(139, 231, 231)'},
    { category: 'metalloid', displayName: 'Metalloids' , bgColor: 'rgb(48, 138, 138)'},
    { category: 'noble gas', displayName: 'Noble Gases' , bgColor: 'rgb(30, 94, 94)'},
    { category: 'lanthanide', displayName: 'Lanthanides',  bgColor: 'rgb(139, 231, 231)' },
  ];

  return (
    <>
      <div className="filterBox">
        <div className="filterCenter">
          {menuItems.map((item) => (
            <div
              key={item.category}
              style={{backgroundColor: item.bgColor}}
              className={`filter-item ${activeCategory === item.category ? 'active' : ''}`}
              onClick={() => handleSetLegend(item.category)}
            >
              {item.displayName}
            </div>
          ))}
        </div>
      </div>
      <div className="periodic-table-cover">
        <div className="periodic-table">
          {PeriodicTableJSON.elements.map((element) => (
            <div
              style={{ backgroundColor: activeCategory === 'all' || element.category === activeCategory ? element.color : 'lightgray' }}
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
              <span> Press on an element to see its interactable model and other key details. </span>
              <img src={periodic} alt="gif" width="100%" />
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default PeriodicTable;

