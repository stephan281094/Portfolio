<template>
  <div class="o-app">
    <router-view></router-view>
  </div>
</template>

<script>
  import Navigation from '~components/Navigation.vue'

  export default {
    name: 'app',
    metaInfo: {
      title: 'Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' },
        { name: 'theme-color', content: '#000' }
      ],
      link: [
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'icon', href: '/favicon.ico' }
      ]
    },
    components: {
      'c-navigation': Navigation
    }
  }
</script>

<style lang="scss">
  @import '~styles/index.scss';

  .o-app {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100%;
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    flex-direction: column;
    flex: 1;
  }
</style>
