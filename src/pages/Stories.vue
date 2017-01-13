<template>
  <main class="o-main">
    <navigation :breadcrumbs="[{ name: 'Stories' }]" />
    <ul>
      <li v-for="story in $store.state.stories">
        <router-link :to="`/stories/${story.slug}`">
          {{ story.title }}
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script>
  import Navigation from '~components/Navigation.vue'

  export default {
    name: 'page-stories',
    metaInfo: {
      title: 'Stories',
      meta: [
        {
          name: 'description',
          content: 'A personal blog about coding and thoughts that keep me busy.'
        }
      ]
    },
    components: {
      navigation: Navigation
    }
  }
</script>
