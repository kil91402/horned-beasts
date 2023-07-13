import React from 'react';
import Modal from 'react-bootstrap/Modal'

return (
    <Container>
        <h2>Gallery of Horns:</h2>
        return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch modal
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Gallery of Horns</Modal.Title>
                </Modal.Header>
                <Modal.Body><h2>{this.props.title}</h2>
                    <img src={this.props.imgLink} />
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
        );
    </Container>
)