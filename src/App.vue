<template>
  <div id="app">
    <c-header />
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '~components/Header.vue'

  export default {
    name: 'app',
    metaInfo: {
      titleTemplate: '%s - Stephan de Vries',
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
      'c-header': Header
    }
  }
</script>

<style lang="scss">
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    min-height: 100%;
  }

  body {
    font: 16px / 1.5 'Helvetica Neue', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
</style>
