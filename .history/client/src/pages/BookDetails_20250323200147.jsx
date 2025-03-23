import React from "react";
import { useLocation } from "react-router-dom";

const BookDetails = () => {
    const location = useLocation();
    const book = location.state?.book;

    if (!book) {
        return <h2 className="text-center text-red-500 text-xl">No book details available</h2>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl text-center">
                <img src={book.photo} alt={book.title} className="w-full h-64 object-cover rounded-md" />
                <h1 className="text-3xl font-bold text-gray-900 mt-4">{book.title}</h1>
                <p className="text-lg text-gray-700 mt-2">Category: {book.category}</p>
                <p className="text-xl text-blue-600 font-semibold mt-2">Price: ${book.price}</p>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default BookDetails;
