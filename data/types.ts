export interface IMeal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  strSource: string;
  strYoutube: string;
  ingredients?: Array<string>;
}

export interface IFilters {
  value: string;
  label: string;
}
