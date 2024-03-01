import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NotFoundModule from "@modules/NotFoundModule";
import Recipes from "./components/Recipes";
import { CocktailsName } from "@shared/constants";
import { getCocktails } from "@store/cocktails/selectors";
import { setCocktailInfo } from "@store/cocktails/slice";
import { getCocktail as getCocktailInfo } from "@services/http";

const CocktailModule = () => {
  const params = useParams<{ cocktailId: CocktailsName }>();
  const cocktails = useSelector(getCocktails);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { cocktailId } = params;

  const cocktailsArray = Object.values(CocktailsName);

  useEffect(() => {
    if (cocktailId && cocktailsArray.includes(cocktailId)) {
      const getCocktail = async () => {
        setIsLoading(true);
        try {
          const cocktailInfo = await getCocktailInfo(cocktailId);
          dispatch(setCocktailInfo({ cocktailId, cocktailInfo }));
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      };

      if (!cocktails[cocktailId]) getCocktail().then();
    }
  }, [cocktailId]);

  if (isLoading) {
    return <h3>Loading data ...</h3>;
  }

  if (!isLoading && !cocktails[cocktailId!]) return <NotFoundModule />;

  return <Recipes drinks={cocktails[cocktailId!].drinks} />;
};

export default CocktailModule;
