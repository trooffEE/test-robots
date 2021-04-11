<template>
  <div class="production__parts">
    <button
      class="production__parts-item"
      :class="{ active: activeIndexes.includes(index) && quantity > index }"
      v-for="(item, index) in amountOfItems"
      :key="item"
      :disabled="quantity <= index"
      @click="() => clickHandler(index)"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.4 2.274V0H19.6V2.032C19.4675 2.01175 19.334 2.00125 19.2 2H18.4V0H17.6V2H16.4V0H15.6V2H14.4V0H13.6V2H12.4V0H11.6V2H10.4V0H9.6V2H8.4V0H7.6V2H6.4V0H5.6V2H4.8C4.666 2.00125 4.5325 2.01175 4.4 2.032V0H3.6V2.274C3.01938 2.55138 2.55138 3.01938 2.274 3.6H0V4.4H2.032C2.01175 4.5325 2.00125 4.666 2 4.8V5.6H0V6.4H2V7.6H0V8.4H2V9.6H0V10.4H2V11.6H0V12.4H2V13.6H0V14.4H2V15.6H0V16.4H2V17.6H0V18.4H2V19.2C2.00125 19.334 2.01175 19.4675 2.032 19.6H0V20.4H2.274C2.55138 20.9806 3.01938 21.4486 3.6 21.726V24H4.4V21.968C4.5325 21.9883 4.666 21.9988 4.8 22H5.6V24H6.4V22H7.6V24H8.4V22H9.6V24H10.4V22H11.6V24H12.4V22H13.6V24H14.4V22H15.6V24H16.4V22H17.6V24H18.4V22H19.2C19.334 21.9988 19.4675 21.9883 19.6 21.968V24H20.4V21.726C20.9806 21.4486 21.4486 20.9806 21.726 20.4H24V19.6H21.968C21.9883 19.4675 21.9988 19.334 22 19.2V18.4H24V17.6H22V16.4H24V15.6H22V14.4H24V13.6H22V12.4H24V11.6H22V10.4H24V9.6H22V8.4H24V7.6H22V6.4H24V5.6H22V4.8C21.9988 4.666 21.9883 4.5325 21.968 4.4H24V3.6H21.726C21.4486 3.01938 20.9806 2.55138 20.4 2.274ZM21.2 19.2C21.1986 20.304 20.304 21.1986 19.2 21.2H4.8C3.696 21.1986 2.80138 20.304 2.8 19.2V4.8C2.80138 3.696 3.696 2.80138 4.8 2.8H19.2C20.304 2.80138 21.1986 3.696 21.2 4.8V19.2Z"
          :fill="fill(index)"
        />
        <path
          d="M18.8 4H5.2C4.53738 4 4 4.53738 4 5.2V18.8C4 19.4626 4.53738 20 5.2 20H18.8C19.4626 20 20 19.4626 20 18.8V5.2C20 4.53738 19.4626 4 18.8 4ZM19.2 18.8C19.2 19.021 19.021 19.2 18.8 19.2H5.2C4.979 19.2 4.8 19.021 4.8 18.8V5.2C4.8 4.979 4.979 4.8 5.2 4.8H18.8C19.021 4.8 19.2 4.979 19.2 5.2V18.8Z"
          :fill="fill(index)"
        />
        <path d="M17.6 5.6H18.4V6.4H17.6V5.6Z" :fill="fill(index)" />
        <path d="M5.6 17.6H6.4V18.4H5.6V17.6Z" :fill="fill(index)" />
        <path
          d="M5.6 6.4V7.6H6.4V6.4H7.6V5.6H6.4C5.95813 5.6 5.6 5.95813 5.6 6.4Z"
          :fill="fill(index)"
        />
        <path
          d="M17.6 17.6H16.4V18.4H18.4V16.4H17.6V17.6Z"
          :fill="fill(index)"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: function () {
    return {
      amountOfItems: 4,
      activeIndexes: [],
    };
  },

  methods: {
    fill(item) {
      if (this.activeIndexes.includes(item) && this.quantity > item) {
        return "#FF7F22";
      } else if (this.quantity > item) {
        return "white";
      } else if (this.quantity <= item) {
        return "#4C5865";
      }
    },
    clickHandler(index) {
      if (this.activeIndexes.includes(index) || this.quantity < index) {
        this.activeIndexes = this.activeIndexes.filter(
          (item) => item !== index
        );
        this.removeItemProduction("Процессор");
      } else {
        this.activeIndexes = [...this.activeIndexes, index];
        this.addItemToProduction("Процессор");
      }
    },

    ...mapActions(["addItemToProduction", "removeItemProduction"]),
  },

  watch: {
    quantity: {
      handler: function (value, oldValue) {
        if (value < oldValue && value <= this.amountOfItems) {
          this.activeIndexes.pop();
        }
      },
    },
  },

  computed: {
    ...mapState({
      quantity: (state) =>
        state.parts.find((item) => item.name === "Процессор").quantity,
      quantityInProd: (state) =>
        state.partsInProd.find((item) => item.name === "Процессор").quantity,
    }),
  },
};
</script>

<style></style>
