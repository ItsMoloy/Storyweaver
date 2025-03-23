import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import BookList from "../components/BookList"; // Import BookList component

const dummyBooks = [
    { id: 1, title: "The Great Gatsby", category: "Classic", photo: require("../assets/books/gatsby.jpeg"), price: 10 },
    { id: 2, title: "To Kill a Mockingbird", category: "Fiction", photo: require("../assets/books/mockingbird.jpeg"), price: 15 },
    { id: 3, title: "1984", category: "Dystopian", photo: require("../assets/books/1984.jpeg"), price: 20 },
    { id: 4, title: "The Catcher in the Rye", category: "Classic", photo: require("../assets/books/catcher.jpeg"), price: 12 },
    { id: 5, title: "Moby-Dick", category: "Adventure", photo: require("../assets/books/mobydick.jpeg"), price: 18 },
    { id: 6, title: "Pride and Prejudice", category: "Romance", photo: require("../assets/books/pride.jpeg"), price: 14 },
    { id: 7, title: "Default Book", category: "Unknown", photo: "https://via.placeholder.com/150", price: 0 },
];

const HomePage = () => {
    const navigate = useNavigate(); // useNavigate hook

    const handleBookClick = (book) => {
        navigate(`/book/${book.id}`, { state: { book } });
    };

    const handleLoginClick = () => {
        navigate("/LoginPage"); // Navigate to login page
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center p-6">
            {/* Header Section */}
            <header className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 text-center border border-gray-200">
                <h1 className="text-4xl font-extrabold text-gray-900">Welcome to Story Weaver</h1>
                <p className="text-lg text-gray-700 mt-3">Discover and explore a world of books at your fingertips</p>
            </header>

            {/* Login Button */}
            <div className="mt-8">
                <button
                    onClick={handleLoginClick} // Clicking here will navigate to /login
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                    Login / Sign Up
                </button>
            </div>

            {/* Book List Section */}
            <div className="w-full max-w-4xl mt-10 bg-white shadow-md rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Available Books</h2>
                <BookList books={dummyBooks} onBookClick={handleBookClick} />
            </div>

            {/* Footer Section */}
            <footer className="w-full max-w-4xl bg-gray-800 text-white text-center p-4 mt-10 rounded-lg">
                <p>&copy; 2025 Story Weaver. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
