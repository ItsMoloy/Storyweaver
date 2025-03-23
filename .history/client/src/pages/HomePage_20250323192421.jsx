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
        <div style={{ padding: "20px" }}>
            <h1>Welcome to Story Weaver</h1>
            <LoginButton />
            <BookList books={dummyBooks} />
        </div>
    );
};

export default HomePage;
