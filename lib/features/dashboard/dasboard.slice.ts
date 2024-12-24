import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";
import { Categories, Product } from "@/types";

export interface AppState {
  modal: boolean;
  product: Product | undefined;
  products: Product[];
  categories: Categories[] | undefined;
}

const initialState: AppState = {
  modal: false,
  product: undefined,
  products: [],
  categories: undefined,
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeModalParam: (state) => {
      state.modal = !state.modal;
    },
    changeProductModal: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
    },
    getProductsDispatch: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    getCategoriesDispatch: (state, action: PayloadAction<Categories[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { changeModalParam, getProductsDispatch, changeProductModal,getCategoriesDispatch } =
  AppSlice.actions;

export const selectCount = (state: RootState) => state.app.modal;

export default AppSlice.reducer;
