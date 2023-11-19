import { Book } from "./Book"


export const BookList = ({ books, heading }) => {
  return (
    <div className="book-list-container">
        <h2>{heading}</h2>
        <div className="book-list">
        <Book books={books}/>
        </div>
    </div>
  )
}
