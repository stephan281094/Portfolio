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
    components: {
      navigation: Navigation
    }
  }
</script>
