import { Book } from "./Book"


export const BookList = ({ books, heading, text }) => {
  return (
    <div className="book-list-container">
        <h2>{heading}</h2>
        <p>{text}</p>
        <div className="book-list">
        <Book books={books}/>
        </div>
    </div>
  )
}
