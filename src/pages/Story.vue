<template>
  <main class="o-main">
    <navigation :breadcrumbs="breadcrumbs" />
    <h1>{{ story.title }}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ea odio sit
      dolorem, dolores reiciendis veniam necessitatibus soluta reprehenderit, at
      error placeat cumque quisquam, perferendis accusantium nisi voluptas sunt, dolore.
    </p>
  </main>
</template>

<script>
  import Navigation from '~components/Navigation.vue'

  export default {
    name: 'page-story',
    metaInfo () {
      return {
        title: this.story.title,
        meta: [
          { name: 'description', content: this.story.description }
        ]
      }
    },
    data () {
      return {
        story: this.$store.state.stories.find((story) => {
          return story.slug === this.$route.params.slug
        })
      }
    },
    computed: {
      breadcrumbs () {
        return [
          { name: 'Stories', to: '/stories' },
          { name: this.story ? this.story.title : '...' },
        ]
      }
    },
    components: {
      navigation: Navigation
    }
  }
</script>
