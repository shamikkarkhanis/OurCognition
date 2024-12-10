import React, { useState } from "react";

const Navbar = ({ setSelection }) => {
    const [selected, setSelected] = useState("outer"); // Default selected item

    const handleSelection = (selection) => {
        setSelection(selection); // Update the parent state
        setSelected(selection); // Update the local state to track the selected button
    };

    return (
        <nav style={styles.navbar}>
            <div>
                <button
                    onClick={() => handleSelection("outer")}
                    style={
                        selected === "outer"
                            ? { ...styles.link, ...styles.selected }
                            : styles.link
                    }
                >
                    Outer
                </button>
                <button
                    onClick={() => handleSelection("inner")}
                    style={
                        selected === "inner"
                            ? { ...styles.link, ...styles.selected }
                            : styles.link
                    }
                >
                    Inner
                </button>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#1c1c1e", // Dark background color
        borderRadius: "10px",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "1rem",
        fontWeight: "500",
        padding: "10px 15px",
        borderRadius: "5px",
        backgroundColor: "#2c2c2e", // Button-like background
        cursor: "pointer",
        transition: "all 0.3s ease",
        border: "none", // Remove default button border
    },
    selected: {
        outline: "2px solid white", // White outline for selected item
        backgroundColor: "#3c3c3e", // Slightly different background for selected
    },
};

export default Navbar;
