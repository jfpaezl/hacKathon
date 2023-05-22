import { styled } from "styled-components";
import { Close } from "../styles/Iconos";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <ModalCss>
        <div className="modal-content">
            <div className="contentClose">
                <Close onClick={onClose} className="close"/>
            </div>
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
        .contentClose{
            width: 100%;
            display: flex;
            justify-content: end;
        }
        .close{
            color: var(--textButtons);
            width: 3rem;
            height: 3rem;
            &:hover{
                cursor: pointer;

            }
        }
    }

`