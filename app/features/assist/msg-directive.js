'use strict';

import AssistFormController from './controller';

class MessagesDirective {
  constructor(controller) {
    this.scope = {
      field: '='
    };
    this.restrict = 'E';
    this.templateUrl = 'features/assist/msg-directive.html';
    this.controller = controller;
    this.controllerAs = 'msg';
    this.bindToController = {
      field: '='
    };
  }

}

MessagesDirective.$inject = ['$scope'];
export default MessagesDirective
