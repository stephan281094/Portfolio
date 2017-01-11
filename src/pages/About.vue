<template>
  <div>
    <div class="c-hero c-hero--blue">
      <h1>About</h1>
      <p>Who am I and what do I do?</p>
    </div>
    <div class="o-block">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        omnis nulla, suscipit natus sit hic eveniet, exercitationem laudantium
        praesentium facere numquam, voluptatem. Laborum dicta officiis illo
        voluptate laudantium sapiente veritatis.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-about',
    metaInfo: {
      title: 'About',
      meta: [
        { name: 'description', content: 'Who am I and what do I do?' }
      ]
    },
    mounted () {
      console.log('yaay, mounted.')
    }
  }
</script>
