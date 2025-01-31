import { useState, useEffect } from "react";
import { BookList } from "./BookList";

export const MostPopular = () => {

    const [popularBooks, setPopularBooks] = useState([]);

    const API_POPULAR = `https://project-express-api-vera.onrender.com/books/most-popular`

    const fetchBooks = async () => {
        try {
            const response = await fetch(API_POPULAR);
            if (!response.ok) {
                throw new Error("Failed to fetch books")
            }
            const result = await response.json();
            setPopularBooks(result)
        } catch (error) {
            console.log("Error with fetch", error)
        }
    }

    useEffect(() => {
        fetchBooks();
    },[])

    console.log(popularBooks);

  return (
    <>
        <BookList 
        heading="MOST POPULAR" 
        books={popularBooks} />
    </>
  )
}
