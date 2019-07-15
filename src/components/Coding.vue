<template>
  <ul class="code">
    <li
      class="code__item"
      v-for="item in items"
      :key="item.label"
    >
      <a :class="`link ${item.type}`" :href="item.link" target="_blank">
        {{ item.label }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'coding',
  data() {
    return {
      items: [
        { type: 'language', label: 'JavaScript', link: 'https://www.javascript.com/' },
        { type: 'language', label: 'HTML/CSS', link: 'https://www.w3schools.com/html/' },
        { type: 'language', label: 'SASS', link: 'https://sass-lang.com/' },
        { type: 'language', label: 'Go', link: 'https://golang.org/' },
        { type: 'language', label: 'Python', link: 'https://www.python.org/' },
        { type: 'language', label: 'Java', link: 'https://www.java.com/' },
        { type: 'language', label: 'Scala', link: 'https://www.scala-lang.org/' },
        { type: 'language', label: 'Ruby', link: 'https://www.ruby-lang.org/en/' },
        { type: 'language', label: 'PHP', link: 'https://php.net/' },
        { type: 'library', label: 'Node', link: 'https://nodejs.org/' },
        { type: 'library', label: 'React', link: 'https://reactjs.org/' },
        { type: 'library', label: 'Angular', link: 'https://angular.io/' },
        { type: 'library', label: 'Vue', link: 'https://vuejs.org/' },
        { type: 'library', label: 'Ember', link: 'https://emberjs.com/' },
        { type: 'library', label: 'Express', link: 'https://expressjs.com/' },
        { type: 'library', label: 'GraphQL', link: 'https://graphql.org/' },
        { type: 'library', label: 'Grails', link: 'https://grails.org/' },
        { type: 'database', label: 'SQL', link: 'https://www.w3schools.com/sql/' },
        { type: 'database', label: 'PostgreSQL', link: 'https://www.postgresql.org/' },
        { type: 'database', label: 'MongoDB', link: 'https://www.mongodb.com/' },
      ],
    }
  }

}
</script>

<style lang="scss">
  .code {
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
