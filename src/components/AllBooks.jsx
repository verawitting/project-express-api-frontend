import { useState, useEffect } from "react";
import { BookList } from "./BookList";

export const AllBooks = () => {

    const [allBooks, setAllBooks] = useState([]);

    const API_ALLBOOKS = `https://project-express-api-vera.onrender.com/books`

    const fetchBooks = async () => {
        try {
            const response = await fetch(API_ALLBOOKS);
            if (!response.ok) {
                throw new Error("Failed to fetch movies")
            }
            const result = await response.json();
            setAllBooks(result)
        } catch (error) {
            console.log("Error with fetch", error)
        }
    }

    useEffect(() => {
        fetchBooks();
    },[])

    console.log(allBooks);

  return (
    <>
        <BookList heading="ALL THE BOOKS!" text="This is the array of all books. Try searching for an author in the address field. Remeber to use hyphens between the names! Or add queries! it could look something like this: Ex of query: /books?language=eng&averageRating=4.5. Give it a go!" books={allBooks} />
    </>
  )
}