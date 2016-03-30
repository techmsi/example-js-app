'use strict';
// Assets: Static
import 'bootstrap/dist/css/bootstrap.css';

// Libraries: Angular
import angular from 'angular';
import ngRoute from 'angular-route';

// Shared: Filters
import caseFilter from './filters/case-filter';
// App: Configuaration
import appRouting from './app-config';
// Module: Assistance Request
import home from './features/home';
import assist from './features/assist';

// Approach: component-oriented
// $inject for dependency annotation
var app = angular.module('app', ['ngRoute', home, assist])
.config(appRouting)
.filter('case', caseFilter);
