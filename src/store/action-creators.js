import MUTATIONS_TYPES from "./mutations-types";

const { ADD_COINS, SHOW_MODAL, HIDE_MODAL, BUY_PRODUCT, SELL_PRODUCT } = MUTATIONS_TYPES;

export const addCoinActionCreator = (amount) => ({
  type: ADD_COINS,
  amount,
});

export const showModal = (modalToShow) => ({
  type: SHOW_MODAL,
  modalToShow,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});

export const buyProduct = (name) => ({
  type: BUY_PRODUCT,
  name
});

export const sellProduct = (name) => ({
  type: SELL_PRODUCT,
  name
});
