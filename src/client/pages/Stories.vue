<template>
  <main class="o-main">
    <navigation :breadcrumbs="[{ name: 'Stories' }]" />
    <div class="o-content">
      <h1 class="o-content__title">Stories</h1>
      <ul>
        <li v-for="story in $store.state.stories">
          <router-link :to="`/stories/${story.slug}`">
            {{ story.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
  import Navigation from '~components/Navigation.vue'

  const fetchStories = (store) => {
    return store.dispatch('stories.fetchAll')
  }

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
    beforeMount () {
      fetchStories(this.$store)
    },
    preFetch: fetchStories,
    components: {
      navigation: Navigation
    }
  }
</script>
