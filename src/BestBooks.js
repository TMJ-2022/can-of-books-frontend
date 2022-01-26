import React from 'react';
import axios from 'axios';
import AddBook from './AddBook';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const  SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }



  componentDidMount() {
    this.getBooks();
  }


  getBooks = async (email = null) => {
   let apiUrl = `${SERVER}/books`; 

   if(email) {
     apiUrl += `?email=${email}`;
   }

    try {
      const response = await axios.get(apiUrl);
      if(response.data !== null){
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
  

  render() {
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
              <Button onClick={() => this.removeBook(book)}>REMOVE</Button>
            </Carousel.Caption>
            </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found 🙁</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
