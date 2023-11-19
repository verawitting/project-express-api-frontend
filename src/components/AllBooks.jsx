import { useState, useEffect } from "react";
import { BookList } from "./BookList";

export const AllBooks = () => {

    const [allBooks, setAllBooks] = useState([]);

    const API_ALLBOOKS = `https://project-express-api-vera.onrender.com/books`
   

     //Adding option to use the queries constructed in the backend
     //Sending queriParams as argument to the fetch
    const fetchBooks = async (queryParams) => {
        try {
            //adding query sting to the url
            const queryString = new URLSearchParams(queryParams).toString();
            const response = await fetch(`${API_ALLBOOKS}?${queryString}`);
            if (!response.ok) {
                throw new Error("Failed to fetch books")
            }
            const result = await response.json();
            setAllBooks(result)
        } catch (error) {
            console.log("Error with fetch", error)
        }
    }

    useEffect(() => {
        // Extract query parameters from the current URL by creating
        // an object containing all the query parameters and their values from the current URL
        const urlSearchParams = new URLSearchParams(window.location.search);
        // taking the iterator returned by urlSearchParams.entries() and creating an
        // object where each key corresponds to a query parameter, and the value is its associated value
        const queryParams = Object.fromEntries(urlSearchParams.entries());

        // Fetch books with the extracted query parameters
        fetchBooks(queryParams);
    },[])

    console.log(allBooks);

  return (
    <>
        <BookList heading="ALL THE BOOKS!" text="This is the array of all books. Try searching for an author in the address field. Remeber to use hyphens between the names! Or add queries! it could look something like this: Ex of query: /books?language=eng&averageRating=4.5. Give it a go!" books={allBooks} />
    </>
  )
}