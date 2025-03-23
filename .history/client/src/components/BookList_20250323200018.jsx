import React from "react";

const BookList = ({ books, onBookClick }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {books.map((book) => (
                <div
                    key={book.id}
                    className="border border-gray-200 p-4 rounded-lg shadow-md bg-white cursor-pointer hover:shadow-lg transition"
                    onClick={() => onBookClick(book)}
                >
                    <img
                        src={book.photo}
                        alt={book.title}
                        className="w-full h-48 object-cover rounded-md"
                    />
                    <h3 className="text-lg font-semibold mt-2 text-gray-800">{book.title}</h3>
                    <p className="text-gray-600">Category: {book.category}</p>
                    <p className="text-blue-600 font-bold">Price: ${book.price}</p>
                </div>
            ))}
        </div>
    );
};

export default BookList;