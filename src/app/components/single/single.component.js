import template from './mainFile.html';
import controller from './single.controller';
import styles from './style.less'

let singleComponent = {
  restrict: 'E',
  bindings: { "idi": "<"},
  require: { parent : '^^app'},
  template,
  controller,
  controllerAs: 'c'
};

export default singleComponent;
