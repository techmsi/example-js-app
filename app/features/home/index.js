'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';

import routing from './routes';

export default angular.module('app.home', ['ngRoute'])
  .config(routing)
  .name;
