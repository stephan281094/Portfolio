<template>
  <div>
    <div class="c-hero c-hero--default">
      <h1>Stephan de Vries</h1>
      <p>A portfolio website of Stephan de Vries.</p>
    </div>
    <router-link class="c-hero c-hero--blue" to="/about">
      <h2>About</h2>
      <p>Who am I and what do I do?</p>
    </router-link>
    <router-link class="c-hero c-hero--green" to="/projects">
      <h2>Projects</h2>
      <p>An overview of projects I worked on.</p>
    </router-link>
    <router-link class="c-hero c-hero--orange" to="/blog">
      <h2>Blog</h2>
      <p>A personal blog about coding and thoughts that keep me busy.</p>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'page-home',
    metaInfo: {
      title: 'Stephan de Vries',
      meta: [
        {
          name: 'description',
          content: 'A portfolio website of Stephan de Vries.'
        }
      ]
    }
  }
</script>
