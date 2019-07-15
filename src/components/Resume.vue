<template>
  <div class="resume">
    <div
      class="section"
      v-for="section in sections"
      v-bind:key="section.icon"
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

      <ul class="section__content">
        <li
          class="section__content-item"
          v-for="item in section.items"
          v-bind:key="item"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'resume',
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
          items: ['React', 'Angular', 'Vue', 'JavaScript', 'Golang']
        }, {
          title: 'Tools I\'ve used',
          icon: 'tools',
          items: [
            'Git', 'Github', 'Gitlab', 'JIRA', 'Trello', 'AWS', 'Cloudflare',
            'New Relic', 'Datadog', 'Chartio', 'Marathon', 'Circle CI',
            'Kibana', 'PagerDuty', 'Segment', 'Google Analytics', 'Optimizely'
          ]
        }, {
          title: 'Places I\'ve worked',
          icon: 'building',
          items: ['TrendKite', 'Spiceworks', 'Drilling Info, Inc']
        }]
      }
    }
  }
</script>

<style lang="scss">
  $icon-size: 22px;

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
        text-align: center;
        padding-left: 0;
        margin-bottom: spacing(1);

        &-item {
          display: inline-block;
          padding-right: spacing(1.5);
          padding-bottom: spacing(1);

          &:after {
            content: "\2022";
            display: inline-block;
            margin-left: spacing(1);
          }

          &:last-of-type {
            padding-right: 0;

            &:after {
              display: none;
            }
          }
        }
      }

      @include media($screen-sm) {
        align-items: flex-start;

        &__content {
          text-align: left;
          padding-left: $icon-size + spacing(1);
        }
      }
    }
  }
</style>
