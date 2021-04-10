import Vue from "vue";
import Vuex from "vuex";
import MUTATIONS_TYPES from "./mutations-types";
import {
  addCoinActionCreator,
  showModal,
  hideModal,
  buyProduct,
  sellProduct,
} from "./action-creators";

const {
  ADD_COINS,
  SHOW_MODAL,
  HIDE_MODAL,
  BUY_PRODUCT,
  SELL_PRODUCT,
} = MUTATIONS_TYPES;

Vue.use(Vuex);

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
          state.coins -= state.parts.find((item) => item.name === name).price.buy;
        }
        return item;
      });
    },

    [SELL_PRODUCT](state, { name }) {
      state.parts = state.parts.map(item => {
        if (item.name === name) {
          if (item.quantity > 0) {
            item.quantity--;
            state.coins += state.parts.find(item => item.name === name).price.sell;
          }
        }
        return item;
      });
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
      } else {
        commit(showModal("Coins"));
      }
    },
  },
});
