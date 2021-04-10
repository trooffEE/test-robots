<template>
  <div class="modal">
    <div class="modal__content">
      <div
        class="modal__icon-container"
        :class="{ 'modal__icon-coin': modalToShow === 'Coin' }"
      ></div>

      <h4 class="modal__title">{{ modalTitle }}</h4>
      <p class="modal__message">
        {{ modalDescription }}
      </p>

      <button class="modal__close" @click="closeModal">
        <div class="modal__close-cross"></div>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions(["closeModal"]),
  },

  computed: {
    ...mapState({
      modalToShow: (state) => state.modal.modalToShow,
      modalTitle: (state) => state.modal.modalTitle,
      modalDescription: (state) => state.modal.modalDescription,
    }),
  },
};
</script>

<style lang="scss">
@import "../../scss/layouts/modal.scss";
</style>
