"use client";
import { createContext, useState } from "react";

// Создание контекста
export const DataContext = createContext(null);

export function DataProvider({ children }) {
    const [Aside, setAside] = useState();

    return (
        <DataContext.Provider value={{ Aside, setAside }}>
            {children}
        </DataContext.Provider>
    );
}