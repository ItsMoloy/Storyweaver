import React from "react";

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center p-6">
            <header className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 text-center border border-gray-200">
                <h1 className="text-4xl font-extrabold text-gray-900">Login / Sign Up</h1>
                <p className="text-lg text-gray-700 mt-3">Please login or create an account to continue</p>
            </header>

            {/* Login Form (You can add your own form here) */}
            <div className="mt-8">
                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
