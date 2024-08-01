import React from "react";
import "./modal.scss";
import OutsideClickHandler from "react-outside-click-handler";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

export function Model(props) {
  const { scene } = useGLTF(props.element);
  return <primitive object={scene} {...props} />;
}

const Modal = ({ handleClose, show, element, title, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <OutsideClickHandler
        onOutsideClick={() => {
          show && handleClose();
        }}
      >
        <section className="modal-main">
          <div className="theHeader">
            <button className="close-button" onClick={handleClose}>
              {" "}
              X
            </button>
            <h2>{title}</h2>
          </div>
          <div className="theFooter">
            {children ? (
              children
            ) : (
              <>
                <div className="modalDescription">
                  <p>Symbol: {element.symbol}</p>
                  <p>Atomic Number: {element.number}</p>
                  <p>Atomic Mass: {element.atomic_mass}</p>
                  <p>Density: {element.density}</p>
                  <p>Discovered by: {element.discovered_by}</p>
                  <p>Electron Affinity: {element.electron_affinity}</p>
                  <p>Electronegativity: {element.electronegativity_pauling}</p>
                  <p>
                    Electron Configuration:{" "}
                    {element.electron_configuration_semantic}
                  </p>
                  <p>Family: {element.category}</p>
                  <p>Ionization Energy: {element.ionization_energies[0]}</p>
                </div>
                <Canvas dpr={(1, 4)} shadows camera={{ fov: 45 }}>
                  <color attatch="background" agrs={["#101010"]} />
                  <PresentationControls
                    speed={1.5}
                    global
                    zoom={0.5}
                    polar={[-0.1, Math.PI / 4]}
                  >
                    <Stage environment={null}>
                      <Model element={element.bohr_model_3d} scale={0.01} />
                    </Stage>
                  </PresentationControls>
                </Canvas>
              </>
            )}
          </div>
        </section>
      </OutsideClickHandler>
      <div className="grayBackground"></div>
    </div>
  );
};

export default Modal;
