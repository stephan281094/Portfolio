<template>
  <div class="o-content">
    <ul>
      <li v-for="project in $store.state.projects">
        <router-link :to="`/projects/${project.slug}`">
          {{ project.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'page-projects',
    metaInfo: {
      title: 'Projects',
      meta: [
        {
          name: 'description',
          content: 'An overview of projects I worked on.'
        }
      ]
    },
    mounted () {
      this.$store.commit('setBreadcrumbs', [
        { name: 'Projects' }
      ])
    }
  }
</script>
