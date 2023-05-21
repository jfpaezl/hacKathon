import { styled } from "styled-components";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <ModalCss>
        <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            {children}
        </div>
      </ModalCss>
    );
  };
  
export default Modal;

export const ModalCss = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    

    .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        max-width: 80rem;
        width: 100%;
        max-height: 70%;
        height: 100%;
        overflow: auto;
        scrollbar-width: thin; /* Ancho del scrollbar */
        scrollbar-color: #888888 #dddddd; /* Color del thumb y track */

        &::-webkit-scrollbar {
            width: 8px; /* Ancho del scrollbar */
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--textButtons); /* Color del thumb */
            border-radius: 4px; /* Borde redondeado del thumb */
        }

        &::-webkit-scrollbar-track {
            background-color: var(--hoberButtons); /* Color del track */
            border-radius: 4px; /* Borde redondeado del track */
        }
    }

`