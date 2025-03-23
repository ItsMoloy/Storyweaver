import React from "react";
import BookList from "../components/BookList";
import LoginButton from "../components/LoginButton";

const dummyBooks = [
    { id: 1, title: "Book 1", photo: "https://via.placeholder.com/150", price: 10 },
    { id: 2, title: "Book 2", photo: "https://via.placeholder.com/150", price: 15 },
    { id: 3, title: "Book 3", photo: "https://via.placeholder.com/150", price: 20 },
];

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center p-6">
            {/* Header Section */}
            <header className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 text-center border border-gray-200">
                <h1 className="text-4xl font-extrabold text-gray-900">Welcome to Story Weaver</h1>
                <p className="text-lg text-gray-700 mt-3">Discover and explore a world of books at your fingertips</p>
            </header>

            {/* Login Button */}
            <div className="mt-8">
                <LoginButton />
            </div>

            {/* Book List Section */}
            <div className="w-full max-w-4xl mt-10 bg-white shadow-md rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Available Books</h2>
                <BookList books={dummyBooks} />
            </div>
        </div>
    );
};

export default HomePage;
