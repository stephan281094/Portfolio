<template>
  <main class="o-main">
    <navigation :breadcrumbs="breadcrumbs" />
    <h1>{{ project.title }}</h1>
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
    name: 'page-project',
    metaInfo () {
      return {
        title: this.project.title,
        meta: [
          { name: 'description', content: this.project.description }
        ]
      }
    },
    data () {
      return {
        project: this.$store.state.projects.find((project) => {
          return project.slug === this.$route.params.slug
        })
      }
    },
    computed: {
      breadcrumbs () {
        return [
          { name: 'Projects', to: '/projects' },
          { name: this.project ? this.project.title : '...' },
        ]
      }
    },
    components: {
      navigation: Navigation
    }
  }
</script>
