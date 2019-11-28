<template>
  <div class="tab-list-item" @click="activeItem" :class="{'active-color': isTrue}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabListItem',
    props: {
      path: String
    },
    methods: {
      activeItem() {
        this.$router.replace(this.path)
      }
    },
    computed: {
      isTrue() {
        return this.$route.path.includes(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-list-item {
    flex: 1;
  }
  .active-color {
    color: red
  }
</style>
