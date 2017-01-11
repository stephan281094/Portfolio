<template>
  <router-link class="c-item" :to="to">
    <h2 class="c-item__title">{{ item.title }}</h2>
    <p class="c-item__description">{{ item.description }}</p>
  </router-link>
</template>

<script>
  export default {
    name: 'item',
    props: {
      item: {
        type: Object,
        required: true
      },
      to: {
        type: String,
        required: false,
        default: '#'
      }
    }
  }
</script>

<style lang="scss">
  .c-item {
    position: relative;
    padding: 1rem;
    color: #000;
    width: 100%;
    margin: 0 0 1rem;
    text-decoration: none;
    box-shadow: inset 0 0 0 2px #ccc;
    display: block;

    &:hover {
      box-shadow: inset 0 0 0 2px #000;
    }
  }
</style>
