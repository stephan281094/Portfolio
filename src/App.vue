<template>
  <div class="app">
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
    height: 100%;
    box-sizing: border-box;
  }

  html,
  body {
    position: relative;
    padding: 0;
    margin: 0;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  body {
    font: 16px / 1.5 'Helvetica Neue', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    padding: 0 25px;
    margin: 0;
  }

  .app {
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

  .o-content {
    padding: 0 5%;
    display: flex;
  }
</style>
