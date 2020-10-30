import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

const Portal = ({ children }) => {  
 const modalRoot = document.getElementById("modal");
 const el = document.createElement("div");
  
 useEffect(() => {    
  modalRoot.appendChild(el);  
 }, []);   
 useEffect(() => {    
  return () => modalRoot.removeChild(el); 
 });   
return createPortal(children, el);
};

export const Modal = ({ children, toggle, open }) => (  
 <Portal>    
  {open &&      
   <ModalWrapper>       
    <ModalCard>          
      <ModalHeader>
        <FontAwesomeIcon className='close' icon={faWindowClose} onClick={toggle} />
      </ModalHeader>
      {children}
    </ModalCard>
    <Background onClick={toggle} />      
   </ModalWrapper>    
  }  
 </Portal>
); 
export default Modal; 
 

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

const ModalHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  margin: ${props => props.theme.spacing['s-4']};
`

const ModalCard = styled.div`
  position: relative;
  min-width: 320px;
  max-width: 60%;
  max-height: 90vh;
  overflow: scroll;
  z-index: 10;
  background: white;
  border-radius: 5px;
  padding: 15px;
  box-shadow: ${props => props.theme.shadow['shadow-xl']};
`; 
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.25);
`;