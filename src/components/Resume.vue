<template>
  <div class="resume">
    <div
      class="section"
      v-for="section in sections"
      :key="section.icon"
    >
      <div class="section__title">
        <img
          svg-inline
          class="section__icon"
          :src="icons[section.icon]"
          :alt="section.icon"
        />
        {{ section.title }}
      </div>

      <div v-if="section.component" class="section__content">
        <component :is="section.component"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Coding from './Coding.vue';
  import Jobs from './Jobs.vue';
  import Tools from './Tools.vue';

  export default {
    name: 'resume',
    components: {
      Coding,
      Jobs,
      Tools,
    },
    computed: {
      icons: () => ({
        code: require('@/assets/code.svg'),
        tools: require('@/assets/tools.svg'),
        building: require('@/assets/building.svg'),
      })
    },
    data() {
      return {
        sections: [{
          title: 'Things I know',
          icon: 'code',
          component: 'coding',
        }, {
          title: 'Tools I\'ve used',
          icon: 'tools',
          component: 'tools',
        }, {
          title: 'Places I\'ve worked',
          icon: 'building',
          component: 'jobs',
        }]
      }
    }
  }
</script>

<style lang="scss">
  .resume {
    .section {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: spacing(4);

      &__title {
        display: flex;
        align-items: center;

        font-family: $font-family-title;
        font-size: rem(20);
        line-height: rem(28);
        text-transform: uppercase;
        font-weight: $font-weight-semibold;
        letter-spacing: 1px;
      }

      &__icon {
        width: $icon-size;
        height: $icon-size;
        margin-right: spacing(1);
      }

      &__content {
        padding-left: 0;
        margin: spacing(3) 0 spacing(2);
        width: 100%;
      }

      @include media($screen-sm) {
        align-items: flex-start;

        &__content {
          padding-left: $icon-size + spacing(1);
        }
      }
    }
  }
</style>
