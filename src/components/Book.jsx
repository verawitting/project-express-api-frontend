

export const Book = ({ books }) => {
    console.log(books);

  return (
  <>
    {
        books.map((book) => (
            <div className="single-book">
            <h3>{book.title}</h3>
            <h4>{book.authors}</h4>
            <div className="book-details">
            <p>Rating: {book.average_rating}</p>
            <p>Language: {book.language_code}</p>
            <p>Pages: {book.num_pages}</p>
            </div>
            </div>
        ))
        }
    </>
  )
}