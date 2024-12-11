import React, { useState } from "react";

const Navbar = ({ setSelection }) => {
    const [selected, setSelected] = useState("alzheimers"); // Default selected item

    const handleSelection = (selection) => {
        setSelection(selection); // Update the parent state
        setSelected(selection); // Update the local state to track the selected button
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.buttonContainer}>
                <button
                    onClick={() => handleSelection("alzheimers")}
                    style={
                        selected === "alzheimers"
                            ? { ...styles.link, ...styles.selected }
                            : styles.link
                    }
                >
                    Alzheimer's
                </button>
                <button
                    onClick={() => handleSelection("anxiety")}
                    style={
                        selected === "anxiety"
                            ? { ...styles.link, ...styles.selected }
                            : styles.link
                    }
                >
                    Anxiety
                </button>
                <button
                    onClick={() => handleSelection("depression")}
                    style={
                        selected === "depression"
                            ? { ...styles.link, ...styles.selected }
                            : styles.link
                    }
                >
                    Depression
                </button>
                <button
                    onClick={() => handleSelection("bipolar")}
                    style={
                        selected === "bipolar"
                            ? { ...styles.link, ...styles.selected }
                            : styles.link
                    }
                >
                    Bipolar Disorder
                </button>
                <button
                    onClick={() => handleSelection("schizophrenia")}
                    style={
                        selected === "schizophrenia"
                            ? { ...styles.link, ...styles.selected }
                            : styles.link
                    }
                >
                    Schizophrenia
                </button>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "center", // Center the button container
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#1c1c1e", // Dark background color
        borderRadius: "10px",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "space-around", // Space buttons equally
        width: "100%", // Ensure the container takes full width
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
