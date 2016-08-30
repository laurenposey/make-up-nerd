import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('topic', {path: '/topic/:topic_id'});
  this.route('thread', {path: '/thread/:thread_id'});
});

export default Router;
