import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BookDetails = () => {
    const location = useLocation();
    const book = location.state?.book;
    const [samplePages, setSamplePages] = useState([]);

    if (!book) {
        return <h2 className="text-center text-red-500 text-xl">No book details available</h2>;
    }

    // 📌 Function to Fetch Sample Pages from Open Library API
    const fetchSamplePages = async () => {
        try {
            const res = await fetch(`https://openlibrary.org/works/OL45804W.json`);
            const data = await res.json();
            setSamplePages(data.excerpts.map(excerpt => excerpt.text)); // Store sample text
        } catch (error) {
            console.error("Error fetching sample pages:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
            <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
                {/* Book Image & Info */}
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                        <img
                            src={book.photo}
                            alt={book.title}
                            className="w-full h-80 object-cover rounded-md shadow-md"
                        />
                    </div>

                    <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
                        <h1 className="text-4xl font-bold text-gray-900">{book.title}</h1>
                        <p className="text-lg text-gray-600 mt-2">Category: {book.category}</p>
                        <p className="text-2xl text-blue-600 font-semibold mt-2">Price: ${book.price}</p>

                        {/* Buttons */}
                        <div className="mt-6 flex gap-4">
                            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                                Add to Cart
                            </button>
                            <button
                                className="px-6 py-2 border border-blue-600 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition"
                                onClick={fetchSamplePages} // Fetch sample pages
                            >
                                Read Sample
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sample Pages Display */}
                {samplePages.length > 0 && (
                    <div className="mt-6 p-4 border-t border-gray-300">
                        <h2 className="text-xl font-semibold text-gray-800">Sample Pages:</h2>
                        {samplePages.map((page, index) => (
                            <p key={index} className="mt-2 text-gray-700 italic">"{page}"</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookDetails;
