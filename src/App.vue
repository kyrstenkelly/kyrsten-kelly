<template>
  <div id="app">
    <div class="intro">
      <progressive-img
        class="profile-image"
        :src="image"
        :placeholder="imagePlaceholder"
      />
      <h1 class="title">Hi, I'm Kyrsten.</h1>
    </div>

    <resume />
  </div>
</template>

<script>
  import Resume from '@/components/Resume.vue';

  export default {
    name: 'app',
    components: {
      Resume,
    },
    computed: {
      image: () => require('@/assets/kyrsten.jpg'),
      imagePlaceholder: () => require('@/assets/kyrsten-compressed.jpg')
    },
  }
</script>

<style lang="scss">
#app {
  max-width: 900px;
  margin: spacing(2);

  @include media($screen-sm) {
    margin: spacing(4);
  }

  @include media($screen-md) {
    margin: spacing(6);
  }

  @include media($screen-lg) {
    margin: spacing(8) auto;
  }
}

.intro {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: spacing(5) spacing(2);

  .profile-image {
    width: 60%;
    border-radius: 50%;
    margin-right: spacing(0);
    transition: width .2s ease;
  }

  .title {
    font-size: rem(36);
    transition: font-size .2s ease;
  }

  @include media($screen-sm) {
    margin: spacing(7) spacing(2);
    flex-direction: row;

    .profile-image {
      width: 25%;
      max-width: 150px !important;
      margin-right: spacing(3);
    }

    .title {
      font-size: rem(44);
    }
  }

  @include media($screen-md) {
    .title {
      font-size: rem(56);
    }
  }

  @include media($screen-lg) {
    .profile-image {
      margin-right: spacing(5);
    }

    .title {
      font-size: rem(64);
    }
  }
}
</style>
