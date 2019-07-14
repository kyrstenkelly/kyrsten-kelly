<template>
  <div class="app">
    <div class="intro">
      <img class="profile-image" src="@/assets/kyrsten.jpg" />
      <h1 class="title">Hi, I'm Kyrsten.</h1>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
    components: {},
    data() {
      return {
        title: 'Kyrsten Kelly'
      }
    }
  }
</script>

<style lang="scss">
.app {
  margin: spacing(2);

  @include media($screen-sm) {
    margin: spacing(3);
  }

  @include media($screen-md) {
    margin: spacing(4);
  }

  @include media($screen-lg) {
    margin: spacing(5);
  }
}

.intro {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: spacing(3) spacing(2);

  @include media($screen-sm) {
    flex-direction: row;
  }

  .profile-image {
    width: 60%;
    border-radius: 50%;
    margin-right: spacing(0);

    @include media($screen-sm) {
      width: 30%;
      max-width: 200px;
      margin-right: spacing(3);
    }

    @include media($screen-lg) {
      margin-right: spacing(5);
    }
  }
}
</style>
