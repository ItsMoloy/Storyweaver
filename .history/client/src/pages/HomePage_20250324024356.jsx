import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const BookDetails = () => {
    const location = useLocation();
    const book = location.state?.book;
    const [showSample, setShowSample] = useState(false);
    const [samplePages, setSamplePages] = useState([]);

    if (!book) {
        return <h2 className="text-center text-red-500 text-xl">No book details available</h2>;
    }

    // Fetch Sample Pages
    const fetchSamplePages = async () => {
        try {
            const response = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${book.isbn}&jscmd=data&format=json`);
            const data = await response.json();

            const bookData = data[`ISBN:${book.isbn}`];

            // Check if excerpts are available
            if (bookData && bookData.excerpts && bookData.excerpts.length > 0) {
                const pages = bookData.excerpts.map((excerpt) => excerpt.text);
                setSamplePages(pages);
            } else {
                // Fallback to dummy sample pages
                setSamplePages([
                    "Chapter 1: The beginning of an amazing journey...",
                    "Chapter 2: The mysterious encounter in the dark forest...",
                    "Chapter 3: Secrets of the ancient book revealed...",
                    "Chapter 4: The hero's journey begins with unexpected allies...",
                    "Chapter 5: A twist of fate that changes everything forever..."
                ]);
            }

            setShowSample(true); // Show the sample pages modal
        } catch (error) {
            console.error("Error fetching sample pages:", error);

            // Fallback dummy content if API fails
            setSamplePages([
                "Unable to fetch sample pages. Here are some sample texts instead:",
                "It was a bright cold day in April, and the clocks were striking thirteen...",
                "He had always believed that books held the key to the greatest adventures...",
                "In a small town, a young boy discovered a world beyond imagination...",
            ]);

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
                                onClick={fetchSamplePages} // Call API or fallback to dummy pages
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
