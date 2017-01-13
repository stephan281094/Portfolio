<template>
  <div class="o-content">
    <h1>About</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
      omnis nulla, suscipit natus sit hic eveniet, exercitationem laudantium
      praesentium facere numquam, voluptatem. Laborum dicta officiis illo
      voluptate laudantium sapiente veritatis.
    </p>
  </div>
</template>

<script>
  export default {
    name: 'page-about',
    metaInfo: {
      title: 'About',
      meta: [
        { name: 'description', content: 'Who is Stephan and what does he do?' }
      ]
    },
    mounted () {
      this.$store.commit('setBreadcrumbs', [
        { name: 'About' }
      ])
    }
  }
</script>
