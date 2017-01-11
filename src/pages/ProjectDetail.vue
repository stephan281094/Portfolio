<template>
  <div>
    <div class="c-hero c-hero--green">
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
    </div>
    <div class="o-block">
      <p class="o-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ea odio sit dolorem, dolores reiciendis veniam necessitatibus soluta reprehenderit, at error placeat cumque quisquam, perferendis accusantium nisi voluptas sunt, dolore.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'project-detail',
    metaInfo () {
      return {
        title: this.project.title,
        meta: [
          { name: 'description', content: this.project.description }
        ]
      }
    },
    data () {
      return {
        project: this.$store.state.projects.find((project) => {
          return project.slug === this.$route.params.slug
        })
      }
    }
  }
</script>
