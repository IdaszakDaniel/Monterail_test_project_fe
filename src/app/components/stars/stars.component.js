import template from './mainFile.html';
import controller from './stars.controller';
import styles from './style.less'

let singleComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'c'
};

export default singleComponent;
