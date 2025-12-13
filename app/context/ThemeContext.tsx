"use client";

import React, { createContext, useContext, useEffect, useState, Dispatch, SetStateAction } from "react";

type ThemeContextType = {
    darkMode: boolean;
    setDarkMode: Dispatch<SetStateAction<boolean>>;
    mounted: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem("darkMode");
        if (saved !== null) {
            setDarkMode(saved === "true");
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem("darkMode", JSON.stringify(darkMode));
        }
    }, [darkMode, mounted]);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode, mounted }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
