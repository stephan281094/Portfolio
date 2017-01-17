<template>
  <main class="o-main">
    <navigation :breadcrumbs="[{ name: 'Projects' }]" />
    <div class="o-content">
      <h1 class="o-content__title">Projects</h1>
      <ul>
        <li v-for="project in $store.state.projects">
          <router-link :to="`/projects/${project.slug}`">
            {{ project.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
  import Navigation from '~components/Navigation.vue'

  const fetchProjects = (store) => {
    return store.dispatch('projects.fetchAll')
  }

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
    beforeMount () {
      fetchProjects(this.$store)
    },
    preFetch: fetchProjects,
    components: {
      navigation: Navigation
    }
  }
</script>
