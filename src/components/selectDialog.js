import * as React from 'react';
import ReactModal from 'react-modal';
// import Select from './Select';
import PlusBtn from './PlusBtn';
import DivisionBtn from './DivisionBtn';
import InputNumber from './InputNumber';
import NumCard from './NumCard';
import './selectDialog.css';

ReactModal.setAppElement("#root");
const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.85)"
  },
  content: {
    position: "absolute",
    top: "5rem",
    left: "15rem",
    right: "15rem",
    bottom: "10rem",
    backgroundColor: "rgba(25,25,25)",
    borderRadius: "0rem",
    padding: "1.5rem",
    margin:"auto",
  }
};

export default function SelectDialog({calculator,actions}) {
      return (
      <div>
        <ReactModal isOpen={calculator.modalIsOpen} onRequestClose={actions.onModalClose} style={modalStyle}>
          <div className='selectdialog-main'>
            <div className='selectdialog-inner'>
              <div>
                <NumCard n={calculator.inputValue} onClick={() =>{}} result={0}/>
              </div>
              <div>
                {calculator.enableInput && (
                  <InputNumber onClick={actions.onInputNumClick} />
                )}
              </div>
              <div>
                {calculator.enablePlus && (
                  <PlusBtn onClick={actions.onPlusClick} />
                )}
                {calculator.enableDivision && (
                  <DivisionBtn onClick={actions.onDivisionClick} visible={calculator.enableDivision}/>
                )}
              </div>
            </div>
          </div>            
        </ReactModal>
      </div>
    );
  }