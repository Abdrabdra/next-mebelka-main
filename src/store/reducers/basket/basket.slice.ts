import { createSlice } from "@reduxjs/toolkit";
import { ICreateOrder } from "@src/types/Order/IOrder";

export interface BasketItem {
  id: number;
  amount: number;
}

interface IInitState {
  items: BasketItem[];
  values: {
    qty: number;
  };
  orderAddress: {
    cityId?: number;
    apartment: string;
    building: string;
    address: string;
    phone: string;
  };
}

const initialState: IInitState = {
  items: [],
  values: {
    qty: 1,
  },
  orderAddress: {
    cityId: undefined,
    apartment: "",
    building: "",
    address: "",
    phone: "",
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

    setBasketOrderAddress: (state, { payload }) => {
      state.orderAddress = { ...state.orderAddress, ...payload };
    },

    setBasketReset: (state) => {
      state.items = initialState.items;
      state.values = initialState.values;
    },
  },
});

export const {
  updateBasket,
  deleteBasketItem,
  setQty,
  setBasketOrderAddress,
  setBasketReset,
} = basketSlice.actions;

export default basketSlice.reducer;
