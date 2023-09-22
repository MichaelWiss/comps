import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const modal = <Modal onClose={handleClose} />;

     return (
        <div>
            <Button onClick={handleClick} primary>Open Model</Button>
            {showModal && modal}
        </div>
     )
}

export default ModalPage;
