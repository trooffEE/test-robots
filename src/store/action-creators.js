import MUTATIONS_TYPES from "./mutations-types";

const {
  ADD_COINS,
  SHOW_MODAL,
  HIDE_MODAL,
  BUY_PRODUCT,
  SELL_PRODUCT,
  ADD_ITEM_TO_PROD,
  REMOVE_ITEM_FROM_PROD,
  SET_ROBOT_DONE,
} = MUTATIONS_TYPES;

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
  name,
});

export const sellProduct = (name) => ({
  type: SELL_PRODUCT,
  name,
});

export const addItemProduction = (name) => ({
  type: ADD_ITEM_TO_PROD,
  name,
});

export const removeItemFromProduction = (name) => ({
  type: REMOVE_ITEM_FROM_PROD,
  name,
});

export const robotDone = () => ({
  type: SET_ROBOT_DONE,
});
