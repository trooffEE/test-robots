<template>
  <div class="section storage">
    <div class="section-container storage__container">
      <h3 class="title title-section storage__title">
        <span class="key-word">Склад</span>
      </h3>
      <StorageItems />
    </div>
  </div>
</template>

<script>
import StorageItems from './StorageItems/StorageItems.vue';
export default {
  components: { StorageItems },};
</script>

<style lang="scss">
@import '../../../scss/layouts/storage.scss';
</style>
