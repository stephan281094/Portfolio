<template>
  <div>
    <div class="c-hero c-hero--green">
      <h1>Projects</h1>
      <p>An overview of projects I worked on.</p>
    </div>
    <div class="o-block">
      <div class="c-projects">
        <project v-for="project in $store.state.projects" :item="project"
          :to="`/projects/${project.slug}`" />
      </div>
    </div>
  </div>
</template>

<script>
  import Item from '~components/Item.vue'

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
      project: Item
    }
  }
</script>

<style>
  .c-projects {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
