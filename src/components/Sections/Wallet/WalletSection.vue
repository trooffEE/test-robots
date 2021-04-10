<template>
  <div class="section wallet">
    <div class="section-container wallet__container">
        <h3 class="title title-section wallet__title"><span class="key-word">Кошелёк</span> криптовалют</h3>
        <CoinComponent />
        <CoinChangeComponent />
    </div>
  </div>
</template>

<script>
import CoinComponent from './Coins/CoinComponent.vue'
import CoinChangeComponent from './Coins/CoinChangeComponent.vue'

export default {
  components: {
    CoinComponent,
    CoinChangeComponent
  }
};
</script>

<style lang="scss">
@import '../../../scss/layouts/wallet.scss';
</style>
