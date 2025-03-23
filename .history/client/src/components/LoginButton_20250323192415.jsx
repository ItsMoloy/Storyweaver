import React from "react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate("/login")}
            style={{
                backgroundColor: "#6200ea",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >
            Login / Signup
        </button>
    );
};

export default LoginButton;
