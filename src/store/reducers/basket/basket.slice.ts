import { createSlice } from "@reduxjs/toolkit";

export interface BasketItem {
  id: number;
  amount: number;
}

interface IInitState {
  items: BasketItem[];
}

const initialState: IInitState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    updateBasket: (state, { payload }) => {
      state.items = [...state.items, payload];
    },
    deleteBasketItem: (state, { payload }) => {
      state.items = state.items.filter((row) => row !== payload);
    },

    setBasketReset: (state) => {
      state.items = initialState.items;
    },
  },
});

export const { updateBasket, deleteBasketItem, setBasketReset } =
  basketSlice.actions;

export default basketSlice.reducer;
