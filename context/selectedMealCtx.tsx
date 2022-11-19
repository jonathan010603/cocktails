import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { IMeal } from '../data/types';
export interface ISelectedMeal {
  selectedMeal: IMeal | null;
  setSelectedMeal: Dispatch<SetStateAction<IMeal | null>>;
}

export const selectedMealContext = createContext<ISelectedMeal | null>(null);

export const SelectedMealCtxWrapper = ({ children }: { children: ReactNode }) => {
  const [selectedMeal, setSelectedMeal] = useState<IMeal | null>(null);

  return (
    <selectedMealContext.Provider
      value={{
        selectedMeal,
        setSelectedMeal,
      }}
    >
      {children}
    </selectedMealContext.Provider>
  );
};