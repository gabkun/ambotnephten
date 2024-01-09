import React from 'react';
import './modal.css';

const Trymodal = props => {
     if (!props.show){
        return null
    }
  return (
    <div className='modal'>
        <div className='modal-content'>
            <div className='modalheader'>
                <h1>MODAL TITLE</h1>
            </div>
            <div className='modal-body'>
                THIS IS MODAL CONTENT
            </div>
            <div className='modal-footer'>
            <button onClick={props.onClose}className='button'>CLOSE</button>
            </div>
        </div>
    </div>
  )
}
export default Trymodal;