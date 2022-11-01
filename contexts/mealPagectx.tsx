import { createContext, ReactNode, useState } from 'react';

export const MealPageContext = createContext<any>(null);

export const MealContextWrapper = ({ children }: { children: ReactNode }) => {

    const [mealData, setMealData] = useState([]);

    return (
        <MealPageContext.Provider value={
            {
                mealData, setMealData
            }
        }>
            {children}
        </MealPageContext.Provider>
    );
}