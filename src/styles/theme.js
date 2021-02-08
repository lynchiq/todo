import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    text: {
        default: '#24292E',
        secondary: '#384047',
        alt: '#67717A',
        placeholder: '#7C8894',
        reverse: '#FFFFFF',
    },
    colors: {
        default: {
            default: "#007bff",
            hover: "#0069d9"
        },
        primary: {
            default: "#007bff",
            hover: "#0069d9"
        },
        success: {
            default: "#28a745",
            hover: "#218838"
        },
        warning: {
            default: "#dc3545",
            hover: "#c82333"
        },
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
};

export const variantOptions = {
    colors: {
        primary: {
            default: "#007bff",
            hover: "#0069d9"
        },
        success: {
            default: "#28a745",
            hover: "#218838"
        },
        warning: {
            default: "#dc3545",
            hover: "#dc3545"
        },
    },
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;