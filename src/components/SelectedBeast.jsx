import React from 'react';
import Main from './Main'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import data from './data.json'


class SelectedBeast extends React.Component {


    render() {
        const { beast, show, handleShow, handleClose } = this.props;
        return (
            <Container>
                <h2>Gallery of Horns:</h2>
                <>
                    <Button variant="primary" onClick={handleShow}>
                        Launch modal
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Gallery of Horns</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <img src={data.imgLink} alt={data.title} />
                                <p>{data.description}</p>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>


            </Container>
        )
    };
}

export default SelectedBeast