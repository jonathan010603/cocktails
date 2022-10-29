import { createContext, ReactNode, useState } from 'react';

export const GlobalContext = createContext<any>(null);

export const ContextWrapper = ({ children }: { children: ReactNode }) => {

    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(false);

    return (
        <GlobalContext.Provider value={{ meals, setMeals, error, setError }}>
            {children}
        </GlobalContext.Provider>
    );
}