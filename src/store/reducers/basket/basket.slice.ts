import { createSlice } from "@reduxjs/toolkit";

export interface BasketItem {
  id: number;
  amount: number;
}

interface IInitState {
  items: BasketItem[];
  values: {
    qty: number;
  };
}

const initialState: IInitState = {
  items: [],
  values: {
    qty: 1,
  },
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    updateBasket: (state, { payload }) => {
      state.items = [...state.items, payload];
    },
    deleteBasketItem: (state, { payload }) => {
      state.items = state.items.filter((row) => row.id != payload);
    },
    setQty: (state, { payload }) => {
      state.values.qty = payload;
    },

    setBasketReset: (state) => {
      state.items = initialState.items;
      state.values = initialState.values;
    },
  },
});

export const { updateBasket, deleteBasketItem, setQty, setBasketReset } =
  basketSlice.actions;

export default basketSlice.reducer;
