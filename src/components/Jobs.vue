<template>
  <ul class="jobs">
    <li v-for="job in jobs" :key="job.company" class="job">
      <b>{{ job.company }}</b> | {{ job.position }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'jobs',
  data() {
    return {
      jobs: [
        { company: 'Udacity', position: 'Fullstack Engineer', },
        { company: 'TrendKite', position: 'Fullstack Engineer', },
        { company: 'Spiceworks', position: 'UI Developer' },
        { company: 'Drilling Info, Inc', position: 'Software Developer'},
      ]
    }
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
      padding-bottom: spacing(1);
    }

    @include media($screen-sm) {
      .job {
        text-align: left;
      }
    }
  }
</style>
