<template>
  <div class="storage__content content-wrapper">
    <el-cart
      buttonType="button-glow"
      buttonText="Продать"
      :title="part.name"
      :price="part.price.sell"
      :key="part.id"
      :index="index"
      showQuantity
      :disable=disableFunction(part.quantity)
      :quantity="part.quantity"
      :onClickProp="clickHandler"
      v-for="(part, index) in parts"
    ></el-cart>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ElCart from "../../../UI/el-cart.vue";
export default {
  components: {
    ElCart,
  },
  methods: {
      clickHandler(name) {
          this.sellProduct(name);
      },
      disableFunction(quantity) {
        if (quantity <= 0) {
          return true;
        }
        return false;
    },
      ...mapActions(['sellProduct'])
  },
  computed: {
    ...mapState({
      parts: (state) => state.parts,
    }),
  },
};
</script>

<style lang="scss">
.storage__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
