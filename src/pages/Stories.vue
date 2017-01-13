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
