import { createContext, ReactNode, useState } from 'react';

export const GlobalContext = createContext<any>(null);

export const ContextWrapper = ({ children }: { children: ReactNode }) => {

    const [drinks, setDrinks] = useState([]);
    const [error, setError] = useState(false);

    return (
        <GlobalContext.Provider value={{ drinks, setDrinks, error, setError }}>
            {children}
        </GlobalContext.Provider>
    );
}