import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

     return (
        <div>
            <Button primay>Open Model</Button>
            <Modal />
        </div>
     )
}

export default ModalPage;
