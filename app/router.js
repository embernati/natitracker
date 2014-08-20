import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ProjectsENV.locationType
});

Router.map(function() {
  this.resource('issues', function() {
    this.route('show', {path: '/:issue_id'});
    this.route('edit', {path: '/:issue_id/edit'});
    this.route('new');
  });
});

export default Router;
