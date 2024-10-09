import React, { useState }from 'react';
import { getBooks } from '../services/bookService.js'
import { FaStar } from 'react-icons/fa';
import StarRating from './starRating.jsx';



const Books = () => {
const removeBook = (bookId)=> {
    const updatedBooks = books.filter(book => book._id !== bookId) // bookId is a placeholder, this function removes all elements whose ID does not match the ID where the button is pressed on
    setBooks(updatedBooks)
}
const listBooks = getBooks();
const [books, setBooks] = useState(listBooks)




    return ( 
            <div>   
                <h1>My Book Library</h1>
                <p>Showing {books.length} Books</p>

                {books.length === 0?(<p>There are no book titles</p>):
                (
                    <table style={{width: '100%'}}>
                    <thead>
                        <tr>
                            <th style={{fontWeight: "bold"}}> Id</th>
                            <th style={{fontWeight: "bold"}}> Title</th>
                            <th style={{fontWeight: "bold"}}> Category</th>
                            <th style={{fontWeight: "bold"}}> Author</th>
                            <th style={{fontWeight: "bold"}}> Number in Stock</th>
                            <th style={{fontWeight: "bold"}}> Price</th>
                            <th style={{fontWeight: "bold"}}> Year</th>
                            <th style={{fontWeight: "bold"}}> Review</th>
                            <th style={{fontWeight: "bold"}}> Action(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book)=> 
                            <tr style={{border: '1px solid #dddddd'}} key ={book._id}>
                                <td>{book._id}</td>
                                <td>{book.title}</td>
                                <td>{book.category.name}</td>
                                <td>{book.author}</td>
                                <td>{book.numberInStock}</td>
                                <td>{book.price}</td>
                                <td>{book.publishYear}</td>
                                <td><StarRating /></td>
                                <td>
                                    <button 
                                        onClick={() => removeBook(book._id)}
                                        type="button" 
                                        style={{ backgroundColor: 'red', color: 'white', borderRadius: '5px'}}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )}

                        </tbody>
                    </table>
                )
                
            }
            </div>
                
                
)}
        
export default Books;