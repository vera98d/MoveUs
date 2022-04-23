import { useContext } from "react";
import { ModalContext } from "../../context/ModalContextProvider/index";
import { ModalOverlay, CloseButton, StyledModal, ModalContent } from "./style";

function Modal() {
  const modalContext = useContext(ModalContext);
  if (!modalContext.displayedComponent) {
    return null;
  }

  return (
    <>
      <ModalOverlay
        onClick={() => {
          modalContext.setDisplayedComponent(null);
        }}
      />
      <StyledModal>
        <CloseButton onClick={() => {
          modalContext.setDisplayedComponent(null);
        }}
        >
          <img alt="close button" src="assets/close_button.svg" />
        </CloseButton>
        <ModalContent>

          {modalContext.displayedComponent}
        </ModalContent>
      </StyledModal>
    </>
  );
}

export default Modal;
