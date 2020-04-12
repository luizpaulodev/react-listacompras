import { createSelector } from "reselect";
import uuidv1 from "uuid/v1";

import { Types } from "../actions/list";

const initialState = {
  list: null,
  items: [],
};

export default function list(state = initialState, action) {
  switch (action.type) {
    case Types.NEW_LIST:
      return {
        ...initialState,
        date: getDate(),
      };

    case Types.ADD_PRODUCT:
      return {
        ...state,
        list: action.list,
        items: [
          ...state.items,
          {
            ...action.product,
            id: uuidv1(),
            checked: false,
            total: getItemTotal(action.product),
          },
        ],
      };

    case Types.DELETE_PRODUCT:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.productId),
      };

    case Types.TOGGLE_PRODUCT:
      return {
        ...state,
        items: toggleItem(state.items, action.productId),
      };

    case Types.UPDATE_PRODUCT:
      return {
        ...state,
        list: action.list,
        items: updateProduct(state.items, action.product),
      };

    default:
      return state;
  }
}

function getItemTotal(product) {
  return product.price * product.quantity;
}

function updateProduct(items, product) {
  console.log(items, product);

  const index = items.findIndex((item) => item.id === product.id);

  return [
    ...items.slice(0, index), // Todos os itens antes do item a ser modificado
    { ...product, total: getItemTotal(product) }, // Item modificado
    ...items.slice(index + 1), // Todos os itens depois do item a ser modificado
  ];
}

function toggleItem(items, productId) {
  const index = items.findIndex((item) => item.id === productId);

  return [
    ...items.slice(0, index), // Todos os itens antes do item a ser modificado
    { ...items[index], checked: !items[index].checked }, // Item modificado
    ...items.slice(index + 1), // Todos os itens depois do item a ser modificado
  ];
}

function getDate() {
  const date = new Date();
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return date.toLocaleDateString("pt-BR", options);
}

export const getListTotal = createSelector(
  (state) => state.list.items,
  (items) => items.reduce((total, item) => total + item.total, 0)
);
