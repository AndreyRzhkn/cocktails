import { CocktailInfo } from "@shared/types";

export const getPropValues = (obj: CocktailInfo, keyTitle: string) => {
  const array: string[] = [];
  Object.keys(obj).forEach((k) => {
    if (k.startsWith(keyTitle) && obj[k]) {
      array.push(obj[k]);
    }
  });
  return array;
};
