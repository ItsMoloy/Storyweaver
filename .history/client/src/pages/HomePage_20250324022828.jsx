import React from "react";
import { useNavigate } from "react-router-dom";
import BookList from "../components/BookList";

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
  const navigate = useNavigate();

  const handleBookClick = (book) => {
    navigate(`/book/${book.id}`, { state: { book } });
  };

  const handleLoginClick = () => {
    navigate("../pages/LoginPage");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col items-center p-6">
      {/* Header Section with Hero Image */}
      <header className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl mb-8">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1516979188813-a74109c689a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Library Books"
            className="w-full h-64 object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-8">
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Story Weaver</h1>
            <p className="text-xl drop-shadow-md">Dive into a world of endless stories.</p>
          </div>
        </div>
      </header>

      {/* Login Button with Stylish Design */}
      <div className="mb-10">
        <button
          onClick={handleLoginClick}
          className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 font-semibold"
        >
          Login / Sign Up
        </button>
      </div>

      {/* Book List Section with Grid Layout */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Explore Our Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BookList books={dummyBooks} onBookClick={handleBookClick} />
        </div>
      </div>

      {/* Footer Section with Modern Design */}
      <footer className="w-full max-w-4xl bg-gray-900 text-gray-300 text-center p-6 mt-12 rounded-3xl shadow-xl">
        <div className="flex justify-center items-center mb-4">
          <span className="text-xl font-semibold mr-2">Story Weaver</span>
          <span className="text-sm">|</span>
          <span className="ml-2">© 2025 All Rights Reserved</span>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;