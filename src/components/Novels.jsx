import { useState, useEffect } from "react";
import { BookList } from "./BookList";

export const Novels = () => {

    const [novels, setNovels] = useState([]);

    const API_NOVELS = `https://project-express-api-vera.onrender.com/books/novels`

    const fetchBooks = async () => {
        try {
            const response = await fetch(API_NOVELS);
            if (!response.ok) {
                throw new Error("Failed to fetch movies")
            }
            const result = await response.json();
            setNovels(result)
        } catch (error) {
            console.log("Error with fetch", error)
        }
    }

    useEffect(() => {
        fetchBooks();
    },[])

    console.log(novels);

  return (
    <>
        <BookList books={novels} />
    </>
  )
}