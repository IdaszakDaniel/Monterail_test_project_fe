import template from './mainFile.html';
import controller from './vote.controller';
import style from './style.less';

let singleComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'c'
};

export default singleComponent;
