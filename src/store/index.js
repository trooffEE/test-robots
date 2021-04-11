import Vue from "vue";
import Vuex from "vuex";
import MUTATIONS_TYPES from "./mutations-types";
import {
  addCoinActionCreator,
  showModal,
  hideModal,
  buyProduct,
  sellProduct,
  addItemProduction,
  removeItemFromProduction,
  robotDone,
} from "./action-creators";

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

Vue.use(Vuex);

// Получилось довольно много кода, который бы лучше разбить на модули!

export default new Vuex.Store({
  state: {
    coins: 45,
    modal: {
      isDisplayModal: null,
      modalToShow: "",
      modalTitle: "",
      modalDescription: "",
    },
    parts: [
      {
        id: 0,
        name: "Биомеханизм",
        price: {
          buy: 7,
          sell: 5,
        },
        quantity: 0,
      },
      {
        id: 1,
        name: "Процессор",
        price: {
          buy: 5,
          sell: 3,
        },
        quantity: 0,
      },
      {
        id: 2,
        name: "Душа",
        price: {
          buy: 25,
          sell: 15,
        },
        quantity: 0,
      },
    ],
    partsInProd: [
      {
        name: "Биомеханизм",
        quantity: 0,
      },
      {
        name: "Процессор",
        quantity: 0,
      },
      {
        name: "Душа",
        quantity: 0,
      },
    ],
    isRobotDone: false,
  },

  mutations: {
    [ADD_COINS](state, { amount }) {
      state.coins = state.coins + amount;
    },

    [SHOW_MODAL](state, { modalToShow }) {
      state.modal = { ...state.modal, isDisplayModal: true };
      state.modal = { ...state.modal, modalToShow };
      if (modalToShow === "Coin") {
        state.modal = {
          ...state.modal,
          modalTitle: "Количество монет ограничено",
        };
        state.modal = {
          ...state.modal,
          modalDescription: "Вы не можете нацыганить более 100 монет biorobo",
        };
      } else if (modalToShow === "Done") {
        state.modal = {
          ...state.modal,
          modalTitle: "Биоробот произведён",
        };
        state.modal = {
          ...state.modal,
          modalDescription: "Поздравляем! Вы произвели биоробота",
        };
      }
    },

    [HIDE_MODAL](state) {
      state.modal.isDisplayModal = false;
      state.modal.modalToShow = "";
      state.modal.modalTitle = "";
      state.modal.modalDescription = "";
    },

    [BUY_PRODUCT](state, { name }) {
      state.parts = state.parts.map((item) => {
        if (item.name === name) {
          item.quantity++;
          state.coins -= state.parts.find(
            (item) => item.name === name
          ).price.buy;
        }
        return item;
      });
    },

    [SELL_PRODUCT](state, { name }) {
      state.parts = state.parts.map((item) => {
        if (item.name === name) {
          if (item.quantity > 0) {
            item.quantity--;
            state.coins += state.parts.find(
              (item) => item.name === name
            ).price.sell;
          }
        }
        return item;
      });
    },

    [ADD_ITEM_TO_PROD](state, { name }) {
      state.partsInProd = state.partsInProd.map((item) => {
        if (item.name === name) {
          item.quantity++;
        }
        return item;
      });
    },

    [REMOVE_ITEM_FROM_PROD](state, { name }) {
      state.partsInProd = state.partsInProd.map((item) => {
        if (item.name === name) {
          item.quantity--;
        }
        return item;
      });
    },

    [SET_ROBOT_DONE](state) {
      state.coins = state.coins - 10;
      state.isRobotDone = true;
    },
  },

  getters: {
    neededPart: (state) => (name) => {
      return state.parts.find((item) => item.name === name);
    },
  },

  actions: {
    addCoins({ commit, state }, amount) {
      if (state.coins + amount <= 100) {
        commit(addCoinActionCreator(amount));
      }
      // show modal
      else {
        commit(showModal("Coin"));
      }
    },

    robotDone({ commit }) {
      commit(robotDone());
      setTimeout(() => {
        commit(showModal("Done"));
      }, 1000);
    },

    closeModal({ commit }) {
      commit(hideModal());
    },

    buyProduct({ state, commit, getters }, name) {
      let ourPart = getters.neededPart(name);

      if (state.coins - ourPart.price.buy >= 0) {
        commit(buyProduct(name));
      }
      // здесь молго бы быть модальное окно для уведомления пользователя, что
      // не хватает средств, но его нет в макете, поэтому не стал делать
    },

    sellProduct({ state, commit, getters }, name) {
      let ourPart = getters.neededPart(name);

      if (state.coins + ourPart.price.sell <= 100) {
        commit(sellProduct(name));

        if (
          ourPart.quantity <
          state.partsInProd.find((item) => item.name).quantity
        ) {
          commit(removeItemFromProduction(name));
        }
      } else {
        commit(showModal("Coin"));
      }
    },

    addItemToProduction({ commit }, name) {
      commit(addItemProduction(name));
    },

    removeItemProduction({ commit }, name) {
      commit(removeItemFromProduction(name));
    },
  },
});
