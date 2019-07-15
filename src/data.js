const jobs = [{
  key: 'udacity-platform',
  company: 'Udacity',
  position: 'Fullstack Engineer, Platform',
  startDate: 'June \'19',
  endDate: 'Present',
}, {
  key: 'udacity-growth',
  company: 'Udacity',
  position: 'Fullstack Engineer, Admissions/Growth',
  startDate: 'Oct \'17',
  endDate: 'June \'19',
}, {
  key: 'trendkite',
  company: 'TrendKite',
  position: 'Fullstack Engineer',
  startDate: 'Nov \'16',
  endDate: 'Oct \'17'
}, {
  key: 'spiceworks',
  company: 'Spiceworks',
  position: 'UI Developer',
  startDate: 'Aug \'15',
  endDate: 'Nov \'16'
}, {
  key: 'drilling-info',
  company: 'Drilling Info, Inc',
  position: 'Software Developer',
  startDate: 'June \'13',
  endDate: 'Aug \'15'
}, {
  key: 'drilling-info-intern',
  company: 'Drilling Info, Inc',
  position: 'Software Intern',
  startDate: 'Jan \'13',
  endDate: 'June \'13'
}];

const languages = [{
  key: 'javascript',
  label: 'JavaScript',
  jobs: ['drilling-info-intern', 'drilling-info', 'spiceworks', 'trendkite', 'udacity-growth', 'udacity-platform']
},{
  key: 'html',
  label: 'HTML/CSS',
  jobs: ['drilling-info-intern', 'drilling-info', 'spiceworks', 'trendkite', 'udacity-growth', 'udacity-platform']
},{
  key: 'sass',
  label: 'SASS',
  jobs: ['spiceworks', 'trendkite', 'udacity-growth', 'udacity-platform']
},{
  key: 'go',
  label: 'Go',
  jobs: ['udacity-growth', 'udacity-platform']
},{
  key: 'python',
  label: 'Python',
  jobs: ['drilling-info']
},{
  key: 'java',
  label: 'Java',
  jobs: ['drilling-info', 'trendkite']
},{
  key: 'scala',
  label: 'Scala',
  jobs: ['drilling-info']
},{
  key: 'ruby',
  label: 'Ruby',
  jobs: ['spiceworks']
},{
  key: 'php',
  label: 'PHP',
  jobs: ['spiceworks']
},{
  key: 'node',
  label: 'Node',
  jobs: ['drilling-info-intern', 'drilling-info', 'spiceworks', 'trendkite', 'udacity-growth', 'udacity-platform']
},{
  key: 'react',
  label: 'React',
  jobs: ['trendkite', 'udacity-growth', 'udacity-platform']
},{
  key: 'angular',
  label: 'Angular',
  jobs: ['drilling-info-intern', 'drilling-info', 'spiceworks', 'udacity-growth']
},{
  key: 'vue',
  label: 'Vue',
  jobs: []
},{
  key: 'ember',
  label: 'Ember',
  jobs: ['spiceworks']
},{
  key: 'express',
  label: 'Express',
  jobs: ['udacity-grwoth']
},{
  key: 'graphql',
  label: 'GraphQL',
  jobs: ['udacity-growth']
},{
  key: 'grails',
  label: 'Grails',
  jobs: ['trendkite']
},{
  key: 'terraform',
  label: 'Terraform',
  jobs: ['udacity-platform']
},{
  key: 'elasticsearch',
  label: 'ElasticSearch',
  jobs: ['drilling-info']
},{
  key: 'sql',
  label: 'SQL',
  jobs: ['trendkite', 'udacity-growth', 'udacity-platform']
},{
  key: 'postgresql',
  label: 'PostgreSQL',
  jobs: ['udacity-growth', 'udacity-platform']
},{
  key: 'mongodb',
  label: 'MongoDB',
  jobs: []
}]


const tools = [{
  key: 'aws',
  label: 'AWS',
  jobs: ['trendkite', 'admissions-growth', 'admissions-platform']
}, {
  key: 'bitbucket',
  label: 'Bitbucket',
  jobs: ['trendkite']
}, {
  key: 'chartio',
  label: 'Chartio',
  jobs: ['udacity-growth']
}, {
  key: 'circle',
  label: 'Circle CI',
  jobs: ['udacity-growth', 'udacity-platform']
}, {
  key: 'cloudflare',
  label: 'Cloudflare',
  jobs: ['udacity-growth', 'udacity-platform']
}, {
  key: 'datadog',
  label: 'Datadog',
  jobs: ['udacity-growth', 'udacity-platform']
}, {
  key: 'git',
  label: 'Git',
  jobs: ['drilling-info-intern', 'drilling-info', 'spiceworks', 'trendkite', 'udacity-growth', 'udacity-platform']
}, {
  key: 'github',
  label: 'Github',
  jobs: ['drilling-info-intern', 'drilling-info', 'udacity-growth', 'udacity-platform']
}, {
  key: 'gitlab',
  label: 'Gitlab',
  jobs: ['spiceworks']
}, {
  key: 'googleAnalytics',
  label: 'Google Analytics',
  jobs: ['spiceworks']
}, {
  key: 'jira',
  label: 'JIRA',
  jobs: ['trendkite', 'udacity-growth', 'udacity-platform']
}, {
  key: 'kibana',
  label: 'Kibana',
  jobs: ['udacity-growth', 'udacity-platform']
}, {
  key: 'marathon',
  label: 'Marathon',
  jobs: ['udacity-growth', 'udacity-platform']
}, {
  key: 'newRelic',
  label: 'New Relic',
  jobs: ['udacity-growth', 'udacity-platform']
}, {
  key: 'optimizely',
  label: 'Optimizely',
  jobs: ['udacity-growth', 'udacity-platform']
}, {
  key: 'pagerduty',
  label: 'PagerDuty',
  jobs: ['udacity-growth', 'udacity-platform']
}, {
  key: 'play',
  label: 'Play 2 Framework',
  jobs: ['drilling-info']
}, {
  key: 'segment',
  label: 'Segment',
  jobs: ['udacity-growth', 'udacity-platform']
}, {
  key: 'trello',
  label: 'Trello',
  jobs: ['spiceworks']
}]

export default {
  jobs,
  tools,
  languages,
}
