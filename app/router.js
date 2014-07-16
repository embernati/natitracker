import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ProjectsENV.locationType
});

Router.map(function() {
  this.resource('issues', function() {
    this.route('show', {path: '/:issue_id'});
  });
});

export default Router;
