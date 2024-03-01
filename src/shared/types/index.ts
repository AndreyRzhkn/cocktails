export type CocktailInfo = {
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
} & Record<string, string>;

export type Drinks = {
  drinks: CocktailInfo[];
};
