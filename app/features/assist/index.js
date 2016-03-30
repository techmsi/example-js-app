/**
 * Assist Module
 */
'use strict';

// Libraries: Angular
import angular from 'angular';
import ngRoute from 'angular-route';

// Module: Configuaration
import routing from './routes';
import endpoints from './endpoints.json';

// Module: Assistance Request
import AssistService from './service';
import AssistFormController from './controller';
import MessagesDirective from './msg-directive';

export default angular.module('app.assist', ['ngRoute'])
  .constant('ENDPOINTS', endpoints)
  .config(routing)
  .service('AssistService', AssistService)
  .controller('AssistFormController', AssistFormController)
  .directive('helpMessages', () => new MessagesDirective(AssistFormController))
  .name;
