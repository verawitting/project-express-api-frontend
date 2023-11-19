import { useState, useEffect } from "react";
import { BookList } from "./BookList";

export const HighestRated = () => {

    const [highestRatedBooks, setHighestRatedBooks] = useState([]);

    const API_HIGHESTRATED = `https://project-express-api-vera.onrender.com/books/highest-rated`

    const fetchBooks = async () => {
        try {
            const response = await fetch(API_HIGHESTRATED);
            if (!response.ok) {
                throw new Error("Failed to fetch movies")
            }
            const result = await response.json();
            setHighestRatedBooks(result)
        } catch (error) {
            console.log("Error with fetch", error)
        }
    }

    useEffect(() => {
        fetchBooks();
    },[])

    console.log(highestRatedBooks);

  return (
    <>
        <BookList heading="HIGHEST RATING" books={highestRatedBooks} />
    </>
  )
}
