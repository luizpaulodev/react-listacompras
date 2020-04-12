export const Types = {
  ADD_PRODUCT: "Form/ADD_PRODUCT",
  DELETE_PRODUCT: "Form/DELETE_PRODUCT",
  TOGGLE_PRODUCT: "Form/TOGGLE_PRODUCT",
  UPDATE_PRODUCT: "Form/UPDATE_PRODUCT",
  NEW_LIST: "Form/NEW_LIST",
};

export const Creators = {
  addProduct: (product, list) => ({
    type: Types.ADD_PRODUCT,
    product,
    list,
  }),

  deleteProduct: (productId) => ({
    type: Types.DELETE_PRODUCT,
    productId,
  }),

  toggleProduct: (productId) => ({
    type: Types.TOGGLE_PRODUCT,
    productId,
  }),

  updateProduct: (product, list) => ({
    type: Types.UPDATE_PRODUCT,
    product,
    list,
  }),

  newList: () => ({
    type: Types.NEW_LIST,
  }),
};
