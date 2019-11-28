<template>
  <div class="tab-item">
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name: 'TabList',
  }
</script>

<style scoped>
  .tab-item {
    display: flex;
    text-align: center;
    line-height: 45px;
  }
</style>
