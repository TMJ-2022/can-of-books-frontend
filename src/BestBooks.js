import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import AddBook from './AddBook';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateBookForm from './UpdateBookForm';

const SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showUpdate: false,
      selectedBook: {},
    }
  }



  componentDidMount() {

    if (this.props.auth0.isAuthenticated) {

      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;

      console.log("jwt: ", jwt);

      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/books'
      }

      const booksResponse = await axios(config);
      console.log(booksResponse.data);

      this.setState({ books: booksResponse.data });
    }
  }


  getBooks = async (email = null) => {
    let apiUrl = `${SERVER}/books`;

    if (email) {
      apiUrl += `?email=${email}`;
    }

    try {
      const response = await axios.get(apiUrl);
      if (response.data !== null) {
        this.setState({ books: response.data });
      }
    } catch (error) {
      console.log(error);
    }
    console.log("Book state", this.state.books);
  }

  removeBook = (book) => {
    console.log('book', book);
    const id = book._id;
    let createdBooks = this.state.books;
    createdBooks = this.state.books.filter(b => b._id !== id);
    this.setState({ books: createdBooks });

    const config = {
      params: { email: this.props.user.email },
      method: 'delete',
      baseURL: process.env.REACT_APP_SERVER,
      url: `/books/${id}`
    }
    axios(config);
  }

  handleShowUpdateModal = (book) => {
    this.setState({
      showUpdate: true,
      selectedBook: book,
    })
  }

  onClose = () => {
    this.setState({
      showUpdate: false,
      selectedBook: {},
    })
  }

  // updateBook = () => {
  handleUpdateBook = async bookToBeUpdated => {
    try {
      await axios.put(`${SERVER}/books/${bookToBeUpdated._id}?email=${this.props.user.email}`, bookToBeUpdated);

      const updatedBooks = this.state.books.map(existingBook => {
        if (existingBook._id === bookToBeUpdated._id) {
          return bookToBeUpdated;
        } else {
          return existingBook;
        }
      });

      this.setState({
        books: updatedBooks
      })
    } catch (error) {
      console.error(error);
    }
  }
  
  render() {
    console.log(this.state);
    return (
      <>

        <AddBook user={this.props.user} getBooks={this.getBooks} />

        {this.state.books.length ? (
          <Carousel >
            {this.state.books.map((book,idx) => (
            <Carousel.Item key={idx}>
              <img style={{marginTop: "50px"}} src="https://via.placeholder.com/350" alt="place-holder" />
            <Carousel.Caption>
              <h2 style={{color: "#561D5E"}}>{book.title}</h2>
              <p style={{color: "#561D5E"}}>{book.description}</p>
              <p style={{color: "#561D5E"}}>{book.status}</p>
              <Button id='remove' onClick={() => this.removeBook(book)}>REMOVE</Button>
              <Button id='update' onClick={() => this.handleShowUpdateModal(book)}>UPDATE</Button>
            </Carousel.Caption>
            </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found 🙁</h3>
        )}
      {/* </>
    <> */}
      {this.state.showUpdate && (
      <UpdateBookForm book={this.state.selectedBook} onUpdate={this.handleUpdateBook} onClose={this.onClose} show={this.state.showUpdate} />)}
    </>
    )
  }
}

export default withAuth0(BestBooks);
