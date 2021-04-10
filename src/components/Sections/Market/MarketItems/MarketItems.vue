<template>
  <div class="market__content content-wrapper">
    <el-cart
      buttonType="button-filled"
      buttonText="Установить"
      :title="part.name"
      :price="part.price.buy"
      :key="part.id"
      :index="index"
      showImage
      :disable=disableFunction(part.price.buy)
      :onClickProp="clickHandler"
      v-for="(part, index) in parts"
    >
      <SvgComp :id="part.id" />
    </el-cart>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ElCart from "../../../UI/el-cart.vue";
import SvgComp from "../../../UI/SVG/svg.vue";

export default {
  components: {
    ElCart,
    SvgComp,
  },

  methods: {
    clickHandler(name) {
      this.buyProduct(name);
    },
    disableFunction(price) {
      if (this.coins < price) {
        return true;
      }
      return false;
    },
    ...mapActions(["buyProduct"]),
  },

  computed: {
    ...mapState({
      parts: (state) => state.parts,
      coins: (state) => state.coins,
    }),
  },
};
</script>

<style lang="scss"></style>
