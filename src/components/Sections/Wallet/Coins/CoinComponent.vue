<template>
  <div class="coins-wrapper">
    <ul class="coins">
      <!-- Мы точно знаем, что порядок элементов не будет меняться, поэтому безопастно использовать :key=index 
     проблем с ререндером и полной перерисовкой нижнего кода возникать не будет -->
      <li class="coins__item" v-for="(coin, index) in coins" :key="index"></li>
    </ul>
    <p class="coins-message">
      <span class="coins-message__amount">{{ coins }}</span> biorobo
      {{ message }}
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["coins"]),
    message: function () {
      const coins = String(this.coins).split("");
      const lastDigit = coins[coins.length - 1];
      let message = "монет";

      switch (lastDigit) {
        case "1":
          // если строка для коинов длинее 2-ух символов
          if (coins.length >= 2) {
            message = coins[0] === "1" ? message : message + "a";
          } else {
            message = message + "а";
          }
          break;
        case "2":
        case "3":
        case "4":
          if (coins.length >= 2) {
            message = coins[0] === "1" ? message : message + "ы";
          } else {
            message = message + "ы";
          }
          break;
        default:
          message;
      }

      return message;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../scss/abstracts/variables";

.coins {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  flex-direction: row-reverse;
  min-height: 20px;
  margin-bottom: 23px;
  &-wrapper {
    margin-bottom: 43px;
  }
  &__item {
    width: 16px;
    height: 20px;
    background-image: url("../../../../assets/coin.png");
    z-index: 100;
  }
}

.coins__item:not(:last-child) {
  margin-left: -8px;
}

.coins-message {
  color: $fontMainColor;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
  &__amount {
    font-weight: 700;
  }
}
</style>
