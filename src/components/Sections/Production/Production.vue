<template>
  <div class="section production">
    <div class="section-container production__container">
      <h3 class="title title-section production__title" id="prod">
        <span class="key-word">Производство</span>
      </h3>
      <ProductionContent />
    </div>
  </div>
</template>

<script>
import ProductionContent from "./ProductionContent/ProductionContent.vue";
export default {
  components: { ProductionContent },
};
</script>

<style lang="scss">
@import "../../../scss/layouts/production.scss";
</style>
