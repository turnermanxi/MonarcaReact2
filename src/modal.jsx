import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalS = ({ isOpen, onClose }) => {
    return (
        <Modal className="custom-modal" show={isOpen} onHide={onClose} centered>
            <Modal.Body className="modal-body">
                <Form>
                <Modal.Header closeButton>
                <Modal.Title>Get Quote</Modal.Title>
            </Modal.Header>
                    <Form.Group controlId="formName" className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Enter your name' required />
                    </Form.Group>
                    <Form.Group controlId='formEmail' className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='Enter your email' required />
                    </Form.Group>
                    <Form.Group controlId="formMessage" className='mb-3'>
                        <Form.Label>How can we help?</Form.Label>
                        <Form.Control as='textarea' rows={3} required />
                    </Form.Group>
                    <Button className="button-submit" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default ModalS;
