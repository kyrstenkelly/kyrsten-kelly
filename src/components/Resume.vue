<template>
  <div class="resume">
    <div class="section">
      <div class="section__title">
        <img svg-inline class="section__icon" :src="icons.code" alt="code"/>
        Things I know
      </div>

      <div class="section__content">
        <languages v-bind="{languages, activeKey}" />
      </div>
    </div>

    <div class="section">
      <div class="section__title">
        <img svg-inline class="section__icon" :src="icons.tools" alt="tools"/>
        Tools I've Used
      </div>

      <div class="section__content">
        <tools v-bind="{tools, activeKey}" />
      </div>
    </div>

    <div class="section">
      <div class="section__title">
        <img svg-inline class="section__icon" :src="icons.building" alt="building"/>
        Places I've Worked
      </div>

      <div class="section__content">
        <jobs v-bind="{jobs, highlight, unhighlight}" />
      </div>
    </div>
  </div>
</template>

<script>
  import Languages from './Languages.vue';
  import Jobs from './Jobs.vue';
  import Tools from './Tools.vue';
  import data from '../data';

  export default {
    name: 'resume',
    components: {
      Languages,
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
    methods: {
      highlight: function(key) {
        this.activeKey = key;
      },
      unhighlight: function() {
        this.activeKey = '';
      },
    },
    data() {
      return {
        activeKey: '',
        languages: data.languages,
        tools: data.tools,
        jobs: data.jobs,
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
