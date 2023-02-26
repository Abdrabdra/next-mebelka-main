import { createSlice } from "@reduxjs/toolkit";

interface IInitState {
  helper: {
    reset: boolean;
  };

  values: {
    limit: number;
    page: number;

    marks: number[];
    models: number[];

    yearTo: string;
    yearFrom: string;
    orderByPriceASC: string;
    orderByPriceDESC: string;
    priceTo: string;
    priceFrom: string;
  };
}

const initialState: IInitState = {
  helper: {
    reset: true,
  },

  values: {
    limit: 10,
    page: 1,

    marks: [],
    models: [],

    yearFrom: "",
    yearTo: "",
    orderByPriceASC: "",
    orderByPriceDESC: "",
    priceFrom: "",
    priceTo: "",
  },
};

const productFilterSlice = createSlice({
  name: "productFilter",
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.values = { ...state.values, ...payload };
    },
    setFilterReset: (state) => {
      state.values = initialState.values;
    },
  },
});

export const { setFilter, setFilterReset } = productFilterSlice.actions;

export default productFilterSlice.reducer;
