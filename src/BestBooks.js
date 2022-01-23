import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

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

  // bookListData = axios.get('https://can-of-books-301n24.herokuapp.com/');
  // let bookListData = axios.get('http://localhost:3001');

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

  

  render() {
    return (
      <>
        {this.state.books.length ? (
          <Carousel >
            {this.state.books.map((book,idx) => (
            <Carousel.Item key={idx}>
              <img src="https://via.placeholder.com/150" alt="place-holder" />
            <Carousel.Caption>
              <h2 style={{color: "#561D5E"}}>{book.title}</h2>
              <p style={{color: "#561D5E"}}>{book.description}</p>
              <p style={{color: "#561D5E"}}>{book.status}</p>
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
