import Navbar from "./Navbar";
import Home from "./Home";

function App() {
    const likes = 200;
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Home />
                <p>Welcome to the App</p>
            </div>
        </div>
    );
}

export default App;
