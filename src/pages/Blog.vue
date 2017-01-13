<template>
  <div class="o-content">
    <ul>
      <li v-for="post in $store.state.posts">
        <router-link :to="`/blog/${post.slug}`">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'page-blog',
    metaInfo: {
      title: 'blog',
      meta: [
        {
          name: 'description',
          content: 'A personal blog about coding and thoughts that keep me busy.'
        }
      ]
    },
    mounted () {
      this.$store.commit('setBreadcrumbs', [
        { name: 'Blog' }
      ])
    }
  }
</script>
