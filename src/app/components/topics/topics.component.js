import template from './mainFile.html';
import controller from './topics.controller';
import styles from './style.less'

let singleComponent = {
  restrict: 'E',
  bindings: {},
  template,
  require: { parent : '^^app'},
  controller,
  controllerAs: 'c'
};

export default singleComponent;
