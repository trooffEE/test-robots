<template>
  <div class="coins-changer">
    <p @click="handleClick" class="button__change-coin">Нацыганить</p>
    <div class="coins-changer__check-container">
      <input
        class="checkbox coins-changer__checkbox"
        v-model="checked"
        type="checkbox"
        id="check-inc-by-5"
      />
      <label for="check-inc-by-5" class="label coins-changer__label"
        >Цыганить по 5 монет</label
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return { checked: false };
  },

  methods: {
    handleClick() {
      if (this.checked) {
        this.addCoins(5);
      } else {
        this.addCoins(1);
      }
    },
    ...mapActions(["addCoins"]),
  },
};
</script>

<style lang="scss">
@import "../../../../scss/abstracts/variables";
.button__change-coin {
  position: relative;
  color: $orangeLight;
  font-size: 1rem;
  line-height: 1.5;
  margin-right: 23px;
  &:hover {
    cursor: pointer;
  }
  &::before {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    bottom: -1px;
    left: 0;
    background-color: $orangeLight;
  }
}

.coins-changer {
  display: flex;
  align-items: center;
  &__checkbox {
    margin-right: 12px;
  }

  &__check-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
