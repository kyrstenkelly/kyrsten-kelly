<template>
  <ul class="language">
    <li
      :class="`language__item ${item.jobs.includes(activeKey) ? 'active' : ''}`"
      v-for="item in languages"
      :key="item.label"
    >
      <a
        :href="item.link"
        target="_blank"
      >
        {{ item.label }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'languages',
  props: {
    activeKey: String,
    languages: Array,
  },
}
</script>

<style lang="scss">
  .language {
    display: block;
    padding-left: 0;
    margin: 0;
    columns: 2;

    &__item {
      display: block;
      text-align: center;
      padding-bottom: spacing(1);

      a {
        color: $slate;
      }

      &.active {
        a {
          color: $teal;
        }
      }
    }

    @include media($screen-sm) {
      columns: 3;

      &__item {
        text-align: left;
      }
    }

    @include media($screen-md) {
      columns: 4;
    }

    @include media($screen-lg) {
      columns: 5;
    }
  }
</style>
