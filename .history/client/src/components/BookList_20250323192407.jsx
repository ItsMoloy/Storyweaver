import React from "react";

const BookList = ({ books }) => {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {books.map((book) => (
                <div key={book.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
                    <img src={book.photo} alt={book.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
                    <h3>{book.title}</h3>
                    <p>Price: ${book.price}</p>
                </div>
            ))}
        </div>
    );
};

export default BookList;
