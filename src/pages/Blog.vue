<template>
  <div>
    <div class="c-hero c-hero--orange">
      <h1>Blog</h1>
      <p>A personal blog about coding and thoughts that keep me busy.</p>
    </div>
    <div class="o-block">
      <div class="c-posts">
        <post v-for="post in $store.state.posts" :to="`/blog/${post.slug}`"
          :item="post" />
      </div>
    </div>
  </div>
</template>

<script>
  import Item from '~components/Item.vue'

  export default {
    name: 'page-blog',
    metaInfo: {
      title: 'Blog',
      meta: [
        {
          name: 'description',
          content: 'A personal blog about coding and thoughts that keep me busy'
        }
      ]
    },
    components: {
      post: Item
    }
  }
</script>

<style lang="scss">
  .c-posts {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: stretch;
  }
</style>
