import { createSlice } from "@reduxjs/toolkit";

interface IInitState {
  // состояние: нет в бэке
  // marks: number[] | null
  // models: number[] | null

  // cities: number[] | null

  helper: {
    reset: boolean;
    parentCategoryId?: number;
  };

  values: {
    limit: number;
    page: number;

    colors: number[];

    photo?: boolean;
    discount?: boolean;

    cityId?: number;
    categoryId?: number;

    priceTo: string;
    priceFrom: string;
  };
}

const initialState: IInitState = {
  helper: {
    reset: true,
    parentCategoryId: undefined,
  },

  values: {
    page: 1,
    limit: 5,

    colors: [],

    photo: undefined,
    discount: undefined,

    cityId: undefined,
    categoryId: undefined,

    priceFrom: "",
    priceTo: "",
  },
};

const productFilterSlice = createSlice({
  name: "filterPorducts",
  initialState,
  reducers: {
    setProductFilterHelper: (state, { payload }) => {
      state.helper = { ...state.helper, ...payload };
    },
    setProductFilter: (state, { payload }) => {
      state.values = { ...state.values, ...payload };
    },
    setProductFilterReset: (state) => {
      state.values = initialState.values;
      state.helper = initialState.helper;
    },
  },
});

export const {
  setProductFilterHelper,
  setProductFilter,
  setProductFilterReset,
} = productFilterSlice.actions;

export default productFilterSlice.reducer;
