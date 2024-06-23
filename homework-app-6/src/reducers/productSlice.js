import { createSlice } from "@reduxjs/toolkit";
import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
  TOGGLE_AVAILABILITY,
} from "../actions/productActions";

let nextProductId = 1;

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ADD_PRODUCT, (state, action) => {
        const { name, description, price, available } = action.payload;
        state.push({
          id: nextProductId++,
          name,
          description,
          price,
          available,
        });
      })
      .addCase(REMOVE_PRODUCT, (state, action) => {
        return state.filter((product) => product.id !== action.payload);
      })
      .addCase(UPDATE_PRODUCT, (state, action) => {
        const { id, name, description, price, available } = action.payload;
        const existingProduct = state.find((product) => product.id === id);
        if (existingProduct) {
          existingProduct.name = name;
          existingProduct.description = description;
          existingProduct.price = price;
          existingProduct.available = available;
        }
      })
      .addCase(TOGGLE_AVAILABILITY, (state, action) => {
        const product = state.find((product) => product.id === action.payload);
        if (product) {
          product.available = !product.available;
        }
      });
  },
});

export default productSlice.reducer;
