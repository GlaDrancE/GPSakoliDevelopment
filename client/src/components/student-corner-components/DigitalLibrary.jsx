import React, { useState, useEffect } from "react";
import ImgCard from "../ImgCard";

const DigitalLibrary = () => {
    const [books, setBook] = useState([]);
    useEffect(() => {
        const fetchBook = async () => {
            let response = await fetch("https://gpsakoli.ac.in/api/connection.php?digital-library", {
                method: "GET"
            });

            let data = await response.json();
            setBook(data.data)
        }

        fetchBook();
    }, [])

    return (
        <div className="card-container">
            {/* {book.map(b => { */}
            {/* })} */}
            {books.map(book => (
                <ImgCard image={book.coverImage} text={book.title} authorName={book.authorName} department={book.branch} path={book.path} subject={book.subjectName} />
                // { console.log(book.coverImage); }
            ))}
        </div>
    );
};

export default DigitalLibrary;