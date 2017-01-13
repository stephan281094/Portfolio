<template>
  <nav class="c-nav">
    <div class="c-nav__breadcrumb">
      <router-link class="c-nav__item c-nav__item--logo" to="/">
        Stephan
      </router-link>
    </div>
    <div class="c-nav__breadcrumbs">
      <div class="c-nav__breadcrumb" v-for="breadcrumb in breadcrumbs">
        <span class="c-nav__separator">/</span>
        <router-link v-if="breadcrumb.to" :to="breadcrumb.to" class="c-nav__item">
          {{ breadcrumb.name }}
        </router-link>
        <span v-else class="c-nav__item">{{ breadcrumb.name }}</span>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navigation',
    props: {
      breadcrumbs: {
        type: Array,
        required: true
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
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;

    &__item {
      color: #000;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 1px;
      display: inline-block;
      white-space: nowrap;

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
      white-space: nowrap;

      &:last-child {
        margin-right: 5%;
      }
    }
  }
</style>
