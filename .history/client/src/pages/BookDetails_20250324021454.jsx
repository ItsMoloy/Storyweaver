import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BookDetails = () => {
    const location = useLocation();
    const book = location.state?.book;
    const [showSample, setShowSample] = useState(false);
    const [samplePages, setSamplePages] = useState([]);

    if (!book) {
        return <h2 className="text-center text-red-500 text-xl">No book details available</h2>;
    }

    // 📌 Fetch Sample Pages from Open Library API
    const fetchSamplePages = async () => {
        try {
            const response = await fetch(`https://openlibrary.org/works/OL45804W.json`);
            const data = await response.json();

            if (data.excerpts) {
                setSamplePages(data.excerpts.map(excerpt => excerpt.text));
            } else {
                setSamplePages(["No sample pages available for this book."]);
            }

            setShowSample(true); // Show modal after fetching data
        } catch (error) {
            console.error("Error fetching sample pages:", error);
            setSamplePages(["Failed to load sample pages."]);
            setShowSample(true);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
            <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
                {/* Book Image */}
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                        <img
                            src={book.photo}
                            alt={book.title}
                            className="w-full h-80 object-cover rounded-md shadow-md"
                        />
                    </div>

                    {/* Book Information */}
                    <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
                        <h1 className="text-4xl font-bold text-gray-900">{book.title}</h1>
                        <p className="text-lg text-gray-600 mt-2">Category: {book.category}</p>
                        <p className="text-2xl text-blue-600 font-semibold mt-2">Price: ${book.price}</p>

                        {/* Description */}
                        <p className="text-gray-700 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis sem non neque
                            euismod, vitae pulvinar eros fermentum. Quisque a tincidunt lacus, eu hendrerit dolor.
                        </p>

                        {/* Buttons */}
                        <div className="mt-6 flex gap-4">
                            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                                Add to Cart
                            </button>
                            <button
                                className="px-6 py-2 border border-blue-600 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition"
                                onClick={fetchSamplePages} // API Call
                            >
                                Read Sample
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sample Pages Modal */}
            {showSample && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sample Pages</h2>
                        <div className="space-y-4">
                            {samplePages.map((page, index) => (
                                <p key={index} className="text-gray-700 border-b pb-2">{page}</p>
                            ))}
                        </div>
                        <button
                            className="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition"
                            onClick={() => setShowSample(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookDetails;
