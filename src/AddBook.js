import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookFormModal from './BookFormModal';

export default class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  addBook = () => {
    this.setState({ show: true });
  }

  onClose = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <>

        <Button onClick={this.addBook}>Add a Book to the Collection!</Button>
        <BookFormModal
          user={this.props.user}
          close={this.onClose}
          getBooks={this.props.getBooks}
          show={this.state.show}
        />
        
      </>
    )
  }
}