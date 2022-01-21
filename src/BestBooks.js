import React from 'react';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  // bookListData = axios.get('https://can-of-books-301n24.herokuapp.com/');
  // let bookListData = axios.get('http://localhost:3001');

  getBooks = async () => {
   let bookListData = await axios.get('http://localhost:3001/books'); 
    console.log(bookListData);
  }

  render() {
    this.getBooks();
    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
