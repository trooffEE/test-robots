<template>
  <div class="main-container">
    <Header />
    <HeroSection />
    <WalletSection />
    <MarketParts />
    <Storage />
    <Production />
    <Modal v-if="isDisplayModal" />
  </div>
</template>

<script>
import { mapState } from "vuex";

import Header from "./Sections/Header/Header.vue";
import HeroSection from "./Sections/Hero/HeroSection.vue";
import MarketParts from "./Sections/Market/MarketParts.vue";
import Production from "./Sections/Production/Production.vue";
import Storage from "./Sections/Storage/Storage.vue";
import WalletSection from "./Sections/Wallet/WalletSection.vue";
import Modal from "./UI/Modal.vue";
export default {
  components: {
    Header,
    HeroSection,
    WalletSection,
    MarketParts,
    Storage,
    Production,
    Modal,
  },
  computed: {
    ...mapState({
      isDisplayModal: state => state.modal.isDisplayModal,
    }),
  },
};
</script>

<style lang="scss">
.main-container {
  max-width: 1016px;
  margin: 0 auto;
  padding: 48px 0 211px 0;
}
</style>
