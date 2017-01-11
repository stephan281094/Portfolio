<template>
  <div>
    <div class="c-hero c-hero--orange">
      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>
    </div>
    <div class="o-block">
      <div class="o-body">
        <h4>The problem</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate facere quisquam aliquam ad. Veritatis perferendis non officia doloribus doloremque inventore, unde aspernatur sequi amet a maiores reiciendis provident? Vero, autem.</p>
      </div>
    </div>
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
    }
  }
</script>
