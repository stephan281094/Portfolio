<template>
  <div class="o-content">
    <h1>{{ post.title }}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ea odio sit
      dolorem, dolores reiciendis veniam necessitatibus soluta reprehenderit, at
      error placeat cumque quisquam, perferendis accusantium nisi voluptas sunt, dolore.
    </p>
  </div>
</template>

<script>
  export default {
    name: 'post-detail',
    metaInfo () {
      return {
        title: this.post.title,
        meta: [
          { name: 'description', content: this.post.description }
        ]
      }
    },
    data () {
      return {
        post: this.$store.state.posts.find((post) => {
          return post.slug === this.$route.params.slug
        })
      }
    },
    mounted () {
      this.$store.commit('setBreadcrumbs', [
        { name: 'Blog', to: '/blog' },
        { name: this.post ? this.post.title : '...' },
      ])
    }
  }
</script>
