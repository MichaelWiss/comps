import * as ReactDOM from 'react-dom';

function Modal() {
    return ReactDOM.createPortal(
        <div>
            <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
            <div className="absolute inset-40 p-10 bg-white">Here's the MODAL!</div>
           
       </div>,
        document.querySelector('.modal-container')
    );
}

export default Modal;