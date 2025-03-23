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
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            {/* Header Section */}
            <header className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 text-center">
                <h1 className="text-3xl font-bold text-gray-800">Welcome to Story Weaver</h1>
                <p className="text-gray-600 mt-2">Explore a vast collection of books at your fingertips</p>
            </header>

            {/* Login Button */}
            <div className="mt-6">
                <LoginButton />
            </div>

            {/* Book List Section */}
            <div className="w-full max-w-4xl mt-8">
                <BookList books={dummyBooks} />
            </div>
        </div>
    );
};

export default HomePage;
