const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Nootek</h1>
            <div className="links">
                <a href="/">Home</a>
                <a
                    href="/create"
                    style={{
                        color: "white",
                        backgroundColor: "#f1356d",
                        borderRadius: "8px",
                        padding: "10px 20px",
                    }}
                >
                    New Blog
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
