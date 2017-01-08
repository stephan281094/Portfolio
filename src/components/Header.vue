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

<style lang="stylus">
  .c-header {
    position: relative;
  }

  .c-header__link {
    margin: 1rem;
    color: #000;
    display: inline-block;
    text-decoration: none;
  }

  .c-header__link:hover {
    text-decoration: underline;
  }
</style>
