import React from "react";
import { useLocation } from "react-router-dom";

const BookDetails = () => {
    const location = useLocation();
    const book = location.state?.book;

    if (!book) {
        return <h2 className="text-center text-red-500 text-xl">No book details available</h2>;
    }

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
                            <button className="px-6 py-2 border border-blue-600 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition">
                                Read Sample
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
