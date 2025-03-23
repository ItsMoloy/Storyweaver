import React from "react";
import BookList from "../components/BookList";
import LoginButton from "../components/LoginButton";

const dummyBooks = [
    { id: 1, title: "The Great Gatsby", category: "Classic", photo: require("../assets/books/gatsby.jpg"), price: 10 },
    { id: 2, title: "To Kill a Mockingbird", category: "Fiction", photo: require("../assets/books/mockingbird.jpg"), price: 15 },
    { id: 3, title: "1984", category: "Dystopian", photo: require("../assets/books/1984.jpg"), price: 20 },
    { id: 4, title: "The Catcher in the Rye", category: "Classic", photo: require("../assets/books/catcher.jpg"), price: 12 },
    { id: 5, title: "Moby-Dick", category: "Adventure", photo: require("../assets/books/mobydick.jpg"), price: 18 },
    { id: 6, title: "Pride and Prejudice", category: "Romance", photo: require("../assets/books/pride.jpg"), price: 14 },
];

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center p-6">
            <header className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 text-center border border-gray-200">
                <h1 className="text-4xl font-extrabold text-gray-900">Welcome to Story Weaver</h1>
                <p className="text-lg text-gray-700 mt-3">Discover and explore a world of books at your fingertips</p>
            </header>

            <div className="mt-8">
                <LoginButton />
            </div>

            <div className="w-full max-w-4xl mt-10 bg-white shadow-md rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Available Books</h2>
                <BookList books={dummyBooks} />
            </div>

            <footer className="w-full max-w-4xl bg-gray-800 text-white text-center p-4 mt-10 rounded-lg">
                <p>&copy; 2025 Story Weaver. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
