import { useState, useEffect } from "react";
import { BookList } from "./BookList";

export const ShortStories = () => {

    const [shortStories, setShortStories] = useState([]);

    const API_SHORTSTORIES = `https://project-express-api-vera.onrender.com/books/short-stories`

    const fetchBooks = async () => {
        try {
            const response = await fetch(API_SHORTSTORIES);
            if (!response.ok) {
                throw new Error("Failed to fetch books")
            }
            const result = await response.json();
            setShortStories(result)
        } catch (error) {
            console.log("Error with fetch", error)
        }
    }

    useEffect(() => {
        fetchBooks();
    },[])

    console.log(shortStories);

  return (
    <>
        <BookList books={shortStories} />
    </>
  )
}