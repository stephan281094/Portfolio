<template>
  <div id="app">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
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
        { rel: 'manifest', href: '/manifest.json' }
      ]
    }
  }
</script>
