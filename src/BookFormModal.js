import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class BookFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      status: 'Inspirational',
    }
  }

  handleClose = () => {
    this.props.close();
  }

  createBook = async () => {

    const config = {
      method: 'post',
      baseURL: process.env.REACT_APP_SERVER,
      url: '/books/',
      data: {
        email: this.props.user.email,
        name: this.state.name,
        description: this.state.description,
        status: this.state.status,
      }
    }

    const bookResults = await axios(config);
    this.props.close();
    this.props.getBooks(bookResults.data);

  };


  render() {
    return (
      <Modal show={this.props.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Favorite Book</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Book Name</Form.Label>
            <Form.Control onChange={(e) => this.setState({ name: e.target.value })} type="text" placeholder="book name" />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Book description</Form.Label>
            <Form.Control onChange={(e) => this.setState({ description: e.target.value })} type="text" placeholder="book description" />
          </Form.Group>

          <Form.Group controlId="genre">
            <Form.Label>Status</Form.Label>
            <Form.Control defaultValue='' onChange={(e) => this.setState({ genre: e.target.value })} as="select">
              <option></option>
              <option value="Inspirational">Inspirational</option>
              <option value="Good-Book">Good Book</option>
              <option value="Get-This-Book">Get This Book!</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.createBook}>
            Save Book
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default BookFormModal;