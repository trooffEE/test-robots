<template>
  <button @click="clickPass"><slot></slot></button>
</template>

<script>
export default {
  props: {
    clickPass: Function,
    title: String
  }
};
</script>

<style></style>