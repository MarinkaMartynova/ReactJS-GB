export const ADD_PRODUCT = "products/addProduct";
export const REMOVE_PRODUCT = "products/removeProduct";
export const UPDATE_PRODUCT = "products/updateProduct";
export const TOGGLE_AVAILABILITY = "products/toggleAvailability";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  payload: id,
});

export const updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});

export const toggleAvailability = (id) => ({
  type: TOGGLE_AVAILABILITY,
  payload: id,
});
