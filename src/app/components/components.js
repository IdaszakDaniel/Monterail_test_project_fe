import angular from 'angular';

import single from './single/single.component';
import topics from './topics/topics.component';
import stars from './stars/stars.component';
import vote from './vote/vote.component';

export default angular
  .module('app.components', [
  ])
  .component('single', single)
  .component('stars', stars)
  .component('vote', vote)
  .component('topics', topics);