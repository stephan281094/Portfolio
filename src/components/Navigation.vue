<template>
  <nav class="c-nav">
    <div class="c-nav__breadcrumb">
      <router-link class="c-nav__item c-nav__item--logo" to="/">
        Stephan
      </router-link>
    </div>
    <div class="c-nav__breadcrumb" v-for="breadcrumb in breadcrumbs">
      <span class="c-nav__separator">/</span>
      <router-link :to="breadcrumb.to" class="c-nav__item">
        {{ breadcrumb.name }}
      </router-link>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navigation',
    data () {
      return {
        breadcrumbs: [
          {
            name: 'About',
            to: '/about'
          },
          {
            name: 'Stephan de Vries',
            to: '/about/stephan'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .c-nav {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5%;

    &__item {
      color: #000;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 1px;
      display: inline-block;

      &:hover {
        text-decoration: underline;
      }

      &--logo {
        font-weight: 600;
      }
    }

    &__separator {
      display: inline-block;
      font-size: 12px;
      margin-right: .5rem;
    }

    &__breadcrumb {
      margin: .25rem;
      display: inline-block;
    }
  }
</style>
