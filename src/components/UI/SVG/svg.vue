<template>
  <div>
    <bio-mechnism v-if="id === 0" />
    <processor v-else-if="id === 1" />
    <soul v-else-if="id === 2" />
  </div>
</template>

<script>
import BioMechnism from "./bioMechnism.vue";
import processor from "./processor.vue";
import soul from "./soul.vue";

export default {
  components: { processor, BioMechnism, soul },
  props: {
    id: Number,
  },
};
</script>

<style></style>
