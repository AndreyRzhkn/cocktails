import { useMemo } from "react";
import { getPropValues } from "@shared/utils";

import { CocktailInfo } from "@shared/types";
import classes from "./Recipe.module.css";

type Props = {
  drink: CocktailInfo;
};
const RecipeItem = ({ drink }: Props) => {
  const ingredients = useMemo(() => getPropValues(drink, "strIngredient"), [drink]);

  const measures = useMemo(() => getPropValues(drink, "strMeasure"), [drink]);

  return (
    <>
      <div className={classes.mainInfo}>
        <div className={classes.descriptionWrapper}>
          <h3>{drink.strDrink}</h3>
          <p>{drink.strCategory}</p>
          <p>{drink.strAlcoholic}</p>
          <p>{drink.strGlass}</p>
          <br></br>
          <h4>Instructions</h4>
          <p>{drink.strInstructions}</p>
        </div>
        <div className={classes.imageWrapper}>
          <img src={drink.strDrinkThumb} alt='drink_icon' loading='lazy' />
        </div>
      </div>
      <div>
        <h4>List of ingredients</h4>
        <div className={classes.ingredients}>
          <div>
            {measures.map((measure, index) => (
              <p key={measure + index}>{measure}</p>
            ))}
          </div>
          <div>
            {ingredients.map((ingredient, index) => (
              <p key={ingredient + index}>{ingredient}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeItem;
