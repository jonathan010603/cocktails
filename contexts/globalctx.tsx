import { createContext, ReactNode, useState } from 'react';

export const GlobalContext = createContext<any>(null);

export const ContextWrapper = ({ children }: { children: ReactNode }) => {

    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(false);
    const [filterModal, setFilterOpen] = useState(false);
    const [globalFilter, setGlobalFilter] = useState([]);

    return (
        <GlobalContext.Provider value={
            {
                meals, setMeals,
                error, setError,
                filterModal, setFilterOpen,
                globalFilter, setGlobalFilter
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}