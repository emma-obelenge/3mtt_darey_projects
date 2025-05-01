import { useState } from "react";

const Home = () => {
    const [name, setName] = useState("Obelenge");

    const handleClick = () => {
        setName("Obelenge");
    };

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>Welcome to the home page!</p>
            <button
                onClick={() => {
                    handleClick("Obelenge");
                }}
            >
                Click Me!
            </button>
        </div>
    );
};

export default Home;
