import { CocktailInfo } from "@shared/types";
import RecipeItem from "../RecipeItem";

type Props = {
  drinks: CocktailInfo[];
};

const Recipes = ({ drinks }: Props) => {
  return (
    <>
      {drinks.map((d) => (
        <RecipeItem drink={d} key={d.strDrink} />
      ))}
    </>
  );
};

export default Recipes;
