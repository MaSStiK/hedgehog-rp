"use client"
import { createContext, useState } from "react"

// Создание контекста
export const DataContext = createContext(null);

export function DataProvider({ children }) {
    const [UserData, setUserData] = useState();

    return (
        <DataContext.Provider value={{ UserData, setUserData }}>
            {children}
        </DataContext.Provider>
    );
}