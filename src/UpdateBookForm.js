import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

class UpdateBookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.
      _id: this.props.book?._id,
      title: this.props.book?.title,
      description: this.props.book?.description,
      status: this.props.book?.status,
      email: this.props.book?.email,
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onUpdate(this.state);
    this.props.onClose();
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  handleStatusChange = event => {
    this.setState({ status: event.target.value });
  };

  // handleEmailChange = event => {
  //   this.setState({ email: event.target.checked });
  // };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update a Book</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={this.handleSubmit} className="p-4">
            <Form.Label>
              <h2>
                Update a Book
              </h2>
            </Form.Label>
            <Form.Group className="mb-3">
              <Form.Label>Book Title</Form.Label>
              <Form.Control type="text" placeholder="Book Title" onChange={this.handleTitleChange} value={this.state.title} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Book Description</Form.Label>
              <Form.Control type="text" placeholder="Book Description" onChange={this.handleDescriptionChange} value={this.state.description} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" label="Status" onChange={this.handleStatusChange} value={this.state.status} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>

            {/* <Form.Group className="mb-3">
              <Form.Check type="text" label="Email" onChange={this.handleEmailChange} checked={this.state.email} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button> */}

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default UpdateBookForm;