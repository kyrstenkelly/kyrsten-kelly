<template>
  <ul class="jobs">
    <li
      class="job"
      v-for="job in jobs"
      :key="job.key"
      @mouseover="highlight(job.key)"
      @mouseout="unhighlight"
    >
      <div class="job__title"><b>{{ job.company }}</b> | {{ job.position }}</div>
      <div class="job__dates">{{ job.startDate }} - {{ job.endDate }}</div>
      <div class="job__langs">{{ job.languages }} </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'jobs',
  props: {
    jobs: Array,
    highlight: Function,
    unhighlight: Function,
  }
}
</script>

<style lang="scss">
  .jobs {
    display: block;
    padding-left: 0;
    margin: 0;

    .job {
      display: block;
      text-align: center;
      margin-bottom: spacing(2);

      &:hover {
        cursor: pointer;
      }

      &__title {
        margin-bottom: spacing(1);
      }
    }

    @include media($screen-sm) {
      .job {
        text-align: left;
      }
    }
  }
</style>
