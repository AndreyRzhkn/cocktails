import { CocktailsName } from "@shared/constants";

export const getCocktail = async (cocktailId: CocktailsName) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailId}`,
  );
  const cocktailInfo = await response.json();
  return cocktailInfo;
};
