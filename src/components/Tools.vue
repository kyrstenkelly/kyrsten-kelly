<template>
  <ul class="tools">
    <li
      class="tools__item"
      v-for="item in items"
      :key="item.label"
    >
      <a class="link" :href="item.link" target="_blank">
        {{ item.label }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tools',
  data() {
    return {
      items: [
        { label: 'AWS', link: 'https://aws.amazon.com/' },
        { label: 'Bitbucket', link: 'https://bitbucket.org/product' },
        { label: 'Chartio', link: 'https://chartio.com/' },
        { label: 'Circle CI', link: 'https://circleci.com/' },
        { label: 'Cloudflare', link: 'https://www.cloudflare.com/' },
        { label: 'Datadog', link: 'https://www.datadoghq.com/' },
        { label: 'Git', link: 'https://git-scm.com/' },
        { label: 'Github', link: 'https://github.com' },
        { label: 'Gitlab', link: 'https://gitlab.com/gitlab-com' },
        { label: 'Google Analytics', link: 'https://analytics.google.com/analytics/web/' },
        { label: 'JIRA', link: 'https://www.atlassian.com/software/jira' },
        { label: 'Kibana', link: 'https://www.elastic.co/products/kibana' },
        { label: 'Marathon', link: 'https://mesosphere.github.io/marathon/' },
        { label: 'New Relic',  link: 'https://newrelic.com/' },
        { label: 'Optimizely', link: 'https://www.optimizely.com/' },
        { label: 'PagerDuty', link: 'https://www.pagerduty.com/' },
        { label: 'Segment', link: 'https://segment.com/' },
        { label: 'Trello', link: 'https://trello.com/' },
      ],
    }
  }

}
</script>

<style lang="scss">
  .tools {
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
