<template>
  <div class="app">
    <c-navigation />
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
    display: flex;
    flex-direction: column;
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

  .o-block {
    margin-top: 1px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 5%;
  }

  .o-body {
    max-width: 600px;
  }
</style>
