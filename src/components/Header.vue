<template>
  <div class="c-header">
    <router-link class="c-header__link" to="/">Home</router-link>
    <router-link class="c-header__link" to="/about">About</router-link>
  </div>
</template>

<script>
  export default {
    name: 'header'
  }
</script>

<style lang="scss">
  .c-header {
    position: relative;

    &__link {
      margin: 1rem;
      color: #000;
      display: inline-block;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
