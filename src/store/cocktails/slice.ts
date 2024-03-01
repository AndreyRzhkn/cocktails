import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CocktailsName } from "@shared/constants";
import { Drinks } from "@shared/types";

const initialState = {
  items: {} as Record<CocktailsName, Drinks>,
};

export const cocktailsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCocktailInfo: (
      state,
      action: PayloadAction<{ cocktailId: CocktailsName; cocktailInfo: Drinks }>,
    ) => {
      state.items[action.payload.cocktailId] = action.payload.cocktailInfo;
    },
  },
});

export const { setCocktailInfo } = cocktailsSlice.actions;

export default cocktailsSlice.reducer;
