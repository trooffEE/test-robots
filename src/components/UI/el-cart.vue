<template>
  <div class="card">
    <div class="card__image" v-if="showImage">
      <div :class="{ 'card__image-square': index === 2 }">
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
    <h5 class="card__title">{{ title }}</h5>
    <p class="card__price-text">
      Стоимость: <span>{{ price }} {{ text }}</span>
    </p>
    <p class="card__quantity" v-if="showQuantity">{{quantity}} шт</p>
    <el-button
      :clickPass="clickHandler"
      class="card__button button"
      :class="buttonType"
      :disabled='disable'
      >{{ buttonText }}</el-button
    >
  </div>
</template>

<script>
import ElButton from "./el-button.vue";

export default {
  data: function () {
    return {
      text: "монет",
    };
  },
  props: {
    circleImage: Boolean,
    buttonType: String,
    title: String,
    price: Number,
    buttonText: String,
    showImage: Boolean,
    index: Number,
    onClickProp: Function,
    showQuantity: Boolean,
    quantity: Number,
    disable: Boolean,
  },
  methods: {
    clickHandler() {
      this.onClickProp(this.title);
    },
  },

  components: {
    ElButton,
  },
  computed: {},
};
</script>

<style lang="scss">
// uses scss/components/card.scss
</style>
