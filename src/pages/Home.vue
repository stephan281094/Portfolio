<template>
  <main>
    <div class="c-head">
      <h1 class="c-head__title">Stephan de Vries</h1>
      <p class="c-head__description">
        Full stack developer <a href="https://angrybytes.com">@Angry&nbsp;Bytes</a>
      </p>
    </div>
    <div class="c-list">
      <router-link class="c-item" to="/about">
        <h2 class="c-item__title">About</h2>
        <p class="c-item__description">
          Who is Stephan and what does he&nbsp;do?
        </p>
      </router-link>
      <router-link class="c-item" to="/projects">
        <h2 class="c-item__title">Projects</h2>
        <p class="c-item__description">
          An overview of projects I worked&nbsp;on.
        </p>
      </router-link>
      <router-link class="c-item" to="/blog">
        <h2 class="c-item__title">Blog</h2>
        <p class="c-item__description">
          A personal blog about&nbsp;coding.
        </p>
      </router-link>
    </div>
  </main>
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
    },
    mounted () {
      this.$store.commit('setBreadcrumbs', [])
    }
  }
</script>

<style lang="scss">
  main {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1 0;
  }

  .c-head {
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 0;

    &__title {
      font-weight: 400;
      font-size: 2.5rem;
    }

    &__description {
      color: #567;
      font-weight: 300;
      font-size: 18px;
      letter-spacing: 2px;
    }
  }

  .c-list {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    margin-bottom: 10%;
  }

  .c-item {
    position: relative;
    padding: 1rem;
    width: 100%;
    margin: 0;
    display: block;
    outline: none;
    transform: scale(1);
    transition: transform .1s;

    &:hover,
    &:focus {
      background-color: #eee;
      text-decoration: none;
    }

    &:active {
      transform: scale(.98);
    }

    &:after {
      content: '>';
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 50px;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      color: #789;
      font-weight: 200;
    }

    &__title {
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    &__description {
      color: #789;
      font-weight: 200;
      letter-spacing: 2px;
      font-size: 16px;
    }
  }

  @media (max-width: 500px) {
    .c-list {
      margin-bottom: 0;
    }
  }
</style>
