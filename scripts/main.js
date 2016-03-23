import angular from 'angular';
import ngRoute from 'angular-route';

import AppComponent from './components/app/app.component';
import SidebarComponent from './components/sidebar/sidebar.component';
import NavbarComponent from './components/navbar/navbar.component';
import ContentComponent from './components/content/content.component';

import FakeItemsService from './services/fake-items';

angular.module('app', [
  'ngRoute'
])
.component('app', AppComponent)
.component('sidebar', SidebarComponent)
.component('navbar', NavbarComponent)
.component('content', ContentComponent)
.service('FakeItemsService', FakeItemsService);