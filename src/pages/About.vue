<template>
  <main class="o-main">
    <navigation :breadcrumbs="[{ name: 'About' }]" />
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
      omnis nulla, suscipit natus sit hic eveniet, exercitationem laudantium
      praesentium facere numquam, voluptatem. Laborum dicta officiis illo
      voluptate laudantium sapiente veritatis.
    </p>
  </main>
</template>

<script>
  import Navigation from '~components/Navigation.vue'

  export default {
    name: 'page-about',
    metaInfo: {
      title: 'About',
      meta: [
        { name: 'description', content: 'Who is Stephan and what does he do?' }
      ]
    },
    components: {
      navigation: Navigation
    }
  }
</script>
