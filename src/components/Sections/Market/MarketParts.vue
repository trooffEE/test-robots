<template>
  <div class="section market">
    <div class="section-container market__container">
      <h3 class="title title-section market__title">
        <span class="key-word">Рынок</span> комплектующих
      </h3>
      <MarketItems />
    </div>
  </div>
</template>

<script>
import MarketItems from './MarketItems/MarketItems.vue';
export default {
  components: { MarketItems },};
</script>

<style lang="scss">
@import "../../../scss/layouts/market.scss";;
</style>
